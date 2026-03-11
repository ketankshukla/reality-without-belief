# Agent Workflow Guide

## Overview

This document provides the step-by-step workflow for the AI agent to generate a complete book project from a client brief. Follow this workflow sequentially to ensure all deliverables are created correctly.

---

## Pre-Flight Checklist

Before beginning generation, verify:

- [ ] Complete brief received (see `03-BOOK-BRIEF-TEMPLATE.md`)
- [ ] All required sections filled in
- [ ] Any clarifications resolved with client
- [ ] Target folder location determined
- [ ] Deliverables scope confirmed

---

## Phase 1: Brief Analysis (5-10 minutes)

### Step 1.1: Parse the Brief

Read the complete brief and extract:

| Element | Extract |
|---------|---------|
| Book title and subtitle | Exact text |
| Author name | Exact spelling |
| Genre and subgenre | Primary category |
| Target audience | Detailed profile |
| Core thesis/premise | Central argument |
| Tone specifications | All selected options |
| Style preferences | Do's and don'ts |
| Chapter count | Target number |
| Word count | Target range |
| Deliverables requested | Checklist |

### Step 1.2: Identify Gaps

Flag any missing or unclear information:

```
REQUIRED but missing:
- [List items]

OPTIONAL but would improve output:
- [List items]

CLARIFICATION needed:
- [List questions]
```

### Step 1.3: Confirm Understanding

If clarification needed, ask client. Otherwise, proceed with documented assumptions.

---

## Phase 2: Story Architecture (15-30 minutes)

### Step 2.1: Create Book Plan

Generate `book-plan.md` containing:

```markdown
# Book Plan: [Title]

## Core Information
- **Title:** [Title]
- **Subtitle:** [Subtitle]
- **Author:** [Author]
- **Genre:** [Genre]
- **Word Count Target:** [Range]
- **Chapter Count:** [Number]

## Central Thesis
[2-3 paragraphs defining the core argument/premise]

## Thematic Through-Lines
1. [Theme 1] — How it manifests across chapters
2. [Theme 2] — How it manifests across chapters
3. [Theme 3] — How it manifests across chapters

## Emotional Arc
- Beginning: [Reader's starting state]
- Middle: [Transformation in progress]
- End: [Reader's ending state]

## Chapter Outline

### Chapter 1: [Title]
- **Core Argument:** [One sentence]
- **Key Points:** [Bullet list]
- **Transformation:** [What shifts for the reader]
- **Word Count Target:** [Number]

### Chapter 2: [Title]
[Continue for all chapters...]

## Front Matter Plan
- **Dedication:** [To whom, style]
- **Epigraph:** [Quote or theme for selection]
- **Preface:** [Focus areas]
- **Introduction:** [Structure]
- **Prologue:** [Type and concept]

## Back Matter Plan
- **Epilogue:** [Focus and structure]
- **Acknowledgments:** [Key people]
- **Series Context:** [If applicable]
```

### Step 2.2: Validate Arc

Check that:
- [ ] Each chapter serves a distinct purpose
- [ ] Chapters build logically
- [ ] Arc has clear beginning, middle, end
- [ ] Themes weave consistently
- [ ] Pacing builds appropriately

---

## Phase 3: Folder Structure Creation (2 minutes)

### Step 3.1: Create Project Folder

```powershell
# Create main project folder
New-Item -ItemType Directory -Path "[BookTitle]" -Force

# Create subfolders
$folders = @(
    "front_matter",
    "chapters",
    "back_matter",
    "chapter-summaries",
    "book-summary",
    "book_descriptions",
    "image-prompts",
    "amazon-assets",
    "audiobook",
    "audiobook/chapter-scripts",
    "marketing",
    "generated-images",
    "generated-images/covers",
    "generated-images/logos",
    "generated-images/banners"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path "[BookTitle]/$folder" -Force
}
```

### Step 3.2: Create README

Generate project `README.md` with status tracking.

---

## Phase 4: Front Matter Generation (20-30 minutes)

### Execution Order

Generate in this sequence (later files may reference earlier ones):

1. **copyright.md** — Based on author name, title, year
2. **dedication.md** — Based on brief dedication section
3. **epigraph.md** — Based on themes, select appropriate quote
4. **preface.md** — Author's voice, why this book
5. **prologue.md** — Narrative opening per brief type
6. **introduction.md** — Chapter preview, promises, journey ahead

### Quality Checks Per File

After generating each file:
- [ ] Word count within target
- [ ] Tone matches brief
- [ ] No placeholder text
- [ ] Formatting correct
- [ ] Cross-references accurate

---

## Phase 5: Chapter Generation (60-120 minutes)

