# Audiobook Generator (Edge-TTS)

Generate complete audiobooks from markdown chapter files using Microsoft Edge TTS.

## Output Structure

Each book generates sequentially numbered MP3 files for playlist playback:

| Tracks | Content |
|--------|---------|
| 01-06 | Front matter (copyright, dedication, epigraph, preface, prologue, introduction) |
| 07-16 | Chapters 1-10 |
| 17-22 | Back matter (about-the-author, also-by, authors-note, connect, epilogue, review-request) |

## Requirements

- Python 3.9+
- Edge-TTS package
- Markdown source files organized in `book-series/<Book Name>/` with:
  - `front_matter/` folder
  - `chapters/` folder
  - `back_matter/` folder

## Setup (PowerShell)

```powershell
Set-Location "e:\reality-without-belief\amazon-production\audiobooks"
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install edge-tts
```

## Generate Audiobook

```powershell
Set-Location "e:\reality-without-belief\amazon-production\audiobooks"
.\.venv\Scripts\Activate.ps1
python .\generate_audiobooks.py --voice en-US-BrianNeural --book "Reality Without Belief Book 1"
```

## Voice Options

- `en-US-BrianNeural` - US English male (default)
- `en-US-JennyNeural` - US English female
- `en-GB-RyanNeural` - UK English male

## Output Location

`amazon-production/audiobooks/output/<Book Name>/`

## Notes

- MP3 files are excluded from git via `.gitignore`
- The script reads directly from markdown files (not PDFs)
- Files are numbered sequentially for playlist compatibility
