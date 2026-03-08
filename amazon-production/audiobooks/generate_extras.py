"""
Generate opening credits, closing credits, and retail sample audio files for all books.
"""
import asyncio
import edge_tts
import os
import re

VOICE = "en-US-BrianNeural"

BOOKS = [
    {
        "name": "Reality Without Belief Book 1 - Why We Believe, Why It Fails, and What It Costs Us",
        "source": r"e:\reality-without-belief\book-series\Reality Without Belief Book 1 - Why We Believe, Why It Fails, and What It Costs Us",
        "output": r"e:\reality-without-belief\amazon-production\audiobooks\output\Reality Without Belief Book 1 - Why We Believe, Why It Fails, and What It Costs Us"
    },
    {
        "name": "Reality Without Belief Book 2 - Facing Reality Without Interpretation, Meaning, or Comfort",
        "source": r"e:\reality-without-belief\book-series\Reality Without Belief Book 2 - Facing Reality Without Interpretation, Meaning, or Comfort",
        "output": r"e:\reality-without-belief\amazon-production\audiobooks\output\Reality Without Belief Book 2 - Facing Reality Without Interpretation, Meaning, or Comfort"
    },
    {
        "name": "Reality Without Belief Book 3 - How Culture, Identity, and Outrage Replace Thinking",
        "source": r"e:\reality-without-belief\book-series\Reality Without Belief Book 3 - How Culture, Identity, and Outrage Replace Thinking",
        "output": r"e:\reality-without-belief\amazon-production\audiobooks\output\Reality Without Belief Book 3 - How Culture, Identity, and Outrage Replace Thinking"
    },
    {
        "name": "Reality Without Belief Book 4 - How to See, Listen, Decide, and Respond Without Belief",
        "source": r"e:\reality-without-belief\book-series\Reality Without Belief Book 4 - How to See, Listen, Decide, and Respond Without Belief",
        "output": r"e:\reality-without-belief\amazon-production\audiobooks\output\Reality Without Belief Book 4 - How to See, Listen, Decide, and Respond Without Belief"
    },
    {
        "name": "Reality Without Belief Book 5 - Freedom, Loneliness, Death, and What Remains",
        "source": r"e:\reality-without-belief\book-series\Reality Without Belief Book 5 - Freedom, Loneliness, Death, and What Remains",
        "output": r"e:\reality-without-belief\amazon-production\audiobooks\output\Reality Without Belief Book 5 - Freedom, Loneliness, Death, and What Remains"
    }
]

def clean_markdown(text):
    """Remove markdown formatting for TTS."""
    text = re.sub(r'^#+\s*', '', text, flags=re.MULTILINE)
    text = re.sub(r'\*\*([^*]+)\*\*', r'\1', text)
    text = re.sub(r'\*([^*]+)\*', r'\1', text)
    text = re.sub(r'_([^_]+)_', r'\1', text)
    text = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', text)
    text = re.sub(r'^[-*]\s+', '', text, flags=re.MULTILINE)
    text = re.sub(r'^---+$', '', text, flags=re.MULTILINE)
    text = re.sub(r'\n{3,}', '\n\n', text)
    return text.strip()

async def generate_audio(text, output_path):
    """Generate audio from text using edge-tts."""
    communicate = edge_tts.Communicate(text, VOICE)
    await communicate.save(output_path)

async def process_book(book):
    """Process a single book's extra files."""
    print(f"\nProcessing: {book['name']}")
    
    # Opening credits
    opening_path = os.path.join(book['source'], 'front_matter', 'opening_credits.md')
    if os.path.exists(opening_path):
        with open(opening_path, 'r', encoding='utf-8') as f:
            text = clean_markdown(f.read())
        output_file = os.path.join(book['output'], '00-opening-credits.mp3')
        print(f"  Generating: 00-opening-credits.mp3...")
        await generate_audio(text, output_file)
        print(f"  Saved: 00-opening-credits.mp3")
    
    # Closing credits
    closing_path = os.path.join(book['source'], 'back_matter', 'closing_credits.md')
    if os.path.exists(closing_path):
        with open(closing_path, 'r', encoding='utf-8') as f:
            text = clean_markdown(f.read())
        output_file = os.path.join(book['output'], '23-closing-credits.mp3')
        print(f"  Generating: 23-closing-credits.mp3...")
        await generate_audio(text, output_file)
        print(f"  Saved: 23-closing-credits.mp3")
    
    # Retail sample
    sample_path = os.path.join(book['source'], 'front_matter', 'retail_sample.md')
    if os.path.exists(sample_path):
        with open(sample_path, 'r', encoding='utf-8') as f:
            text = clean_markdown(f.read())
        output_file = os.path.join(book['output'], '24-retail-sample.mp3')
        print(f"  Generating: 24-retail-sample.mp3...")
        await generate_audio(text, output_file)
        print(f"  Saved: 24-retail-sample.mp3")

async def main():
    for book in BOOKS:
        await process_book(book)
    print("\nDone generating all extra audio files.")

if __name__ == "__main__":
    asyncio.run(main())
