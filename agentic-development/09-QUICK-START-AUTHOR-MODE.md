# Quick Start: Author Mode

## Overview

This document defines a streamlined workflow for **you (Ketan)** as the author. Instead of filling out the full book brief template, provide just **2-3 sentences** describing your book concept. The agent will:

1. **Expand** your seed idea into a complete book brief
2. **Generate** the entire book project from that brief
3. **Deliver** publication-ready content and assets

---

## How It Works

### Your Input (Seed Idea)

Provide 2-3 sentences covering:

- **What** the book is about (core concept/premise)
- **Who** it's for (optional — agent can infer)
- **Tone/style** preference (optional — agent can infer)

### Example Inputs

**Non-Fiction Example:**

> "A book about how modern productivity culture is making us less effective, not more. It should challenge hustle culture and offer a counter-intuitive approach to getting meaningful work done."

**Fiction Example:**

> "A psychological thriller about a therapist who realizes one of her patients is manipulating her into committing a crime she doesn't remember. Dark, twisty, unreliable narrator."

**Philosophy Example:**

> "An exploration of why people cling to certainty in an uncertain world. Similar tone to Reality Without Belief but focused on the psychology of needing to be right."

---

## Agent Workflow

```
┌─────────────────────────────────────────────────────────────┐
│  SEED IDEA (2-3 sentences)                                  │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  PHASE 1: Brief Generation                                  │
│  • Analyze seed idea                                        │
│  • Determine genre, tone, audience                          │
│  • Create title options                                     │
│  • Design chapter structure                                 │
│  • Define visual identity                                   │
│  • Generate complete book brief                             │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  CHECKPOINT: Present generated brief for approval           │
│  (Optional — can skip if you trust the agent)               │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  PHASE 2: Full Project Generation                           │
│  • Execute standard agent workflow (06-AGENT-WORKFLOW.md)   │
│  • Generate all content, assets, marketing materials        │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  COMPLETE PROJECT DELIVERED                                 │
└─────────────────────────────────────────────────────────────┘
```

---

## Phase 1: Brief Generation

When you provide a seed idea, the agent will auto-generate:

### 1. Core Information

- **Title:** 3 options (you pick or agent selects best)
- **Subtitle:** Complementary to title
- **Author:** Ketan Shukla (default)
- **Genre:** Inferred from concept
- **Word Count Target:** Based on genre norms

### 2. Book Concept

- **One-Sentence Summary:** Elevator pitch
- **Premise:** Core argument or story setup
- **Central Question:** What the book answers
- **Key Themes:** 3-5 themes derived from concept
- **Unique Angle:** What makes this book different

### 3. Target Audience

- **Primary Reader:** Demographics and psychographics
- **Reader Pain Points:** What problems they face
- **Reader Desires:** What transformation they seek
- **Comparable Titles:** 2-3 books in same space

### 4. Structure & Tone

- **Chapter Count:** Typically 10-15 for non-fiction
- **Chapter Breakdown:** Titles and brief descriptions
- **Writing Style:** Derived from your input
- **Narrative Voice:** First person, conversational (your default)

### 5. Visual Identity

- **Primary Colors:** Based on genre and mood
- **Typography Style:** Serif/sans-serif recommendations
- **Cover Mood:** Photorealistic, conceptual, minimalist, etc.
- **Visual Motifs:** Recurring imagery suggestions

---

## Default Author Settings

These defaults are applied automatically for your books:

```yaml
# Author Defaults (Ketan Shukla)
author:
  name: "Ketan Shukla"
  bio: "Software engineer turned author and publisher..."
  website: "ketanshukla.com"
  author_central: "amazon.com/author/ketanshukla"

# Publishing Defaults
publishing:
  imprint: "Metronagon Media"
  formats: ["Kindle", "Paperback", "Audiobook"]
  distribution: "Amazon KDP Exclusive"

# Style Defaults
style:
  voice: "First person, direct, conversational"
  tone: "Thought-provoking, accessible, no jargon"
  chapter_length: "2,000-4,000 words"

# Visual Defaults
visuals:
  cover_style: "Premium photorealistic"
  dimensions: "1600x2400 (Kindle), 2700x4800 (print)"
  concepts_per_cover: 5

# Technical Defaults
tech_stack:
  website: "Next.js + React + Tailwind + Vercel"
  hosting: "GitHub → Vercel"
  domain: "Custom domain via Vercel"
```

---

## Invocation Commands

### Standard (With Checkpoint)

Say:

> "Generate a book from this concept: [your 2-3 sentences]. Show me the brief before generating the full project."

### Fast Mode (No Checkpoint)

Say:

> "Generate a complete book project from this concept: [your 2-3 sentences]. No checkpoint needed."

### With Specific Preferences

Say:

> "Generate a book from this concept: [your 2-3 sentences]. Make it 12 chapters, dark/moody cover, similar tone to Reality Without Belief."

---

## Example: Full Workflow

### Your Input

> "A book about the lies we tell ourselves to avoid facing uncomfortable truths. It explores self-deception, cognitive dissonance, and why honesty with yourself is the hardest kind. Non-fiction, philosophical."

### Agent Generates Brief

