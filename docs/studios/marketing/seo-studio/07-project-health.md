# Step 07: Project Health & Rerun Lifecycle

SEO is not a one-time setup—it is an ongoing operational cycle. SEO Studio maintains an intelligent dependency graph across all 6 steps.

---

## 1. Status Hierarchy & Precedence

When viewing the step header or the Overview dashboard, each step displays one of four statuses:

```
[ Needs answers ]  ──▶  [ Not run ]  ──▶  [ Needs a re-run (Stale) ]  ──▶  [ Done ]
```

### Understanding Stale Precedence
If an earlier pillar changes, downstream results become **Stale**:
- **Example**: You previously ran keyword research for *United States*. Later, you update **Step 01: Site Brief** to change the target market to *Singapore*.
- **Result**: **Step 02: Keywords** immediately shifts from <span class="status-done">Done</span> to <span class="status-stale">Needs a re-run</span>.
- **Why**: Existing US keyword volumes and ranks no longer represent your active business strategy.

---

## 2. Session Integrity Guarantee

Under the **Studio Session Contract**:
1. Every user input, uploaded reference, selected market, generated draft, and audit result is persisted in that site's versioned session.
2. When you refresh the browser or return after days away, your complete workspace is restored immediately.
3. Switching between sites completely clears prior site state to prevent data cross-contamination.
