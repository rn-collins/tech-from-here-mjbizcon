# MJBizCon Story 6 — Technology-Discovery Audit

**Audit date:** 12 August 2026  
**Prior working title:** *The Public Item Catalog Is a Window, Not the Whole Market*  
**Decision:** **PASS PROVISIONALLY AS A STRONG, DISTINCT TECHNOLOGY PROPOSITION. FINDINGS DRAFTING REMAINS BLOCKED UNTIL THE PRESPECIFIED AUDIT IS EXECUTED AND PRESERVED.**

## Stronger proposition

**Nevada Turned Seed-to-Sale Records Into a Public Product Interface—and Every Upstream Omission Can Reach the Screen.**

Short alternate: **Nevada Lets Consumers Look Behind a Cannabis Label. The Evidence Has a Supply Chain.**

The earlier “window, not the whole market” title is directionally sound but too passive. The technological story is not merely that a portal has limits. Nevada built a public-facing data pipeline from facility-created item records, package identifiers, laboratory results and COAs, Metrc state, sales/activation events, and interface rules. Each layer determines what a consumer can find, match, download, and understand.

## Gate decision

Story 6 unmistakably concerns technology and is distinct from Stories 4, 12, and 15. It passes the proposition gate provisionally. It does **not** yet pass the findings gate. The planned 28-attempt cross-category audit has not been completed, label-to-record correspondence has not been tested, and the live interface cannot be called complete, accurate, accessible, current, or understandable from agency statements alone.

## Required broad discovery pass

### 1. Place + technology

The place-specific system is Nevada's regulated cannabis market and the state-required public database created under NRS 678B.635. The catalog is not a generic Metrc product page: users must select Nevada, and the visible records are produced by Nevada-licensed establishments, Nevada testing requirements, Nevada's seed-to-sale implementation, and state visibility rules. A complete story must test Las Vegas-area physical labels against the Nevada catalog while also sampling Northern Nevada and rural license locations through the interface so “Nevada” does not collapse into Las Vegas.

### 2. Institution + inventions

The Legislature required an electronic public database of testing information collected through seed-to-sale software. The Cannabis Compliance Board, Metrc, laboratories, cultivation and production facilities, retailers and lounges, and their workers collectively produce the public record. The technical invention is a consumer-facing projection layer over compliance data: searchable products, facility/license associations, unique Metrc package identifiers, product/package images, certified laboratory analyses, retailer locations, and potentially hold status.

This is not one institution pressing “publish.” It is a distributed data-production chain whose fields and visibility depend on law, software, facility entry, laboratory upload, package lineage, sales events, activation state, and interface behavior.

### 3. Period + products/processes

- **2021:** AB 149 added what became NRS 678B.635, requiring an electronically secure, publicly accessible, exportable database containing final testing results collected through seed-to-sale software.
- **2024:** CCB materials announced an item-catalog rollout intended to commence 1 September 2024 and trained facilities on photographs, descriptions, allergens, COAs, item information, and related submissions.
- **20 April 2026:** the CCB publicly announced the catalog's launch, describing nearly 50,000 products and current Metrc-derived information.
- **6 April 2026 FAQ/current interface:** the public-facing product view uses a 180-day sales/availability logic, while the separate Laboratory Library provides downloadable Metrc testing data from 2020 through the previous month.

The two-year interval between the 2024 announced rollout and the 2026 public launch is a reporting question, not evidence of failure. Establish the actual development, pilot, delay, migration, and release chronology before assigning cause.

### 4. Infrastructure + present-day ecosystem

The present ecosystem includes:

- the Metrc seed-to-sale record and its package identifiers;
- facility-created product names, descriptions, ingredients, allergens, images, and activation state;
- laboratory uploads and package-linked COAs;
- retail or lounge receipt and first recorded sale;
- visibility/removal rules tied to availability, activity, 180-day display, and 365-day storage/removal;
- the Metrc Catalog search, filters, sorting, product cards, details, downloads, and age gate;
- the CCB's separate Laboratory Library for historical bulk testing data;
- accessibility, scientific literacy, consumer privacy, and device constraints.

The current CCB FAQ expressly says that Item Name, Item Category, License Number, and Package ID filters are displayed but not yet fully functional; relevant information must meanwhile be entered in the broader search box. It also says newly received products do not appear until a first sale is recorded, inactive/sold-out products may not appear, older initial-import records can remain without retailers or package IDs, and certain missing product information reflects originating facilities not fulfilling catalog requirements. These are documented architecture limits, not audit findings about frequency.

## Six-field technology spine

