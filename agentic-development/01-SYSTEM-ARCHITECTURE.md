# Agentic Book Creation System — Architecture

## System Overview

This document describes the complete architecture for an AI-powered book creation system that transforms a client brief into a publication-ready book project with all assets.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         CLIENT BRIEF (INPUT)                             │
│  Story concept, genre, themes, tone, target audience, author info       │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         AGENTIC AI SYSTEM                                │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │
│  │  Story Engine   │  │ Content Engine  │  │  Asset Engine   │         │
│  │  - Arc design   │  │ - Chapters      │  │ - Image prompts │         │
│  │  - Chapter plan │  │ - Front matter  │  │ - Descriptions  │         │
│  │  - Character    │  │ - Back matter   │  │ - Marketing     │         │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘         │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                      COMPLETE BOOK PROJECT (OUTPUT)                      │
│  All content, image prompts, descriptions, marketing assets             │
│  Ready for: Amazon KDP, Paperback, Audiobook                            │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Core Components

### 1. Story Engine

**Purpose:** Transform the brief into a complete story architecture.

**Inputs:**
- Book concept/premise
- Genre and subgenre
- Target audience
- Tone and style preferences
- Thematic elements

**Outputs:**
- Complete story arc (beginning, middle, end)
- Chapter-by-chapter outline with summaries
- Character profiles (if fiction)
- Key themes and motifs
- Emotional journey mapping

**Quality Standards:**
- Arc must have clear progression and transformation
- Each chapter must serve a distinct purpose
- Themes must be woven consistently throughout
- Pacing must build to satisfying conclusions

---

### 2. Content Engine

**Purpose:** Generate all written content for the book.

**Inputs:**
- Story architecture from Story Engine
- Tone guidelines from brief
- Word count targets
- Style preferences

**Outputs:**

#### Front Matter
| File | Purpose | Word Count |
|------|---------|------------|
| `copyright.md` | Legal notice, ISBN placeholder, edition info | ~100 words |
| `dedication.md` | Personal dedication | ~50-100 words |
| `epigraph.md` | Relevant quote setting the tone | ~50 words |
| `preface.md` | Author's context and framing | ~500-800 words |
| `introduction.md` | Book overview and chapter preview | ~1,500-2,500 words |
| `prologue.md` | Narrative opening (personal/fictional) | ~800-1,200 words |

#### Chapters
- **Non-fiction:** 10-15 chapters, 2,500-4,000 words each
- **Fiction:** 15-25 chapters, 2,000-3,500 words each
- Each chapter follows the tone/style defined in brief
- Chapters end with hooks to the next chapter

#### Back Matter
| File | Purpose | Word Count |
|------|---------|------------|
| `epilogue.md` | Closing narrative/reflection | ~800-1,500 words |
| `acknowledgments.md` | Thank you section | ~300-500 words |
| `about_author.md` | Author bio | ~200-400 words |
| `also_by.md` | Other works listing | Variable |
| `call_to_action.md` | Review request, newsletter, etc. | ~100-200 words |

#### Summaries & Marketing
| File | Purpose |
|------|---------|
| `chapter_summaries/` | 3-minute verbal summaries per chapter |
| `book_summary.md` | 5-minute inspirational video script |
| `description.md` | Amazon listing description (keyword-optimized) |

---

### 3. Asset Engine

**Purpose:** Generate all visual and marketing assets.

**Inputs:**
- Book content and themes
- Genre conventions
- Brand identity (if series)
- Target audience preferences

**Outputs:**

#### Image Prompts (For ChatGPT/Flux/Midjourney)
| Asset | Quantity | Dimensions |
|-------|----------|------------|
| Book cover concepts | 5 variations | 9:16 portrait (2700×4800px) |
| Series logo | 3 variations | Square (1200×1200px) |
| Box set cover | 2 variations | 9:16 portrait |
| Social media banners | 3 variations | 16:9 landscape (2400×1350px) |
| YouTube thumbnails | 2 variations | 16:9 (1920×1080px) |
| Author photo prompt | 1 concept | Square or 4:5 |

#### Marketing Copy
- Amazon A+ Content suggestions
- Social media post templates
- Email newsletter copy
- Press release template

#### Audiobook Assets
- Chapter-by-chapter scripts (cleaned for TTS)
- Narrator direction notes
- Audiobook intro/outro scripts

---

## Agent Workflow Phases

