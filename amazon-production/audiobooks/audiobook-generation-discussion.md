# Audiobook Generation - Final Implementation

## What We Built

A Python-based audiobook generator using Microsoft Edge TTS that reads markdown chapter files and produces high-quality MP3 audiobooks.

## Key Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Source format | Markdown files | PDF OCR produced poor audio quality with skipped/cut words |
| TTS engine | Edge-TTS (en-US-BrianNeural) | Free, high quality, natural US English male voice |
| Output format | MP3 | Universal compatibility, good compression |
| File structure | Sequential numbering | Enables playlist playback in correct order |

## Track Structure (22 tracks per book)

1. **Front Matter (01-06)**: copyright, dedication, epigraph, preface, prologue, introduction
2. **Chapters (07-16)**: All 10 chapters
3. **Back Matter (17-22)**: about-the-author, also-by, authors-note, connect, epilogue, review-request

## Source Structure

```
book-series/
└── Reality Without Belief Book 1 - .../
    ├── front_matter/
    │   ├── copyright.md
    │   ├── dedication.md
    │   ├── epigraph.md
    │   ├── preface.md
    │   ├── prologue.md
    │   └── introduction.md
    ├── chapters/
    │   ├── chapter_01_....md
    │   └── ...
    └── back_matter/
        ├── about_the_author.md
        ├── also_by.md
        ├── authors_note.md
        ├── connect.md
        ├── epilogue.md
        └── review_request.md
```

## What We Learned

- **PDF extraction failed**: OCR from PDFs produced audio with skipped words and cut-off sentences
- **Markdown works perfectly**: Reading directly from markdown files produces smooth, natural narration
- **No chunking needed**: Edge-TTS handles long texts well without splitting
- **Sequential numbering essential**: Enables proper playlist ordering for audiobook listening

## Files in This Folder

- `generate_audiobooks.py` - Main generation script
- `requirements.txt` - Python dependencies
- `README.md` - Quick reference guide
- `audiobook-generation-process.md` - Reusable template for other projects
- `output/` - Generated MP3 files (gitignored)
- `.venv/` - Python virtual environment (gitignored)
