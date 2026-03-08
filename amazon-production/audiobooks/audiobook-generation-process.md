# Audiobook Generation Process for ACX/Audible

Complete guide for generating audiobooks from markdown files for ACX/Audible distribution.

---

## Prerequisites

Your book series must have this folder structure:

```
book-series/
└── [Book Name]/
    ├── front_matter/
    │   ├── opening_credits.md      # NEW: "00-opening-credits.mp3"
    │   ├── copyright.md
    │   ├── dedication.md
    │   ├── epigraph.md
    │   ├── preface.md
    │   ├── prologue.md
    │   ├── introduction.md
    │   └── retail_sample.md        # NEW: "24-retail-sample.mp3" (5 min or less)
    ├── chapters/
    │   ├── chapter_01_[title].md   # Each book starts chapters at 01
    │   ├── chapter_02_[title].md
    │   └── ... (chapter_XX_[title].md format)
    └── back_matter/
    │   ├── epilogue.md             # Track 17
    │   ├── authors_note.md         # Track 18
    │   ├── also_by.md              # Track 19 (rename to also-by-ketan-shukla)
    │   ├── about_the_author.md     # Track 20
    │   ├── connect.md              # Track 21 (rename to connect-with-ketan-shukla)
    │   ├── review_request.md       # Track 22 (rename to a-quick-favor)
    │   └── closing_credits.md      # NEW: "23-closing-credits.mp3"
```

### Important: Chapter Numbering

Each book should have chapters starting from `chapter_01_` regardless of its position in the series. Do NOT continue chapter numbers across books.

---

## Step 1: Create Audiobooks Folder

Create `amazon-production/audiobooks/` in the project root.

---

## Step 2: Add to .gitignore

Add these lines to the project's `.gitignore`:

```
# Audio files
*.mp3
*.wav

# Audiobook generation
amazon-production/audiobooks/output/
amazon-production/audiobooks/.venv/
```

---

## Step 3: Create requirements.txt

Create `amazon-production/audiobooks/requirements.txt`:

```
edge-tts>=6.1.10
```

---

## Step 4: Create generate_audiobooks.py

Create `amazon-production/audiobooks/generate_audiobooks.py` with this content:

```python
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
        book_dirs = sorted([d for d in book_series_dir.iterdir() if d.is_dir()])

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
```

---

## Step 5: Setup Virtual Environment

Run in PowerShell from the `audiobooks` folder:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

---

## Step 6: Generate Audiobook

Run in PowerShell from the `audiobooks` folder:

```powershell
.\.venv\Scripts\Activate.ps1
python .\generate_audiobooks.py --voice en-US-BrianNeural --book "[Book Name]"
```

Replace `[Book Name]` with a partial match of the book folder name.

---

## Output

MP3 files will be saved to:
`amazon-production/audiobooks/output/[Book Name]/`

---

## ACX Track Listing (25 tracks per book)

| Track | Filename                         | Source                             |
| ----- | -------------------------------- | ---------------------------------- |
| 00    | 00-opening-credits.mp3           | front_matter/opening_credits.md    |
| 01    | 01-copyright.mp3                 | front_matter/copyright.md          |
| 02    | 02-dedication.mp3                | front_matter/dedication.md         |
| 03    | 03-epigraph.mp3                  | front_matter/epigraph.md           |
| 04    | 04-preface.mp3                   | front_matter/preface.md            |
| 05    | 05-prologue.mp3                  | front_matter/prologue.md           |
| 06    | 06-introduction.mp3              | front_matter/introduction.md       |
| 07-16 | 07-chapter-01-[title].mp3 ...    | chapters/chapter*01*[title].md ... |
| 17    | 17-epilogue.mp3                  | back_matter/epilogue.md            |
| 18    | 18-authors-note.mp3              | back_matter/authors_note.md        |
| 19    | 19-also-by-ketan-shukla.mp3      | back_matter/also_by.md             |
| 20    | 20-about-the-author.mp3          | back_matter/about_the_author.md    |
| 21    | 21-connect-with-ketan-shukla.mp3 | back_matter/connect.md             |
| 22    | 22-a-quick-favor.mp3             | back_matter/review_request.md      |
| 23    | 23-closing-credits.mp3           | back_matter/closing_credits.md     |
| 24    | 24-retail-sample.mp3             | front_matter/retail_sample.md      |