1. **Central technology or technological system:** Nevada's public product-and-testing data pipeline from regulated item/package/laboratory records through Metrc to a searchable consumer interface and a separate historical laboratory-data repository.
2. **Tangible technology, object, process, or breakthrough:** the physical package label and unique Metrc package identifier; the matching catalog product card; the expanded product/package record; the linked PDF COA; the search/filter controls; and the exportable historical dataset. The canonical opening should follow one real package from label identifier to public record and COA.
3. **People and labor:** legislators and legislative staff; CCB product, audit, inspection, laboratory and communications staff; Metrc developers/support; cultivation and production employees entering product information and images; laboratory analysts and reviewers creating and uploading COAs; retail/lounge inventory staff receiving, activating and selling packages; accessibility and data users; and consumers doing the interpretive work of matching identifiers and reading results.
4. **Place-specific historical connection:** Nevada enacted a specific database mandate in 2021, prepared an item-catalog rollout in 2024, and announced the public catalog in 2026 as an interface to Nevada's licensed product and laboratory system.
5. **Present-day technological consequence or continuation:** a consumer can search current Nevada items, see selected product/license/package/testing information, and potentially download a package-specific COA, while older testing data is routed to the Laboratory Library. The current interface's incomplete filters and event-dependent visibility make usability and correspondence empirical questions.
6. **Tempting concurrent or noncausal connections:** the catalog's existence does not prove accurate facility entry, universal COA presence, complete market coverage, scientific comprehension, accessibility, safer consumption, laboratory accuracy, enforcement effectiveness, or consumer behavior change. A missing result does not prove an unregulated product; a visible result does not prove current retail availability without verification; a COA does not prove every unit's present condition or every possible safety dimension.

## Mechanism and failure map

| Layer | Necessary work | Observable failure or ambiguity to test |
|---|---|---|
| Product definition | Facility creates/maintains item name, category, description, ingredients/allergens and image | Missing, generic, inconsistent, tester/promo, duplicate or consumer-confusing record |
| Package identity | Package ID, batch/lot or production-run linkage maintained | Label identifier cannot be found or does not correspond cleanly |
| Laboratory evidence | Results and PDF COA linked to the relevant source/package lineage | Missing/broken COA, unreadable PDF, mismatched identifier, derived-package ambiguity |
| Retail state | Product received, active, sold and associated with carrying location | New item invisible before first sale; sold-out/inactive product absent; stale older import |
| Catalog projection | Metrc state transformed into public product cards/details | Missing fields, duplicate entries, unclear origin, absent retailer/package, changing result |
| Search and filters | User selects Nevada and finds item by name/category/license/package | Displayed filters not fully functional; broad search produces noisy or unexpected results |
| Interpretation | User understands units, analytes, qualifiers, dates, LOD/LOQ and pass/fail scope | Downloadable evidence mistaken for understandable or complete safety information |
| Accessibility/device | Keyboard, screen reader, zoom, contrast, mobile layout and PDF access work | Age gate, modal, filters, product carousel or COA inaccessible or difficult to operate |
| Historical route | Laboratory Library supplies exportable testing history | Bulk data does not reproduce the product-facing journey or supply consumer context |

## Causal and correspondence ledger

| Proposed connection | Classification | Publication consequence |
|---|---|---|
| 2021 AB 149/NRS 678B.635 → legal requirement for a public testing database | Causal statutory lineage | Safe with exact enacted/current text and effective dates. |
| Statutory mandate → specific Metrc Item Catalog design | Documented continuation, design history incomplete | Recover procurement/design/implementation record and 2024–2026 chronology. |
| Facility item entry + package/lab/sales records → fields and visibility in catalog | Documented architectural relationship | Verify actual field provenance and transformations with technical/operator evidence. |
| First sale/activity rules → current product visibility | Documented platform rule | Describe rule; test behavior rather than assuming perfect implementation. |
| Catalog result → product presently in stock at named seller | Unresolved | Confirm against retailer and timestamp; interface state alone may lag or differ. |
| Visible COA → exact physical package correspondence | Conditional | Match batch/lot or production-run and package identifiers against a real label. |
| Missing search result → unlawful/unregulated item | Rejected | Many architectural and query causes can produce absence. |
| Downloadable COA → consumer comprehension | Rejected | Requires usability/scientific-legibility testing. |
| COA “pass” → universal safety or absence of all hazards | Rejected | Story 12 owns the measurement chain and analyte/method limits. |
| Public data → safer behavior, market trust or enforcement success | Unresolved | Requires outcome evidence; do not infer from launch rhetoric. |
| 2024 announced rollout → 2026 launch delay caused by a named actor/problem | Unresolved | Establish chronology and causes before characterization. |

## Live interface observations on 12 August 2026

These are discovery observations, not the completed audit:

