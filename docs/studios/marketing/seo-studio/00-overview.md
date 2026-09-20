# SEO Studio Overview & Architecture

**SEO Studio** is an all-in-one search engine optimization control center that consolidates technical search analysis, keyword research, SERP rank tracking, content generation, and on-page auditing into a unified, guided workflow.

---

## The 6 Pillars

The SEO workflow is organized sequentially into six dedicated pillars:

| Step | Pillar | Primary Objective |
| :--- | :--- | :--- |
| **01** | **[Site Brief](/studios/marketing/seo-studio/01-site-brief)** | Establish ground truth: market, business offerings, audience, competitors, and voice. |
| **02** | **[Keywords & SERP](/studios/marketing/seo-studio/02-keyword-campaigns)** | Real volume, intent, difficulty, and automated SERP rank tracking campaigns. |
| **03** | **[Write](/studios/marketing/seo-studio/04-content-drafting)** | Generate search-ready content strictly locked to verified research and brand proof. |
| **04** | **[On-page](/studios/marketing/seo-studio/05-onpage-intelligence)** | Audit individual URLs against checklist scorecards and benchmark against top competitors. |
| **05** | **[Links](/studios/marketing/seo-studio/06-links-and-architecture)** | Inspect internal link equity distribution, discover orphan pages, and analyze backlink gaps. |
| **06** | **[Visibility](/studios/marketing/seo-studio/00-overview#visibility)** | Monitor AI engine visibility (ChatGPT Search, Perplexity, Google AI Overviews) and citations. |

---

## Status Badges & Lifecycle

Each pillar displays a live status indicator showing its operational state:

- <span class="status-done">Done</span>: The primary tool has executed successfully and outputs are saved to the session.
- <span class="status-stale">Needs a re-run</span>: The underlying site brief or target parameters have changed since the last execution, making previous results stale.
- <span class="status-needs-input">Needs answers</span>: Required inputs or unconfirmed critical questions are missing.
- <span class="status-done" style="background:#f1f5f9; color:#64748b; border-color:#cbd5e1;">Not run</span>: The pillar has not yet been executed for this domain.

::: warning Stale Precedence
If an earlier step (e.g. Brief) is modified, downstream steps that depend on it will automatically switch to **Needs a re-run** to prevent operating on obsolete assumptions.
:::

---

## Project Overview Dashboard

Clicking **Overview** in the step header gives you a bird's-eye view of your site's SEO posture:

1. **Pillar Summary Cards**: Displays the completion state of all 6 steps at a glance.
2. **Instant Shortcuts**: Jump directly into common workflows (e.g. *Track SERP Rankings*, *Optimize Money Page*, *Draft New Post*) with pre-seeded inputs.
3. **Session Actions**: Refresh session cache, export audit reports, or trigger a full project re-crawl.
