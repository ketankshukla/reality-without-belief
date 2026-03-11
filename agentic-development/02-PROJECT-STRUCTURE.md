# Agentic Book Creation System — Project Structure

## Overview

This document defines the standard folder and file structure for AI-generated book projects. This structure ensures consistency, enables automation, and matches Amazon KDP publishing requirements.

---

## Single Book Project Structure

```
[Book Title]/
├── README.md                          # Project overview and status
├── book-brief.md                      # The original brief (input)
├── book-plan.md                       # Generated arc, chapters, themes
│
├── front_matter/
│   ├── copyright.md                   # Copyright notice, ISBN, edition
│   ├── dedication.md                  # Personal dedication
│   ├── epigraph.md                    # Opening quote
│   ├── preface.md                     # Author's framing and context
│   ├── introduction.md                # Book overview, chapter preview
│   └── prologue.md                    # Narrative opening
│
├── chapters/
│   ├── chapter_01_[slug].md           # Chapter 1 full content
│   ├── chapter_02_[slug].md           # Chapter 2 full content
│   ├── chapter_03_[slug].md           # ...
│   ├── chapter_04_[slug].md
│   ├── chapter_05_[slug].md
│   ├── chapter_06_[slug].md
│   ├── chapter_07_[slug].md
│   ├── chapter_08_[slug].md
│   ├── chapter_09_[slug].md
│   └── chapter_10_[slug].md           # Chapter 10 full content
│
├── back_matter/
│   ├── epilogue.md                    # Closing narrative/reflection
│   ├── acknowledgments.md             # Thank you section
│   ├── about_author.md                # Author bio
│   ├── also_by.md                     # Other works listing
│   └── call_to_action.md              # Review request, newsletter
│
├── chapter-summaries/
│   ├── chapter_01_summary.md          # 3-minute verbal summary
│   ├── chapter_02_summary.md
│   ├── chapter_03_summary.md
│   ├── chapter_04_summary.md
│   ├── chapter_05_summary.md
│   ├── chapter_06_summary.md
│   ├── chapter_07_summary.md
│   ├── chapter_08_summary.md
│   ├── chapter_09_summary.md
│   └── chapter_10_summary.md
│
├── book-summary/
│   └── book_summary.md                # 5-minute inspirational video script
│
├── book_descriptions/
│   └── description.md                 # Amazon listing description (HTML)
│
├── image-prompts/
│   ├── cover_prompts.md               # 5 book cover concepts
│   ├── logo_prompt.md                 # Series/book logo prompt
│   ├── banner_prompts.md              # Social media banners
│   ├── thumbnail_prompts.md           # YouTube/video thumbnails
│   └── additional_prompts.md          # Other marketing assets
│
├── amazon-assets/
│   ├── kdp-categories-keywords.md     # Category and keyword research
│   ├── a-plus-content.md              # A+ Content suggestions
│   └── pricing-strategy.md            # Pricing recommendations
│
├── audiobook/
│   ├── narrator-notes.md              # Direction for narrator/TTS
│   ├── intro-script.md                # Audiobook intro
│   ├── outro-script.md                # Audiobook outro/credits
│   └── chapter-scripts/               # Cleaned chapter text for TTS
│       ├── chapter_01_audio.md
│       ├── chapter_02_audio.md
│       └── ...
│
├── marketing/
│   ├── social-media-posts.md          # Pre-written social posts
│   ├── email-newsletter.md            # Launch email templates
│   ├── press-release.md               # Media announcement
│   └── launch-plan.md                 # Marketing timeline
│
└── generated-images/                  # Folder for final images (manual)
    ├── covers/
    ├── logos/
    ├── banners/
    └── thumbnails/
```

---

## File Naming Conventions

### Chapters
```
chapter_[NN]_[slug].md
```
- `NN` = Two-digit chapter number (01, 02, ... 10)
- `slug` = Lowercase, underscored chapter title
- Example: `chapter_01_belief_is_not_a_virtue.md`

### Summaries
```
chapter_[NN]_summary.md
```
- Matches chapter numbering
- Example: `chapter_05_summary.md`

### Image Prompts
```
[asset-type]_prompts.md
```
- Use lowercase with underscores
- Example: `cover_prompts.md`, `banner_prompts.md`

---

## File Content Standards

### Markdown Headers

All content files use consistent heading structure:

```markdown
# [Title]

## [Section]

### [Subsection]
```

### Front Matter Files

Each front matter file begins with a single `# Title` followed by content:

```markdown
# Dedication

To [Name] — [dedication text]
```

### Chapter Files

Each chapter follows this structure:

```markdown
# Chapter [N]: [Title]

[Chapter content in flowing paragraphs]

[Em dashes used for emphasis and rhythm]

[Hooks to next chapter at the end]
```

### Summary Files

Each summary follows this structure:

```markdown
# Chapter [N] Summary: [Title]

## Core Argument

[One paragraph stating the main thesis]

## Key Points

- **[Point 1]** — [Brief explanation]
- **[Point 2]** — [Brief explanation]
- **[Point 3]** — [Brief explanation]
- **[Point 4]** — [Brief explanation]

## One-Line Takeaway

[Single powerful sentence]
```

