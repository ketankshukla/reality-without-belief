# Audiobook Generation - Reality Without Belief

Generate audiobook MP3 and M4B files from markdown source files using Microsoft Edge TTS.

**Voice:** en-US-BrianNeural

## Book Titles

| Book | Title                        |
| ---- | ---------------------------- |
| 1    | The Anatomy Of Belief        |
| 2    | The Nature Of What Is So     |
| 3    | The Theater Of Conviction    |
| 4    | The Practice Of Clear Seeing |
| 5    | The Quiet Exit               |

## Setup

```powershell
cd e:\reality-without-belief\amazon-production\audiobooks
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

## Generate MP3 Audiobooks

### All Books

```powershell
py generate_audiobooks.py
```

### Single Book

```powershell
py generate_audiobooks.py --book "Book 1"
```

## Generate M4B Audiobooks (with chapters)

After generating MP3s, create M4B files with embedded chapters and cover art:

```powershell
py create_m4b.py
```

## Output Structure

```
output/                          # MP3 files (25 tracks per book)
├── Reality Without Belief Book 1 - .../
│   ├── 00-opening-credits.mp3
│   ├── 01-copyright.mp3
│   └── ... (25 tracks)
└── ...

m4b-audiobook/                   # M4B files (one per book)
├── Reality Without Belief Book 1 - The Anatomy Of Belief/
│   └── Reality Without Belief Book 1 - The Anatomy Of Belief.m4b
├── Reality Without Belief Book 2 - The Nature Of What Is So/
│   └── Reality Without Belief Book 2 - The Nature Of What Is So.m4b
├── Reality Without Belief Book 3 - The Theater Of Conviction/
│   └── Reality Without Belief Book 3 - The Theater Of Conviction.m4b
├── Reality Without Belief Book 4 - The Practice Of Clear Seeing/
│   └── Reality Without Belief Book 4 - The Practice Of Clear Seeing.m4b
└── Reality Without Belief Book 5 - The Quiet Exit/
    └── Reality Without Belief Book 5 - The Quiet Exit.m4b

audiobook-covers/                # Cover images (2400x2400, 24-bit)
└── *.jpg
```

## Track Numbering (ACX Standard - 25 tracks)

| Track | Content                                                                            |
| ----- | ---------------------------------------------------------------------------------- |
| 00    | Opening Credits                                                                    |
| 01-06 | Front Matter (copyright, dedication, epigraph, preface, prologue, introduction)    |
| 07-16 | Chapters 1-10                                                                      |
| 17-22 | Back Matter (epilogue, author's note, also by, about author, connect, quick favor) |
| 23    | Closing Credits                                                                    |
| 24    | Retail Sample                                                                      |

## Notes

- MP3/M4B files are excluded from git via `.gitignore`
- M4B files include embedded chapter markers and cover art
- Use `ffprobe` to verify chapter metadata in M4B files
