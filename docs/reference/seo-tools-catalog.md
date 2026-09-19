# SEO Skills & Tool Reference Catalog

SEO Studio exposes a library of allowlisted tools and deterministic skills. Every tool belongs to exactly one step of the 6-pillar workflow.

---

## Step 02: Keywords & Competitor Intelligence

### `track_serp_rankings` (Primary Campaign Skill)
Runs real-time Google SERP rank checks for target keyword lists across specific countries and languages.
- **`keywords`** (`string[]`, required): List of search queries to evaluate. Lists larger than 25 queries are automatically batched sequentially.
- **`location_name`** (`dfs_location`, default: `"United States"`): DataForSEO location name matching target Google market.
- **`language_code`** (`dfs_language`, default: `"en"`): Two-letter ISO language code.
- **`date`** (`string`, optional): Execution date in strict `yyyy-MM-dd` format.
- **`client_id`** (`string`, required): Sanitized tenant/site identifier for isolated snapshot persistence.

### `competitive_domain_overview`
Benchmarks your target domain against up to five competitor domains on estimated search traffic, ranking keyword counts, and DataForSEO Rank.
- **`target_url`** (`text`, required): Your domain or primary URL.
- **`competitor_urls`** (`textarea`): Comma-separated list of competitor domains (up to 5).
- **`location_name`** (`dfs_location`): Target country search market.
- **`language_code`** (`dfs_language`): Target language code.

### `competitor_organic_keywords`
Extracts all organic search terms a competitor ranks for in Google's top 100 results.
- **`target_url`** (`text`, required): Competitor domain or specific URL.
- **`location_name`** (`dfs_location`): Target country.
- **`language_code`** (`dfs_language`): Language code.
- **`limit`** (`number`, default: `100`): Maximum ranking rows returned.

### `keyword_difficulty`
Computes true organic search ranking difficulty on a 0–100 scale, distinct from Google Ads PPC competition.
- **`keywords`** (`textarea`, required): One or more keywords to score.
- **`location_name`** (`dfs_location`): Target country.
- **`language_code`** (`dfs_language`): Language code.

---

## Step 03: Write

### `seo_article_draft`
Generates a complete search-optimized article draft locked to keyword intent and brief proof constraints.
- **`topic`** (`text`, required): Core article topic or title.
- **`primary_keyword`** (`text`, required): Main target search query.
- **`target_audience`** (`text`): Reader persona from the verified site brief.
- **`word_count`** (`number`, default: `1500`): Target draft length.
- **`proof_points`** (`textarea`): Factual case studies and verified metrics that must be included.
- **`forbidden_words`** (`textarea`): Banned terms and competitor mentions.

---

## Step 04: On-Page Intelligence

### `page_seo_intelligence`
Runs structural, technical, and content checklist audits against a specific URL.
- **`target_url`** (`text`, required): URL of the page to inspect.
- **`target_keyword`** (`text`, required): Primary search query the page targets.
- **`page_type`** (`select`): `article`, `product`, `service`, `homepage`, or `landing_page`.

---

## Step 05: Links & Architecture

### `internal_link_analyzer`
Maps internal link distribution and flags orphan pages across crawled site URLs.
- **`site_url`** (`text`, required): Root domain or XML sitemap URL.

### `backlink_gap_analysis`
Identifies referring domains pointing to competitor sites that do not yet link to your domain.
- **`target_url`** (`text`, required): Your root domain.
- **`competitor_urls`** (`textarea`, required): Competitor domains to contrast against.