- The CCB page linked successfully to the Metrc Catalog and stated that the view reflects Metrc at search time.
- The Catalog presented an age-confirmation screen in a new session and a Nevada-filtered search/results interface in an existing verified session.
- An existing Nevada search for “Kief-Enhanced” returned **346 results** at the observation time. The first page included kief-enhanced flower, kief, infused pre-rolls, and records whose names contained “Tester” or “PROMO,” demonstrating why category/name normalization and consumer legibility require testing.
- Expanding the first observed item displayed product name, category, facility/license identifier, description and ingredients, but the observed expanded state did not itself present a visible COA link. One record cannot establish prevalence, absence, or failure.
- The interface exposed sorting and multiple filter controls, while the current CCB FAQ says several filters are not yet fully functional.

Do not publish these point-in-time observations as findings until the full protocol is run, timestamped, independently checked, and recaptured within 30 days of release.

## Required 28-attempt audit before findings prose

Run four independently selected, physically or retailer-listing-verifiable items in each of seven categories: flower, pre-roll/infused pre-roll, concentrate, inhaled product/vape, edible, beverage, and topical. Avoid convenience sampling from one producer, laboratory, retailer, or jurisdiction.

For every attempt preserve:

- selection rule, query, timestamp, state filter, device/browser and viewport;
- product name/category, originating facility, package ID, carrying location and jurisdiction;
- whether name, category, image, description, ingredients/allergens, package and retailer data appear;
- COA presence, download success, PDF integrity, laboratory, dates, result/qualifier fields and identifier match;
- label/menu-to-catalog and label-to-COA correspondence;
- keyboard, screen-reader, zoom, contrast, mobile, age-gate, modal and PDF accessibility;
- failure type, exact reproduction steps, repeat attempt, and whether later state changed;
- no-result and ambiguous-result controls.

The audit must report denominators and uncertainty. It cannot imply statistical market representativeness unless the sample design earns it.

## Nonduplication boundaries

- **Story 4** owns creation and maintenance of the regulated plant/package data double inside the state system. Story 6 begins where selected records are projected to the public.
- **Story 12** owns sampling, instruments, methods, uncertainty, LOD/LOQ and the scientific production of a “pass.” Story 6 tests whether the resulting evidence is findable, matched and legible.
- **Story 15** owns holds, recalls and reverse traceability. Story 6 may test whether hold status is displayed but cannot retell a recall case.
- **Story 3** owns aggregate potency-distribution screening. Story 6 cannot generalize from consumer-visible potency cards to enforcement conclusions.

## Package pathways

### Video pathway

Two official, story-specific candidates are already identified:

1. CCB/Metrc's April 2024 item-catalog rollout webinar, which should document the intended data-entry and publication workflow.
2. CCB's embedded **Reading a Certificate of Analysis** video, which addresses the interpretive burden after download.

Neither may be selected merely because it is official. Watch both completely; record creator, publication date, runtime, exact useful timecodes, captions/transcript quality, claims that remain current, accessibility, rights/embedding status and lawful in-feed route. Compare the 2024 intended workflow with the 2026 interface. Reject promotional launch coverage, generic cannabis B-roll and tutorials that do not show the actual Nevada evidence chain. If neither is exceptional and rights-usable, document the rejection and use the carousel or single-image route.

### Real-image carousel pathway

Every page must use a meaningful real visual, selected after the audit:

1. The enacted 2021 AB 149/NRS 678B.635 database mandate page.
2. The actual 2024 CCB catalog-rollout document page with planned launch and COA workflow.
3. The 20 April 2026 CCB launch page showing the public claim and stated scale.
4. RN's photograph of the exact physical package label used in the correspondence test.
5. A dated capture of that item's real catalog result/product card.
6. A dated capture of the expanded package/retailer record.
7. The actual matching COA page with identifiers and sensitive/proprietary details reviewed.
8. A real failed/ambiguous search or incomplete-filter state from the preserved audit.
9. The CCB Laboratory Library page and one actual exported-data artifact showing the historical route.
10. The audit results table with denominators, built from the preserved evidence rather than decorative claims.

Each page requires item-level provenance, reuse basis, caption, credit, alt text and accessible carousel transcript. Product packaging, screenshots, COAs, logos and interface captures each receive separate rights analysis.

### RN location-photography pathway

**Primary assignment:** after selecting one audit item that is actually listed at a licensed Las Vegas retailer, arrange permission at that exact retailer to photograph the physical package label beside a device showing the matching catalog record. Compose tightly on the package identifier and corresponding screen field; exclude customers, employees, transaction data, security features, license plates and unrelated inventory. Capture the exterior only if the retailer separately authorizes it. Best timing: a quiet weekday morning, with the item and permissions confirmed before travel.