---

## Step 7: Generate Extra Files

After running the main audiobook generation, run the extras script:

```powershell
.\.venv\Scripts\python.exe .\generate_extras.py
```

This generates:

- `00-opening-credits.mp3` - Book title, author, narrator, copyright
- `23-closing-credits.mp3` - Thank you message, next book teaser
- `24-retail-sample.mp3` - 5-minute compelling sample from book beginning

---

## Step 8: Rename Back Matter Files

The back matter files need to be renamed to match ACX table of contents. Run this PowerShell script:

```powershell
$bookFolders = @(
    "Reality Without Belief Book 1 - Why We Believe, Why It Fails, and What It Costs Us",
    # Add more book folders as needed
)

$basePath = "e:\reality-without-belief\amazon-production\audiobooks\output"

foreach ($folder in $bookFolders) {
    $path = Join-Path $basePath $folder

    # Rename to temp names first to avoid conflicts
    Rename-Item "$path\17-about-the-author.mp3" "temp-about-the-author.mp3" -Force
    Rename-Item "$path\18-also-by.mp3" "temp-also-by.mp3" -Force
    Rename-Item "$path\19-authors-note.mp3" "temp-authors-note.mp3" -Force
    Rename-Item "$path\20-connect.mp3" "temp-connect.mp3" -Force
    Rename-Item "$path\21-epilogue.mp3" "temp-epilogue.mp3" -Force
    Rename-Item "$path\22-review-request.mp3" "temp-review-request.mp3" -Force

    # Rename to final names
    Rename-Item "$path\temp-epilogue.mp3" "17-epilogue.mp3" -Force
    Rename-Item "$path\temp-authors-note.mp3" "18-authors-note.mp3" -Force
    Rename-Item "$path\temp-also-by.mp3" "19-also-by-ketan-shukla.mp3" -Force
    Rename-Item "$path\temp-about-the-author.mp3" "20-about-the-author.mp3" -Force
    Rename-Item "$path\temp-connect.mp3" "21-connect-with-ketan-shukla.mp3" -Force
    Rename-Item "$path\temp-review-request.mp3" "22-a-quick-favor.mp3" -Force
}

---

## Step 9: Create Audiobook Cover

For each book, create a square cover image (2400×2400px minimum).

1. View the original book cover in `amazon-production/pdf covers/`
2. Use the prompt file `amazon-production/audiobooks/book1-audiobook-cover-prompt.md` with ChatGPT or an image generator
3. Save the square cover for ACX upload

---

## Voice Options

| Voice | Description |
|-------|-------------|
| `en-US-BrianNeural` | US English male (recommended) |
| `en-US-JennyNeural` | US English female |
| `en-GB-RyanNeural` | UK English male |

---

## Retail Sample Guidelines

Per ACX requirements:
- **Duration:** 5 minutes or less
- **Content:** Start from the beginning of the audiobook for seamless transition
- **Purpose:** Compelling hook to drive purchases

Include:
- Book title and author credit
- Prologue excerpt
- Introduction excerpt
- First chapter opening
- Call to action to purchase

---

## Troubleshooting

- **Skipped words**: Ensure you're reading from markdown files, not PDFs
- **Files out of order**: Check that chapter files follow `chapter_XX_title.md` naming
- **Missing tracks**: Verify markdown files exist in the expected folders
- **Chapter numbers wrong**: Each book should start chapters at 01, not continue from previous book
```