### Step 5.1: Generate Chapters Sequentially

For each chapter:

1. Review chapter outline from book plan
2. Generate full chapter content
3. Ensure opening hook engages
4. Build to key insight
5. End with bridge to next chapter
6. Verify word count

### Step 5.2: Chapter Generation Template

```markdown
# Chapter [N]: [Title]

[Opening hook — provocative statement, question, or scene that immediately engages]

[Core content — main argument/narrative developed across multiple sections]

[Key insight/turn — the "aha" moment]

[Practical application — how the reader uses this]

[Bridge to next — hooks the following chapter]
```

### Step 5.3: Maintain Consistency

While generating chapters, track:
- Recurring terms and definitions
- Examples and references
- Tone consistency
- Building complexity
- Theme reinforcement

### Step 5.4: Chapter Naming

```
chapter_01_[slug].md
chapter_02_[slug].md
...
chapter_10_[slug].md
```

Slug = lowercase, underscored chapter title

---

## Phase 6: Back Matter Generation (15-20 minutes)

### Execution Order

1. **epilogue.md** — Reflect on journey, preview next (if series)
2. **acknowledgments.md** — Thank key people
3. **about_author.md** — Author bio from brief
4. **also_by.md** — Other works listing
5. **call_to_action.md** — Review request, engagement

---

## Phase 7: Summaries Generation (20-30 minutes)

### Step 7.1: Chapter Summaries

For each chapter, generate `chapter-summaries/chapter_[NN]_summary.md`:

```markdown
# Chapter [N] Summary: [Title]

## Core Argument
[One paragraph, 3-4 sentences]

## Key Points
- **[Point 1]** — [Brief explanation]
- **[Point 2]** — [Brief explanation]
- **[Point 3]** — [Brief explanation]
- **[Point 4]** — [Brief explanation]

## One-Line Takeaway
[Single powerful sentence]
```

### Step 7.2: Book Summary (Video Script)

Generate `book-summary/book_summary.md`:

- 5-minute inspirational script
- No metadata or scene markers
- Flowing paragraphs for narration
- Ends with "Buy the book now" CTA

---

## Phase 8: Book Description (10 minutes)

### Step 8.1: Generate Description

Create `book_descriptions/description.md`:

- HTML formatted for Amazon
- Hook, problem, promise structure
- Bullet list of benefits
- Target reader description
- Closing hook
- Series positioning (if applicable)

### Step 8.2: Keyword Integration

Integrate target keywords naturally:
- In opening paragraph
- In benefit bullets
- In closing

---

## Phase 9: Image Prompts (30-45 minutes)

### Step 9.1: Book Cover Prompts

Generate `image-prompts/cover_prompts.md`:

- 5 distinct concepts
- Full specifications per template
- Exact text placement instructions
- Consistent visual identity

### Step 9.2: Additional Asset Prompts

Based on deliverables requested:

| File | Content |
|------|---------|
| `logo_prompt.md` | Series/book logo concept |
| `banner_prompts.md` | Social media banners (3 concepts) |
| `thumbnail_prompts.md` | YouTube thumbnails (2 concepts) |
| `additional_prompts.md` | Any other requested assets |

### Step 9.3: Prompt Quality Verification

For each prompt, verify:
- [ ] Dimensions and DPI specified
- [ ] Color palette consistent
- [ ] Typography specified exactly
- [ ] Composition rules for text
- [ ] Mood/style clearly defined
- [ ] Technical requirements stated

---

## Phase 10: Amazon Assets (15 minutes)

### Step 10.1: KDP Categories & Keywords

Generate `amazon-assets/kdp-categories-keywords.md`:

```markdown
# KDP Categories and Keywords

## Primary Category
[Category path]

## Secondary Category
[Category path]

## Keywords (7 maximum)
1. [Keyword 1]
2. [Keyword 2]
3. [Keyword 3]
4. [Keyword 4]
5. [Keyword 5]
6. [Keyword 6]
7. [Keyword 7]

## Keyword Research Notes
[Brief explanation of keyword selection]
```

### Step 10.2: A+ Content Suggestions

Generate `amazon-assets/a-plus-content.md`:

- Module suggestions
- Copy for each module
- Image placement recommendations

---

## Phase 11: Audiobook Preparation (20 minutes)

### Step 11.1: Narrator Notes

Generate `audiobook/narrator-notes.md`:

- Tone and pacing guidance
- Pronunciation guides
- Character voices (if fiction)
- Emphasis and pause suggestions

### Step 11.2: Intro/Outro Scripts

Generate:
- `audiobook/intro-script.md` — Opening narration
- `audiobook/outro-script.md` — Closing credits and CTA