**Agency-context assignment:** the CCB's current Las Vegas public-meeting location at **7120 Amigo Street** may supply a genuinely connected exterior/public-meeting context photograph, subject to current meeting-location and photography confirmation. Frame the public institution and a device displaying the public catalog; do not imply the building houses the database or photograph security-sensitive areas.

**Backup:** controlled tabletop photograph of RN's lawfully obtained Nevada package and its label-to-catalog match at her lodging or another private, permissioned setting. The package must remain sealed if opening is unnecessary, and transport/possession/location rules must be checked. An unrelated dispensary exterior or Las Vegas landmark is not an acceptable substitute.

### Best single-image decision

Provisional strongest lead: RN's correspondence photograph showing the real package identifier and the matching public catalog/COA route. If permission, privacy, legibility or rights make that weaker than the evidence, use a dated catalog product-detail capture paired with the exact package label as a documentary diptych. A generic plant, lab stock photo or Metrc logo cannot serve as the primary image.

### Audio edition

Default to RN's verified AI voice after the final verified article is approved, labeled: **“Listen to an AI-narrated edition in RN’s voice.”** Prepare the listening-adapted script, spoken versions of statutory citations, URLs, package numbers, COA fields, abbreviations, units and dates, plus a pronunciation sheet for Metrc, analytes, laboratories, facilities, people, Nevada places and technical terms. Include filename, title, estimated/final runtime, version date, near-opening Beehiiv Audio-block placement, complete-article transcript route and playback/pronunciation/pacing/factual/mobile/accessibility QA. Flag sequences of identifiers and scientific units for human review. Real or hybrid narration remains RN's choice; no generic voice, invented wording, background music or publication without authorization.

## Evidence and review still required

- Execute and preserve the 28-attempt audit, including controls, retries, mobile and accessibility testing.
- Purchase or otherwise lawfully access selected physical products and compare label, retailer record, catalog record and COA; no purchase is authorized by this audit.
- Recover the 2021 legislative history and 2024–2026 implementation chronology, including why the announced 2024 start and public 2026 launch differ.
- Obtain technical evidence for field provenance, refresh cadence, transformation logic, inactive/import handling, COA lineage, hold status and error correction.
- Interview or obtain records from CCB, Metrc, facilities, laboratories, retailers and consumers only after RN authorizes outreach.
- Conduct analytical-chemistry review for COA interpretation and accessibility review of interface, modal, age gate, downloads and PDFs.
- Watch and log the two official video candidates; complete item-level video/image/rights decisions.
- Complete cold-reader, LinkedIn, audio, mobile, citation, legal, privacy/security and full release QA.

## Official sources checked

- Nevada CCB, **Cannabis Item Catalog**: <https://ccb.nv.gov/cannabis-item-catalog/>
- Metrc public Catalog, live interface: <https://catalog.metrc.com/>
- Nevada CCB, **Metrc Item Catalog — Frequently Asked Questions**, revised 6 April 2026: <https://ccb.nv.gov/wp-content/uploads/2026/04/Metrc-Item-Catalog-FAQ.pdf>
- Nevada CCB, **CCB Debuts Metrc Item Catalog & Billboard Campaign on 4/20**, 20 April 2026: <https://ccb.nv.gov/ccb-debuts-metrc-item-catalog-and-billboard-campaign/>
- Nevada Legislature, **NRS 678B.635**: <https://www.leg.state.nv.us/nrs/NRS-678B.html>
- Nevada 2021 Statutes, **AB 149 / chapter 316**: <https://www.leg.state.nv.us/statutes/81st2021/Stats202113.html>
- Nevada CCB, **CCB Item Catalog** rollout document, 2024: <https://ccb.nv.gov/wp-content/uploads/2024/06/CCB-Item-Catalog.pdf>
- Nevada CCB, **Laboratory Library**: <https://ccb.nv.gov/lab-library/>
- Existing project records: `MJBIZCON_GATE_3_CLAIM_LEDGER_TRANCHE_01.md`, `MJBIZCON_GATE_5_PRE_EVENT_STRUCTURED_EVIDENCE_OUTLINES.md`, and Story 4's reconstructed package/technology audit.

## Final gate

**PASS PROVISIONALLY AS A STRONG, DISTINCT TECHNOLOGY PROPOSITION; FINDINGS DRAFTING REMAINS BLOCKED.**

The story should center the public evidence supply chain—not generic “transparency,” not the portal as a novelty, and not the scientific validity of every COA. Its strongest question is how Nevada transforms regulatory records into consumer evidence and where a field, identifier, sale event, document, interface rule or interpretation can break correspondence.

Nothing in this audit authorizes publication, scheduling, sending, purchasing, permission outreach, interviews, field access, age-gate submission, or public uploading.
