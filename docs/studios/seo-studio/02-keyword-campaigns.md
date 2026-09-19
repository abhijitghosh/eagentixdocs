# Step 02: Keyword Strategy & SERP Campaigns

The **Keywords** pillar combines organic keyword discovery with real-time **SERP Rank Tracking Campaigns**.

---

## 1. Setting Up a Campaign

In **Step 2: Keywords**, open the **Campaign Targets** workspace:

1. **Enter Keywords**: Paste target keywords (one per line or comma-separated). You can track single head terms or long-tail query variations.
2. **Select Google Market**: Pick your target geographic region (e.g. *United States*, *United Kingdom*, *Singapore*).
3. **Select Language**: Pick the matching search language code (e.g. *en*, *es*, *fr*).
4. **Click "Track Rankings Now"**: Launches real-time SERP position collection.

---

## 2. Automatic Batching (>25 Keywords)

Search engine crawling APIs enforce strict per-request limits (typically 25 queries per call).

### How SEO Studio Handles Large Lists
When you track 50, 100, or 250 keywords:
- The frontend automatically partitions the keywords into batches of 25.
- Batches are processed sequentially in the background.
- **Unified Run Guarantee**: All batches compare against the exact same previous baseline snapshot, and all results are aggregated and persisted as a single consolidated campaign run.
- No keywords are dropped, and later batches never overwrite earlier batches.

---

## 3. History Isolation with Client Identifiers

Every domain tracked in SEO Studio receives a sanitized, stable `client_id` (e.g. `acme-com`). 

All snapshot files, keyword volumes, and rank histories are stored strictly inside that client's directory, ensuring full tenant isolation and preventing path traversal vulnerabilities.

---

## 4. Moving Keywords into Action

From any keyword row in the results table, you have instant one-click handoffs:
- **Seed into Write**: Sends the keyword, its search volume, and detected search intent into **Step 03: Write** to generate an article draft.
- **Optimize Page**: If the keyword currently ranks on page 2 or 3 for one of your URLs, click **Optimize Page** to send that exact URL to **Step 04: On-Page Intelligence**.
