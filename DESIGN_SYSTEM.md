# DESIGN_SYSTEM.md — Bireshwar Kundu Portfolio

## 1. Executive Summary & Brand Identity
* **Designer Name:** Bireshwar Kundu
* **Title:** Indian Graphic & Brand Designer
* **Specialization:** Brand Identity Systems, Editorial & Publication Design, Custom Typography, Physical Packaging Architecture, and Digital Interfaces.
* **Core Philosophy:** *Tactile Precision meets Contemporary Heritage.* Fusing the structural rigor of Swiss International Grid Systems with rich Indian design sensibilities and modern digital typography.

---

## 2. Design Style & Visual Vibe Archetype

### Style Classification
**Swiss-Bento Minimalist & Tactile Editorial Design System**

### Visual Characteristics
1. **Asymmetric Grid & Bento Architecture:** Modules are organized using tight 12-column Swiss grids with asymmetrical bento blocks for metadata, image showcases, and case studies.
2. **Tactile Paper Canvas:** Uses a warm off-white alabaster background (`#F5F5F0`) mimicking high-grade uncoated paper stock rather than sterile white (`#FFFFFF`).
3. **High Contrast Ink Palette:** Deep charcoal ink (`#1A1A1A`) combined with crisp hairline borders (`1px border-black/15`) and 2px solid offset shadows (`shadow-[2px_2px_0px_#1A1A1A]`).
4. **Electric Indigo Focal Accent:** An electric violet-indigo (`#5D5CDE`) used sparingly for interactive highlights, active badges, key call-to-actions, and focus indicators.
5. **Physical Print Details:** Features barcode tags, index numbers, metadata timestamps, and tactile paper grain feel.

---

## 3. Comprehensive Typography & Typeface Architecture

The portfolio utilizes a deliberate **4-Tiered Typographic System** balancing avant-garde impact, editorial elegance, technical micro-copy, and legibility.

### Tier 1: Primary Display — **Syne**
* **Font Family:** `Syne` (Google Fonts)
* **Weights Used:** ExtraBold (800), Bold (700)
* **Role:** Primary Brand Headings, Hero Typography, Section Headers, and Logo Mark (`BK` / `STUDIO KUNDU`).
* **Characteristics:** Avant-garde geometric sans-serif with ultra-wide proportions, sharp terminals, and high architectural weight.
* **Tailwind Class:** `font-syne`
* **Usage Examples:**
  ```html
  <h1 className="font-syne text-7xl font-extrabold uppercase text-[#1A1A1A]">
    BIRESHWAR KUNDU
  </h1>
  ```

### Tier 2: Editorial Accent — **Playfair Display**
* **Font Family:** `Playfair Display` (Google Fonts)
* **Weights & Styles Used:** Italic (400 / 600), SemiBold (600)
* **Role:** Expressive accents, editorial subtitles, pulled quotes, and luxury emphasis.
* **Characteristics:** High-contrast transitional serif with graceful italic swashes and crisp brackets.
* **Tailwind Class:** `font-serif-display`
* **Usage Examples:**
  ```html
  <span className="font-serif-display italic font-normal text-[#5D5CDE]">
    KUNDU
  </span>
  ```

### Tier 3: Technical Metadata — **JetBrains Mono**
* **Font Family:** `JetBrains Mono` (Google Fonts)
* **Weights Used:** Regular (400), Medium (500), SemiBold (600)
* **Role:** Project metadata, category labels, timestamps, index tags, coordinates, and technical parameters.
* **Characteristics:** Monospaced typeface with high legibility, clean ligatures, and structural geometric clarity.
* **Tailwind Class:** `font-mono-display`
* **Usage Examples:**
  ```html
  <span className="font-mono-display text-xs text-[#1A1A1A]/70 uppercase tracking-widest font-semibold">
    GRAPHIC & BRAND DESIGNER // INDIA
  </span>
  ```

### Tier 4: Functional Body & UI — **Plus Jakarta Sans**
* **Font Family:** `Plus Jakarta Sans` (Google Fonts)
* **Weights Used:** Regular (400), Medium (500), SemiBold (600)
* **Role:** Long-form paragraphs, project descriptions, process step breakdowns, form fields, and interactive drawers.
* **Characteristics:** Modern geometric sans-serif engineered for digital displays and extended reading comfort.
* **Tailwind Class:** `font-sans`
* **Usage Examples:**
  ```html
  <p className="font-sans text-[#1A1A1A]/80 text-sm leading-relaxed">
    Bireshwar Kundu specializes in building cohesive visual languages...
  </p>
  ```

---

## 4. Color Palette & Token Specification

| Token Name | Hex Code | Purpose / Usage |
| :--- | :--- | :--- |
| **Alabaster Canvas** | `#F5F5F0` | Main application background (Warm uncoated paper texture) |
| **Charcoal Ink** | `#1A1A1A` | Primary text color, heavy borders, dark cards, footer background |
| **Electric Indigo** | `#5D5CDE` | Primary focal point, active state indicators, key CTAs |
| **Pure White** | `#FFFFFF` | Card backgrounds, drawer containers, contrast elements |
| **Muted Ink** | `rgba(26,26,26, 0.6)` | Secondary labels, captions, and micro-copy |
| **Hairline Border** | `rgba(26,26,26, 0.15)` | Structuring bento grids and container edges |

---

## 5. Master Prompt Specification (For AI Generation & Replicating)

```text
Build a high-end graphic designer portfolio for "Bireshwar Kundu", an Indian Graphic & Brand Designer. 

Design Archetype: Swiss-Bento Tactile Editorial System.
- Color Scheme: Warm Alabaster paper background (#F5F5F0), Deep Charcoal ink text (#1A1A1A), and Electric Violet-Indigo accent (#5D5CDE).
- Borders & Shadows: Crisp 1px hairline dark borders with solid 2px offset box-shadows.
- Typography Hierarchy:
  1. Primary Display: 'Syne' (800 ExtraBold) for high-impact geometric headers.
  2. Editorial Accent: 'Playfair Display' (Italic) for luxury serif emphasis.
  3. Technical Metadata: 'JetBrains Mono' for upper-case index labels, dates, tags, and stats.
  4. Body & UI: 'Plus Jakarta Sans' for clean, readable copy.

Key Features & Sections:
- Interactive Header with logo mark "BK Studio Kundu".
- Hero Section with bento grid layout and dynamic watermark background.
- Work Showcase with filterable categories, case study deep-dives, and project shortlisting.
- Interactive Type Specimen Studio for live typeface previewing.
- Process Visualizer with step-by-step strategy & print execution breakdowns.
- About Section with first-person perspective, skill mastery matrix, and industry awards.
- Project Commission Studio with interactive budget selector and receipt generator.
```
