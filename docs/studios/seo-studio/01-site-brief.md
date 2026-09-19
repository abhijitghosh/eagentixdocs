# Step 01: Site Brief & Ground Truth

The **Site Brief** is the factual foundation of your SEO project. Downstream keyword research, content drafting, and SERP checks rely on the parameters confirmed here.

---

## 1. Ground Truth Discovery

When you add a new domain, SEO Studio automatically crawls the homepage and primary navigation to extract business metadata:
- Detected search country and language
- Product and service categories
- Target reader / persona
- Main competitor domains
- Author and organization NAP (Name, Address, Phone)

::: tip Fallback Preservation
If crawling fails due to strict bot firewalls or connectivity issues, SEO Studio never overwrites your existing brief. Your previous verified details remain protected.
:::

---

## 2. Field Provenance Tags

Every field in the brief is tagged with its provenance level so you always know where data came from:

| Badge | Meaning | Action Required |
| :--- | :--- | :--- |
| <span class="provenance-stated">stated (verified)</span> | Explicitly entered or reviewed and approved by a user. | Safe to use anywhere. |
| <span class="provenance-inferred">inferred ⚠️ verify</span> | Discovered by the AI crawler from website content. | Review the evidence snippet and confirm or edit. |
| <span class="provenance-needs-input">needs input</span> | Required field that could not be determined automatically. | Enter a value before proceeding. |

---

## 3. Critical Questions & Downstream Gate

To prevent wasted API credits and misleading analysis, SEO Studio will **block downstream runs** until critical business questions are confirmed:

- **Search Country**: Determines Google search engine datacenter and local search volumes.
- **Search Language**: Restricts keyword search suggestions and SERP language matching.
- **What We Sell**: Core product/service value proposition.
- **Services**: Bulleted list of offerings.
- **Competitors**: Domains you actively compete against in organic search.

::: danger Why Unconfirmed Fields Block Runs
Running keyword research without a confirmed market (e.g. defaulting to US when the business operates only in Singapore) yields search volumes and difficulty scores for the wrong audience.
:::

---

## 4. The 4 Brief Sections

The interview is organized into four clean sections:

1. **Market**: Search Country and Search Language.
2. **The Business**: What is sold, target reader persona, services offered, and top 5 competitor URLs.
3. **Voice & Proof**:
   - **Proof**: Factual case studies, statistics, metrics, or certifications that may be claimed.
   - **Say**: Preferred terminology and brand slogans.
   - **Don't say**: Banned phrases, disallowed competitor mentions, or compliance restrictions.
4. **Publishing**: Author name, author credentials (for E-E-A-T), call-to-action (CTA) URL, and NAP.
