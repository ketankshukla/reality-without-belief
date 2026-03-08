import argparse
import asyncio
import re
from pathlib import Path

import edge_tts

DEFAULT_VOICE = "en-US-BrianNeural"
DEFAULT_RATE = "+0%"
DEFAULT_PITCH = "+0Hz"

FRONT_MATTER_ORDER = [
    "copyright",
    "dedication",
    "epigraph",
    "preface",
    "prologue",
    "introduction",
]

BACK_MATTER_ORDER = [
    "about_the_author",
    "also_by",
    "authors_note",
    "connect",
    "epilogue",
    "review_request",
]


def clean_markdown(text: str) -> str:
    """Remove markdown formatting and clean text for TTS."""
    text = re.sub(r"^#+\s*", "", text, flags=re.MULTILINE)
    text = re.sub(r"\*\*([^*]+)\*\*", r"\1", text)
    text = re.sub(r"\*([^*]+)\*", r"\1", text)
    text = re.sub(r"__([^_]+)__", r"\1", text)
    text = re.sub(r"_([^_]+)_", r"\1", text)
    text = re.sub(r"`([^`]+)`", r"\1", text)
    text = re.sub(r"^\s*[-*+]\s+", "", text, flags=re.MULTILINE)
    text = re.sub(r"^\s*\d+\.\s+", "", text, flags=re.MULTILINE)
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)
    text = re.sub(r"!\[([^\]]*)\]\([^)]+\)", "", text)
    text = re.sub(r"^>\s*", "", text, flags=re.MULTILINE)
    text = re.sub(r"^---+$", "", text, flags=re.MULTILINE)
    text = re.sub(r"^===+$", "", text, flags=re.MULTILINE)
    text = re.sub(r"\n{3,}", "\n\n", text)
    text = text.strip()
    return text


async def generate_audio(
    md_path: Path,
    output_path: Path,
    voice: str,
    rate: str,
    pitch: str,
) -> None:
    """Generate a single MP3 file from a markdown file."""
    raw_text = md_path.read_text(encoding="utf-8")
    clean_text = clean_markdown(raw_text)

    if not clean_text:
        print(f"  Skipping {md_path.name} (empty after cleaning)")
        return

    output_path.parent.mkdir(parents=True, exist_ok=True)

    print(f"  Generating: {output_path.name}...")
    communicate = edge_tts.Communicate(
        text=clean_text,
        voice=voice,
        rate=rate,
        pitch=pitch,
    )
    await communicate.save(str(output_path))
    print(f"  Saved: {output_path.name}")


def get_ordered_files(folder: Path, order_list: list[str]) -> list[Path]:
    """Return markdown files in the specified order, skipping missing ones."""
    ordered = []
    for name in order_list:
        md_file = folder / f"{name}.md"
        if md_file.exists():
            ordered.append(md_file)
    return ordered


def get_chapter_files(chapters_folder: Path) -> list[Path]:
    """Return chapter markdown files sorted by chapter number."""
    return sorted(chapters_folder.glob("chapter_*.md"))


async def process_book(
    book_dir: Path,
    output_dir: Path,
    voice: str,
    rate: str,
    pitch: str,
) -> None:
    """Process a complete book: front matter, chapters, back matter."""
    front_matter_dir = book_dir / "front_matter"
    chapters_dir = book_dir / "chapters"
    back_matter_dir = book_dir / "back_matter"

    book_output_dir = output_dir / book_dir.name
    book_output_dir.mkdir(parents=True, exist_ok=True)

    track_number = 1

    if front_matter_dir.exists():
        front_files = get_ordered_files(front_matter_dir, FRONT_MATTER_ORDER)
        print(f"Processing {len(front_files)} front matter files...")
        for md_file in front_files:
            slug = md_file.stem.replace("_", "-")
            output_file = book_output_dir / f"{track_number:02d}-{slug}.mp3"
            await generate_audio(md_file, output_file, voice, rate, pitch)
            track_number += 1

    if chapters_dir.exists():
        chapter_files = get_chapter_files(chapters_dir)
        print(f"Processing {len(chapter_files)} chapters...")
        for md_file in chapter_files:
            match = re.match(r"chapter_(\d+)_(.+)", md_file.stem)
            if match:
                ch_num = match.group(1)
                ch_slug = match.group(2).replace("_", "-")
                output_name = f"{track_number:02d}-chapter-{ch_num}-{ch_slug}.mp3"
            else:
                output_name = f"{track_number:02d}-{md_file.stem.replace('_', '-')}.mp3"
            output_file = book_output_dir / output_name
            await generate_audio(md_file, output_file, voice, rate, pitch)
            track_number += 1

    if back_matter_dir.exists():
        back_files = get_ordered_files(back_matter_dir, BACK_MATTER_ORDER)
        print(f"Processing {len(back_files)} back matter files...")
        for md_file in back_files:
            slug = md_file.stem.replace("_", "-")
            output_file = book_output_dir / f"{track_number:02d}-{slug}.mp3"
            await generate_audio(md_file, output_file, voice, rate, pitch)
            track_number += 1

    print(f"Completed: {book_dir.name} ({track_number - 1} tracks)")


async def main() -> None:
    parser = argparse.ArgumentParser(
        description="Generate complete audiobook MP3 files from markdown using Edge-TTS."
    )
    parser.add_argument(
        "--book-series",
        type=str,
        default=str(Path(__file__).resolve().parent.parent.parent / "book-series"),
        help="Path to the book-series folder.",
    )
    parser.add_argument(
        "--output",
        type=str,
        default=str(Path(__file__).resolve().parent / "output"),
        help="Output folder for audiobook files.",
    )
    parser.add_argument(
        "--book",
        type=str,
        default="",
        help="Name or partial name of a specific book folder to process.",
    )
    parser.add_argument(
        "--voice",
        type=str,
        default=DEFAULT_VOICE,
        help="Edge-TTS voice name.",
    )
    parser.add_argument(
        "--rate",
        type=str,
        default=DEFAULT_RATE,
        help="Speech rate (e.g. +0 percent, -5 percent).",
    )
    parser.add_argument(
        "--pitch",
        type=str,
        default=DEFAULT_PITCH,
        help="Speech pitch (e.g. +0Hz, +2Hz).",
    )

    args = parser.parse_args()
    book_series_dir = Path(args.book_series)
    output_dir = Path(args.output)

    if args.book:
        matching = [d for d in book_series_dir.iterdir() if d.is_dir() and args.book.lower() in d.name.lower()]
        if not matching:
            raise FileNotFoundError(f"Book folder not found: {args.book}")
        book_dirs = matching
    else:
        book_dirs = sorted([d for d in book_series_dir.iterdir() if d.is_dir() and "Reality Without Belief Book" in d.name])

    if not book_dirs:
        raise FileNotFoundError(f"No book folders found in {book_series_dir}")

    for book_dir in book_dirs:
        await process_book(
            book_dir=book_dir,
            output_dir=output_dir,
            voice=args.voice,
            rate=args.rate,
            pitch=args.pitch,
        )

    print("Done.")


if __name__ == "__main__":
    asyncio.run(main())