### Phase 1: Brief Analysis (5 minutes)
```
1. Parse the completed brief
2. Identify genre conventions and expectations
3. Determine tone parameters
4. Flag any missing or unclear information
5. Confirm understanding with user (optional)
```

### Phase 2: Story Architecture (15 minutes)
```
1. Design the overall arc
2. Create chapter-by-chapter outline
3. Define thematic through-lines
4. Map emotional progression
5. Identify key moments and turning points
```

### Phase 3: Content Generation (60-120 minutes)
```
1. Generate front matter (copyright → prologue)
2. Generate chapters sequentially
3. Generate back matter
4. Generate chapter summaries
5. Generate book summary/video script
6. Generate book description
```

### Phase 4: Asset Generation (30-45 minutes)
```
1. Generate book cover image prompts (5 concepts)
2. Generate series logo prompt (if applicable)
3. Generate social media asset prompts
4. Generate marketing copy
5. Generate audiobook prep files
```

### Phase 5: Quality Review & Organization (15 minutes)
```
1. Verify all files created
2. Check consistency across content
3. Validate prompt quality
4. Organize into final folder structure
5. Create project manifest
```

---

## Integration Points

### Metronagon Media Website
- Brief intake form → populates brief template
- Client portal → receives generated project
- Services page packages → mapped to deliverables

### Reference Sites
| Site | Purpose | URL |
|------|---------|-----|
| Metronagon Media | Service packages and examples | www.metronagon.com |
| Examples page | Image prompt templates and results | www.metronagon.com/examples |
| Author site | Bio, credentials, previous works | [Author's site] |

### External Tools
| Tool | Purpose | Integration |
|------|---------|-------------|
| ChatGPT (GPT-4o/Image) | Image generation from prompts | Manual prompt copy |
| Flux (via Flow) | High-quality image generation | Manual prompt copy |
| Amazon KDP | Publishing platform | Manual upload |
| Atticus/Vellum | EPUB/PDF formatting | Content export |
| ElevenLabs/Play.ht | Audiobook TTS | Script export |

---

## Tech Stack

### Current Implementation
- **Agent:** Claude (Windsurf/Cascade)
- **File System:** Local project folders
- **Version Control:** Git + GitHub
- **Deployment:** Vercel (for web components)

### Future Automation Options
- **n8n/Make:** Workflow automation
- **Supabase:** Brief storage and client management
- **Stripe:** Payment integration (via Metronagon)
- **API Integration:** Direct image generation calls

---

## Scalability

### Single Book → Book Series

The system is designed to scale from one book to a complete series:

| Feature | Single Book (v1.0) | Series (v2.0) |
|---------|-------------------|---------------|
| Arc design | Book-level | Series-level + book-level |
| Cross-references | None | "Where We Have Been" + "Coming Next" |
| Visual consistency | N/A | Unified color, typography, imagery |
| Descriptions | Standalone | Series context included |
| Image prompts | Book-specific | Series-consistent templates |

### Series-Specific Additions
- Series overview document
- Book-to-book continuity tracking
- Unified visual brand guide
- Box set cover generation
- Series logo generation
- Cross-promotional copy

---

## Error Handling

### Missing Brief Information
- Agent prompts for clarification before proceeding
- Default values used for optional fields (with disclosure)

### Content Consistency Issues
- Cross-reference check between chapters
- Theme tracking throughout generation
- Tone consistency validation

### Quality Failures
- Regeneration of substandard content
- Style adjustment based on feedback
- Manual intervention flagging

---

## Success Metrics

A complete project must include:

- [ ] All front matter files (6-7 files)
- [ ] All chapters (10-25 files)
- [ ] All back matter files (4-5 files)
- [ ] Chapter summaries (1 per chapter)
- [ ] Book summary/video script (1 file)
- [ ] Book description (1 file)
- [ ] Cover image prompts (5 concepts)
- [ ] Additional asset prompts (as specified)
- [ ] Organized folder structure
- [ ] Project manifest/README

---

## Next Steps

1. **Complete the brief template** → See `03-BOOK-BRIEF-TEMPLATE.md`
2. **Hand brief to agent** → Paste into Claude/Cascade
3. **Agent generates project** → Following this architecture
4. **Review and refine** → Client feedback loop
5. **Generate images** → Using prompts in ChatGPT/Flux
6. **Publish** → Amazon KDP, audiobook platforms

---

*Architecture v1.0 — Single Book Generation*
*Designed for Metronagon Media*