### Step 11.3: Chapter Scripts

For each chapter, generate cleaned TTS-ready version:
- Numbers written out
- Abbreviations expanded
- Em dashes converted to pauses
- No markdown formatting

---

## Phase 12: Marketing Materials (15 minutes)

### Step 12.1: Social Media Posts

Generate `marketing/social-media-posts.md`:

- 10 pre-written posts
- Varied formats (quote, question, teaser)
- Hashtag suggestions
- Platform-specific variations

### Step 12.2: Email Newsletter

Generate `marketing/email-newsletter.md`:

- Launch announcement template
- Follow-up sequence (3 emails)
- Subject lines
- CTAs

### Step 12.3: Press Release

Generate `marketing/press-release.md`:

- Standard press release format
- Key messaging
- Author quotes
- Contact information placeholders

---

## Phase 13: Final Review (15 minutes)

### Step 13.1: Completeness Check

Verify all files created:

```
Front Matter:
- [ ] copyright.md
- [ ] dedication.md
- [ ] epigraph.md
- [ ] preface.md
- [ ] introduction.md
- [ ] prologue.md

Chapters:
- [ ] All [N] chapters created
- [ ] Proper naming convention
- [ ] Word counts appropriate

Back Matter:
- [ ] epilogue.md
- [ ] acknowledgments.md
- [ ] about_author.md
- [ ] also_by.md
- [ ] call_to_action.md

Summaries:
- [ ] All chapter summaries
- [ ] Book summary

Descriptions:
- [ ] description.md (HTML)

Image Prompts:
- [ ] cover_prompts.md (5 concepts)
- [ ] Additional prompts as requested

Amazon Assets:
- [ ] kdp-categories-keywords.md
- [ ] a-plus-content.md

Audiobook:
- [ ] narrator-notes.md
- [ ] intro-script.md
- [ ] outro-script.md
- [ ] Chapter scripts

Marketing:
- [ ] social-media-posts.md
- [ ] email-newsletter.md
- [ ] press-release.md
```

### Step 13.2: Consistency Review

Verify:
- [ ] Title/subtitle consistent everywhere
- [ ] Author name spelled correctly
- [ ] Tone consistent across content
- [ ] No placeholder text remaining
- [ ] Cross-references accurate

### Step 13.3: Update README

Update project README with completion status.

---

## Phase 14: Delivery

### Step 14.1: Summary Report

Provide client with:

```markdown
# Project Complete: [Book Title]

## Deliverables Created

### Content ([N] files)
- Front matter: 6 files
- Chapters: [N] files
- Back matter: 5 files
- Total word count: ~[N] words

### Summaries ([N] files)
- Chapter summaries: [N] files
- Book summary: 1 file

### Marketing Assets
- Book description: 1 file (HTML)
- Image prompts: [N] files ([N] concepts)
- Amazon assets: 2 files
- Audiobook prep: [N] files
- Marketing materials: 3 files

## Next Steps

1. Review content and provide feedback
2. Generate images using provided prompts
3. Format for publishing (Atticus/Vellum)
4. Upload to Amazon KDP
5. Launch marketing campaign

## Questions?

[Contact information]
```

### Step 14.2: Git Commit

```powershell
git add .
git commit -m "Complete book project: [Book Title]"
git push origin main
```

---

## Workflow Timing Summary

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| 1. Brief Analysis | 5-10 min | Understanding |
| 2. Story Architecture | 15-30 min | book-plan.md |
| 3. Folder Structure | 2 min | Directory tree |
| 4. Front Matter | 20-30 min | 6 files |
| 5. Chapters | 60-120 min | 10-25 files |
| 6. Back Matter | 15-20 min | 5 files |
| 7. Summaries | 20-30 min | N+1 files |
| 8. Description | 10 min | 1 file |
| 9. Image Prompts | 30-45 min | 3-5 files |
| 10. Amazon Assets | 15 min | 2 files |
| 11. Audiobook | 20 min | N+3 files |
| 12. Marketing | 15 min | 3 files |
| 13. Final Review | 15 min | README update |
| 14. Delivery | 5 min | Summary + commit |

**Total Estimated Time:** 3-5 hours for complete project

---

## Troubleshooting

### Brief is Incomplete
→ Ask for missing information before proceeding

### Tone Unclear
→ Generate sample paragraph, ask client to confirm

### Word Count Mismatch
→ Expand or condense as needed, note in delivery

### Client Requests Revisions
→ Edit specific files, maintain consistency

### Image Generation Fails
→ Provide alternative prompts with adjusted parameters

---

*Agent Workflow v1.0 — Metronagon Media*