```markdown
# Generated Book Brief

## Core Information

- **Title Options:**
  1. The Lies We Live By
  2. Comfortable Delusions
  3. The Truth You Won't Tell Yourself
- **Subtitle:** Why Self-Deception Feels Like Safety — And How to See Past It
- **Genre:** Non-Fiction / Philosophy / Psychology
- **Target Length:** 45,000-55,000 words (10-12 chapters)

## Book Concept

- **One-Sentence:** An unflinching examination of why we deceive ourselves and how to develop radical honesty without destroying ourselves.
- **Central Question:** Why do intelligent people believe obvious lies about themselves?
- **Key Themes:** Self-deception, cognitive dissonance, ego protection, identity, radical honesty
- **Unique Angle:** Combines philosophical rigor with practical psychology — not self-help platitudes

## Target Audience

- **Primary:** Adults 25-55 interested in psychology, philosophy, self-understanding
- **Pain Points:** Feel stuck in patterns, sense they're avoiding something, tired of self-help that doesn't work
- **Comparable Titles:** Lying by Sam Harris, The Elephant in the Brain, Reality Without Belief

## Structure

1. The Lie You Can't See (Introduction to self-deception)
2. Why Truth Hurts (The evolutionary advantage of denial)
3. The Stories We Tell (Narrative identity and its distortions)
4. Cognitive Dissonance in Action (Case studies)
5. The Ego's Defense System (Psychological mechanisms)
6. Comfortable Lies vs. Uncomfortable Truths (The trade-off)
7. When Self-Deception Serves You (Controversial chapter)
8. The Cost of Knowing (What radical honesty demands)
9. Seeing Yourself Clearly (Practical approaches)
10. Living Without the Lie (Integration and forward path)

## Visual Identity

- **Colors:** Deep charcoal, muted gold, off-white
- **Mood:** Introspective, serious, elegant
- **Cover Concept:** Abstract mirror imagery, fractured reflection, or shadowed face
- **Typography:** Clean serif for title, modern sans for subtitle
```

### Agent Then Generates

Complete project folder with:

- All 10 chapters (~5,000 words each)
- Front matter (copyright, dedication, introduction)
- Back matter (acknowledgments, about author, also by)
- 5 cover prompts (Reality Without Belief quality)
- Amazon description (HTML formatted)
- Chapter summaries
- Audiobook scripts
- Marketing materials

---

## Customization Options

Add any of these to your seed idea:

| Option            | Example                              |
| ----------------- | ------------------------------------ |
| Chapter count     | "Make it 8 chapters"                 |
| Word count        | "Keep it short, under 30k words"     |
| Tone reference    | "Tone like Reality Without Belief"   |
| Cover style       | "Minimalist cover, dark background"  |
| Specific audience | "For entrepreneurs specifically"     |
| Avoid topics      | "Don't include religion or politics" |
| Include topics    | "Must cover the sunk cost fallacy"   |

---

## Quality Assurance

Even in quick-start mode, all outputs meet the standards defined in `07-QUALITY-STANDARDS.md`:

- **Writing Score:** ≥ 4.5
- **Content Score:** ≥ 4.5
- **Image Prompt Score:** ≥ 4.5
- **Description Score:** ≥ 4.5

---

## Future Extensions (Roadmap)

### Phase 2: Website Generation

After generating books, add:

> "Now create a Next.js website for this book using the reality-without-belief tech stack."

### Phase 3: Series Generation

After refining single-book workflow:

> "Generate a 5-book series from this concept: [series overview]"

### Phase 4: Full Pipeline

Eventually:

> "Generate a 5-book series with individual websites and a series landing page."

---

## Quick Reference

| What You Say                                      | What Happens                               |
| ------------------------------------------------- | ------------------------------------------ |
| "Generate a book from: [concept]"                 | Brief → checkpoint → full project          |
| "Generate a book from: [concept]. No checkpoint." | Brief → full project (faster)              |
| "Just generate the brief for: [concept]"          | Brief only (review before proceeding)      |
| "Continue with this brief"                        | Generates full project from approved brief |
| "Generate a book from concept fiction/023"        | Uses pre-made concept → full project       |

---

## Book Concepts Library

You have **100 ready-to-use detailed book concepts** in `book-concepts/`:

### Fiction (50 concepts)

Location: `book-concepts/fiction/`

Examples:

- `001-the-memory-merchant.md` — Psychological thriller about memory extraction
- `023-the-authenticity-plague.md` — Satirical horror about forced honesty
- `042-the-zero-footprint.md` — Eco-thriller about climate technology
- `050-the-inheritance-of-atoms.md` — Literary sci-fi about atomic genealogy

### Non-Fiction (50 concepts)

Location: `book-concepts/non-fiction/`

Examples:

- `001-the-belief-trap.md` — Philosophy about belief itself being the problem
- `003-the-anti-productivity-manifesto.md` — Cultural criticism of hustle culture
- `029-the-meaning-crisis.md` — Philosophy about constructing personal meaning
- `050-the-wisdom-of-enough.md` — Philosophy about sufficiency vs. more

### How to Use a Pre-Made Concept

**Option 1: Use As-Is**

> "Generate a book from concept `fiction/015-the-silence-between-stars`"

**Option 2: Modify Before Generating**

> "Generate a book from concept `non-fiction/027-the-laziness-lie` but make it more academic in tone and add a chapter on workplace implications"

**Option 3: Use as Reference**

> "I want to write something similar to concept `fiction/034-the-replacement-child` but about adoption instead of death. Generate a book from that modified concept."

### Concept Structure

Each concept file includes:

- **Genre** — Category and subcategories
- **Concept** — Detailed 3-5 paragraph description
- **Key Themes** — Core ideas explored
- **Tone** — Writing style guidance
- **Unique Angle** — What makes this book different
- **Target Audience** — Who this is for
- **Suggested Chapter Structure** — 10-14 chapter outline
- **Visual Identity Suggestions** — Cover and design guidance
- **Comparable Titles** — Similar books for reference

---

_Quick Start Author Mode v1.1_
_Optimized for Ketan Shukla / Metronagon Media_
