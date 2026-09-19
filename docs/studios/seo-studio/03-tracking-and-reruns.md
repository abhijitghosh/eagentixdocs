# Step 02 (Deep Dive): Rank Movement & Same-Day Reruns

Understanding your search ranking trajectory requires reliable, chronological position comparisons.

---

## 1. How Rank Movement is Calculated

When a SERP check completes, each keyword displays:
- **Current Position**: Your ranking in Google's organic results (1–100).
- **Movement (`+` / `-`)**: The difference between the current rank and your baseline snapshot:
  - `+4` (Green): Improved 4 positions (e.g. from position 12 to 8).
  - `-3` (Red): Dropped 3 positions.
  - `0` (Gray): No change.
  - `NEW`: Keyword was not detected in the baseline snapshot.

---

## 2. Immediately Preceding Baseline Selection

SEO Studio compares your current rank check against the **immediately preceding run**, not arbitrary calendar days.

### Multi-Run Timeline Example

```text
Yesterday (Sept 18, 10:00 AM)  → kw01 is Position 21 (Baseline A)
         │
Today Run 1 (Sept 19, 09:00 AM) → kw01 is Position 15 (Movement: +6 vs Baseline A)
         │
Today Run 2 (Sept 19, 02:00 PM) → kw01 is Position 10 (Movement: +5 vs Run 1)
```

::: tip Why Preceding Comparison Matters
If Run 2 compared against yesterday (Sept 18), it would report a `+11` jump, hiding the fact that position 15 was already achieved this morning. By comparing against **Run 1**, SEO Studio gives you the true, incremental delta of your most recent action.
:::

---

## 3. Preserving Same-Day Snapshots

Unlike conventional rank trackers that overwrite same-day runs, SEO Studio preserves every execution:
- Each run receives a unique run ID and ISO timestamp (`yyyy-MM-ddTHH:mm:ss.fffffffZ`).
- Snapshot files are stored with execution identifiers:
  `2026-09-19T091530123-United States.json`
  `2026-09-19T142015842-United States.json`
- Historical trend lines remain intact for intraday tracking after publishing content or pushing website updates.

---

## 4. Strict Validation Standards

To protect file integrity and prevent malicious input:
- Dates must conform strictly to `yyyy-MM-dd`.
- Client identifiers cannot contain path separators (`/`, `\`) or relative directory operators (`..`).
