# Agentic Book Creation System

## Overview

This documentation describes how to use an AI agent (Claude/Cascade) to automatically generate complete, publication-ready book projects from a single client brief. The system is designed to support **Metronagon Media's** book publishing services and can be extended from single books to full series.

## Documentation Structure

| Document                           | Purpose                                                                         |
| ---------------------------------- | ------------------------------------------------------------------------------- |
| `01-SYSTEM-ARCHITECTURE.md`        | Complete system design, agent workflow, and integration points                  |
| `02-PROJECT-STRUCTURE.md`          | Standard folder/file structure for generated book projects                      |
| `03-BOOK-BRIEF-TEMPLATE.md`        | **THE INPUT** — Fill this out to generate a complete book                       |
| `04-IMAGE-PROMPT-TEMPLATES.md`     | Reusable templates for book covers, logos, banners, social media                |
| `05-CONTENT-GENERATION-GUIDE.md`   | Detailed instructions for each content type (chapters, front/back matter, etc.) |
| `06-AGENT-WORKFLOW.md`             | Step-by-step execution workflow for the agent                                   |
| `07-QUALITY-STANDARDS.md`          | Quality criteria derived from the Reality Without Belief project                |
| `08-METRONAGON-PACKAGE-MAPPING.md` | Maps Metronagon service packages to deliverables                                |
| `09-QUICK-START-AUTHOR-MODE.md`    | **FAST MODE** — Generate books from 2-3 sentences                               |
| `book-concepts/`                   | **100 READY-TO-USE CONCEPTS** — 50 fiction + 50 non-fiction detailed concepts   |

## Quick Start

### Option 0: Use a Pre-Made Concept (Fastest)

1. **Browse** `book-concepts/fiction/` or `book-concepts/non-fiction/`
2. **Say:** "Generate a book from concept [number], e.g., fiction/023-the-authenticity-plague"
3. **Agent** uses the detailed concept to generate the complete book project
4. **Receive** complete project folder with all assets

### Option A: Author Mode (Recommended for Ketan)

1. **Say:** "Generate a book from this concept: [2-3 sentences describing your book]"
2. **Agent** auto-generates a complete brief using creative judgment
3. **Agent** generates the entire book project
4. **Receive** complete project folder with all assets

### Option B: Full Brief Mode (For Clients)

1. **Copy** `03-BOOK-BRIEF-TEMPLATE.md` to a new file
2. **Fill in** all required sections with your book details
3. **Hand** the completed brief to the AI agent
4. **Receive** a complete project folder with all assets

## Reference Projects

- **Reality Without Belief** (5-book series) — `E:\reality-without-belief`
- **Metronagon Media** — [www.metronagon.com](https://www.metronagon.com)
- **Author Site** — Your author website for bio and credentials

## Supported Outputs

### For Amazon KDP

- Kindle ebook (EPUB generation-ready content)
- Paperback (print-ready content)
- Audiobook scripts (chapter-by-chapter for text-to-speech)

### Marketing Assets

- Book cover image prompts (multiple concepts)
- Series logo prompts
- Box set cover prompts
- Social media banners
- YouTube thumbnail prompts
- Book trailer scripts

### Amazon Listings

- Book descriptions (keyword-optimized)
- KDP categories and keywords
- A+ Content suggestions

## Version

- **v1.0** — Single book generation
- **v2.0** (planned) — Full series generation with inter-book continuity

---

_Built for Metronagon Media by Ketan Shukla_
