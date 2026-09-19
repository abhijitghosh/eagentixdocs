# Workspace & Site Switching

Eagentix Studios support multi-tenant, multi-site management. Whether you manage a portfolio of in-house brands or multiple client accounts, every site retains its own isolated sessions, briefs, ranking history, and drafts.

---

## Switching Sites

At the top of the Studio interface, use the **Site Selector** dropdown to select an existing domain or enter a new target URL:

```
[ Select Domain: acme.com ▾ ]  [ + Add New Domain ]
```

### What Happens When You Switch Sites?
1. **Immediate State Cleansing**: The UI immediately clears in-memory form values, tool results, and reports from the previous site.
2. **Session Fetch**: Eagentix requests the saved brief and tool results for the newly selected domain.
3. **Race Condition Protection**: If a slow network response from Site A arrives after you switched to Site B, the studio automatically discards it to prevent data mixing.

::: tip Safe Multi-Tenancy Guarantee
The platform guarantees that confidential client briefs, target keyword lists, and competitive intelligence never bleed between different domains.
:::

---

## Autosave & Session Persistence

All work in Eagentix is continuously persisted so you can close your browser and resume at any time.

### How Autosave Works
- **Debounced Save**: When you modify brief fields, campaign keywords, or tool inputs, changes are autosaved after **1.2 seconds of inactivity**.
- **Visual Indicator**: The top right indicator displays:
  - `Saving…` during synchronization.
  - `Saved to session` once confirmed by the server.
- **Failed Load Protection**: If a network glitch prevents an existing site session from loading, autosave is **temporarily suspended**. This ensures that an empty form on your screen never accidentally overwrites your saved data on the server.

---

## Navigating Stages Without Reloading

Navigating between stages (e.g. from **Keywords** to **Write** or **On-page**) updates the browser URL (e.g., `?step=write`) without reloading the site data. 

Your active site session remains hot in memory, allowing you to move quickly across the 6 pillars without redundant server requests.
