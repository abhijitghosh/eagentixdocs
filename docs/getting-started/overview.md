# Platform Overview

Welcome to the **Eagentix Platform**. Eagentix empowers marketing, engineering, and operations teams to execute complex, multi-step business workflows through autonomous, specialized agents and domain studios.

---

## What is a Studio?

A **Studio** in Eagentix is an end-to-end mission control center designed for a specific business domain (e.g. SEO, Paid Ads, Brand Visuals, Retail Furnishing). 

Unlike disconnected single-prompt chatbots, every Studio operates with:
1. **Persistent Session State**: Every brief, keyword list, draft, and audit result is automatically saved and restored when you return.
2. **Deterministic Tool Execution**: Agents call real, allowlisted backend skills (SERP crawlers, keyword difficulty providers, page parsers) rather than generating speculative numbers.
3. **Research-Locked Guardrails**: Downstream actions are bound to verified brand briefs and factual constraints, preventing hallucinations and inaccurate brand claims.

---

## The Studio Experience

When working inside a Studio such as **SEO Studio**, the interface is organized into clear functional pillars:

```
┌────────────────────────────────────────────────────────────────────────┐
│ Site Selector: [ acme.com ▾ ]                   Session: Autosaved ✓   │
├────────────────────────────────────────────────────────────────────────┤
│ [01 Brief] → [02 Keywords] → [03 Write] → [04 On-Page] → [05 Links]... │
├────────────────────────────────────────────────────────────────────────┤
│  Workspace (Active Step)           │  Tools & Alternates Drawer        │
│  - Primary task controls           │  - 20+ allowlisted tools          │
│  - Interactive tables & scorecards │  - Instant rerun shortcuts        │
└────────────────────────────────────────────────────────────────────────┘
```

### Core Interface Elements
- **Site Selector**: Switch between domains or client projects seamlessly.
- **Stage Progression**: A 6-step roadmap showing which pillars are **Done**, **Need a re-run**, or **Need answers**.
- **Workspace**: The central area displaying inputs, forms, live progress, and visual reports.
- **Tools Drawer**: Quick access to specialized secondary tools within the active pillar.

---

## Next Steps

- Learn how [Workspace & Site Switching](/getting-started/workspace-and-sites) guarantees multi-tenant data isolation.
- Check [Connecting Integrations](/getting-started/integrations) to configure DataForSEO and Google Search Console.
- Jump straight into the [SEO Studio Guide](/studios/seo-studio/00-overview).