### Image Prompt Files

Each prompt file follows this structure:

```markdown
# [Asset Type] Image Prompts

## [Book Title]

### [Subtitle]

All prompts are for [dimensions and format].

---

## Prompt 1: [Concept Name]

[Detailed prompt text with all specifications]

---

## Prompt 2: [Concept Name]

[Detailed prompt text]

---

[Continue for all concepts]
```

---

## Book Description Format

Amazon book descriptions use HTML formatting:

```html
<b>Hook statement that grabs attention</b>

<p>Opening paragraph that establishes the problem or premise.</p>

<p><i>[Book Title]</i> is [positioning statement].</p>

<p><b>In these chapters, you will discover:</b></p>
<ul>
<li>Benefit/discovery 1</li>
<li>Benefit/discovery 2</li>
<li>Benefit/discovery 3</li>
<li>Benefit/discovery 4</li>
<li>Benefit/discovery 5</li>
</ul>

<p>This book is for [target audience description].</p>

<p><i>Call to action statement.</i></p>

<p><b>Additional positioning/series info.</b></p>
```

---

## Audiobook Script Format

Audiobook scripts are cleaned for text-to-speech:

```markdown
# Chapter [N]: [Title]

[Read by: Narrator Name or AI Voice]

[Pause: 2 seconds]

[Chapter content with pronunciation guides]

[Em dashes rendered as pauses]

[Numbers written out in full]

[Abbreviations expanded]

[End of chapter]

[Pause: 3 seconds]
```

---

## Project README Template

```markdown
# [Book Title]

## By [Author Name]

### Status: [Draft / Review / Final]

---

## Book Information

- **Genre:** [Genre/Subgenre]
- **Word Count:** [Approximate]
- **Chapter Count:** [Number]
- **Target Audience:** [Description]

---

## Project Contents

- [ ] Front Matter (6 files)
- [ ] Chapters ([N] files)
- [ ] Back Matter (5 files)
- [ ] Chapter Summaries ([N] files)
- [ ] Book Summary (1 file)
- [ ] Book Description (1 file)
- [ ] Image Prompts (5+ files)
- [ ] Amazon Assets (3 files)
- [ ] Audiobook Scripts ([N] files)
- [ ] Marketing Materials (4 files)

---

## Generation Log

- **Brief Received:** [Date]
- **Arc Generated:** [Date]
- **Content Generated:** [Date]
- **Assets Generated:** [Date]
- **Review Completed:** [Date]

---

## Notes

[Any special notes about this project]
```

---

## Folder Structure for Book Series

For multi-book series, the structure expands:

```
[Series Name]/
├── README.md                          # Series overview
├── series-plan.md                     # Series arc and book summaries
├── series-brand-guide.md              # Visual/tone consistency guide
│
├── shared-assets/
│   ├── series-logo-prompt.md          # Series logo prompt
│   ├── box-set-cover-prompt.md        # Box set cover prompt
│   ├── series-banner-prompts.md       # Series-wide banners
│   └── series-description.md          # Series overview for Amazon
│
├── [Book 1 Title]/
│   ├── [Full single book structure]
│   └── ...
│
├── [Book 2 Title]/
│   ├── [Full single book structure]
│   └── ...
│
└── [Book N Title]/
    ├── [Full single book structure]
    └── ...
```

---

## Quality Checklist

Before a project is considered complete:

### Content
- [ ] All front matter files present and complete
- [ ] All chapters written to target word count
- [ ] All back matter files present and complete
- [ ] Chapter summaries created for all chapters
- [ ] Book summary created
- [ ] Book description in HTML format

### Assets
- [ ] 5 book cover prompts with full specifications
- [ ] Additional prompts as needed (logo, banner, etc.)
- [ ] KDP categories and keywords researched
- [ ] A+ Content suggestions provided

### Audiobook
- [ ] Narrator notes created
- [ ] Intro/outro scripts created
- [ ] Chapter scripts cleaned for TTS

### Marketing
- [ ] Social media posts drafted
- [ ] Email newsletter template created
- [ ] Press release drafted
- [ ] Launch plan outlined

---

## Reference: Reality Without Belief Structure

The Reality Without Belief project serves as the gold standard:

```
book-series/
├── Reality Without Belief Book 1 - Why We Believe.../
│   ├── front_matter/
│   │   ├── copyright.md
│   │   ├── dedication.md
│   │   ├── epigraph.md
│   │   ├── preface.md
│   │   ├── introduction.md
│   │   └── prologue.md
│   ├── chapters/
│   │   └── chapter_01...chapter_10.md
│   ├── back_matter/
│   │   └── epilogue.md
│   ├── chapter-summaries/
│   │   └── chapter_01_summary...chapter_10_summary.md
│   ├── book-summary/
│   │   └── book_1_summary.md
│   ├── book_descriptions/
│   │   └── description.md
│   └── image-prompts/
│       └── book_1_cover_prompts.md
```

---

*Project Structure v1.0 — Single Book Generation*
*Designed for Metronagon Media*
