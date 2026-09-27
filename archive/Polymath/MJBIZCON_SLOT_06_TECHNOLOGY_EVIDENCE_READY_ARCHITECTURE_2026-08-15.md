# MJBizCon Slot 06 — Technology Evidence-Ready Architecture

**Story:** When a Recall Has to Find the Product  
**Canonical position:** 14-series Slot 06 / promoted Story 15  
**Status:** Desk-side technology architecture complete; article drafting remains blocked  
**Date:** 15 August 2026

## 1. Purpose and non-claims status

This file defines the technology and evidence architecture needed to explain reverse traceability during a cannabis recall without overstating what the presently available record proves. It is an implementation and verification framework, not evidence that any Nevada licensee or regulator used every component described here.

The architecture keeps five questions separate:

1. **Identity:** What exact regulated object is involved?
2. **Lineage:** What did it come from, and what did it become?
3. **Location:** Where was each affected unit or package at the relevant time?
4. **Authority:** What notice, order or rule authorized each action?
5. **Disposition:** What physically happened to the affected material?

A database status, regulatory order, laboratory result, public bulletin and physical disposition are different records. None substitutes for the others.

## 2. System boundary

An evidence-ready recall stack may contain the following bounded systems:

- seed-to-sale or track-and-trace system;
- licensee inventory, manufacturing and point-of-sale systems;
- laboratory information-management system;
- regulator case, inspection, order and public-notice systems;
- messaging or consumer-notification system;
- document repository for signed orders, manifests, certificates and disposition records;
- reconciliation layer that compares authoritative records and reports exceptions.

Integration must preserve the source system, source record identifier, source timestamp, ingestion timestamp, transformation history and current verification state. A convenient consolidated view must never erase provenance.

## 3. Canonical identifier and data dictionary

Every recall event should resolve, where applicable, the following fields:

| Field | Minimum requirement | Failure prevented |
|---|---|---|
| Regulated product ID | Exact source value plus normalized comparison value | Name-only matching |
| Batch or lot ID | Exact value, issuer and creation context | Collapsing distinct production runs |
| Package or inventory tag | Exact value with check for leading zeros and punctuation | False mismatches and silent truncation |
| License ID | Full identifier, facility name, license type and effective dates | Treating names as stable identities |
| Source and destination IDs | Exact package/license endpoints | Broken transfer reconstruction |
| Event time | Source timestamp, timezone and ingestion timestamp | Misordered events |
| Event type | Controlled vocabulary plus original source description | Conflating hold, recall, return and destruction |
| Authority ID | Order, notice, statute, regulation or policy citation | Treating workflow state as legal authority |
| Quantity and unit | Numeric value, unit, precision and conversion method | Invalid mass accounting |
| Status | Source-system status and mapped analytical status | Treating a label as physical fact |
| Disposition | Returned, quarantined, released, remediated, destroyed, sold or unresolved | Assuming closure without proof |
| Evidence link | Document/record ID, page or row, checksum/version | Untraceable assertions |

Original values remain immutable. Normalized values exist only for comparison and must retain the transformation rule used.

## 4. Event ledger

The technical core is an append-only event ledger. Each event should contain:

- unique event ID;
- affected identifier(s);
- parent and child identifiers, if a transformation occurred;
- source and destination license IDs;
- event type and event state;
- event and ingestion timestamps;
- actor or issuing authority;
- quantity before, quantity moved or transformed, and quantity after;
- source record and document version;
- verification state: reported, corroborated, contradicted or unresolved.

Corrections create superseding events rather than overwriting history. Public-list revisions must be represented as versioned scope events so additions and removals remain auditable.

## 5. Identity resolution and lineage

### 5.1 Product and package identity

Resolution proceeds from exact identifier match to documented crosswalk. Fuzzy product-name similarity may generate a review candidate but cannot establish identity.

### 5.2 Split, merge and transformation lineage

The graph must support one-to-many splits, many-to-one blends and repeated transformations. Each edge requires a source record, time, quantity and facility/license context. A finished product is not considered linked to a source lot merely because the names, dates or owners overlap.

### 5.3 License lineage

Facility names, ownership and license numbers can change independently. The model therefore preserves license-effective dates, location, license type, ownership periods and documented predecessor/successor relationships. Overlapping keys are retrieval clues, not proof of succession or incident identity.

## 6. Recall orchestration

An evidence-ready workflow separates these stages:

1. signal or finding recorded;
2. scope hypothesis opened;
3. affected identifiers verified;
4. legal or administrative authority attached;
5. inventory/location query executed;
6. downstream transformations and transfers traversed;
7. quarantine, hold or stop-sale actions issued;
8. retailer and consumer communication generated;
9. returns, releases, remediation or destruction reconciled;
10. exceptions closed or explicitly carried forward;
11. public scope revisions versioned;
12. final mass and disposition accounting approved.

The workflow must permit scope expansion and contraction without destroying earlier versions. Every exclusion requires the evidence and decision record supporting it.

## 7. Exception queue

The system should fail loudly on:

- missing parent or child identifier;
- duplicate identifier with incompatible attributes;
- transfer without matching receipt;
- transformation with impossible quantity balance;
- license event outside the license-effective period;
- product in a public notice but absent from the internal query result;
- internal affected package omitted from the public list;
- hold or recall status without an attached authority record;
- release without documented release authority;
- destruction without witness, manifest or disposition record;
- unresolved unit conversion;
- stale inventory location;
- consumer-level product lacking a usable package-to-notice lookup path.

Exceptions require an owner, severity, creation time, evidence links, disposition and closure approval. Silence is not closure.

## 8. Audit, security and retention

- role-based access with least privilege;
- immutable audit log for queries, exports, changes and approvals;
- separation of operational changes from evidentiary annotations;
- encryption in transit and at rest;
- documented retention schedules and litigation/administrative holds;
- checksum or equivalent integrity control for exported records;
- versioned schemas and transformation code;
- redaction that preserves the existence, location and reason for withheld material;
- recovery testing and offline export capability for incident operations.

## 9. Evidence binding and claim gates

Every publishable technical claim should bind to one or more evidence objects:

| Claim class | Required evidence |
|---|---|
| Identifier existed | Authoritative source row, document or system export |
| Product derived from source material | Documented parent-child record chain |
| Product reached a retailer | Transfer/receipt or authoritative endpoint record |
| Product was held or recalled | Applicable order/notice plus identifier match |
| Product was sold | Transaction or authoritative sales record |
| Consumer was notified | Message or public-notice delivery evidence, not mere publication |
| Material was returned or destroyed | Quantity-level disposition records |
| System found all affected product | Defined universe, query logic, results and independent reconciliation |

Claim disposition values are: **supported**, **supported with limitation**, **contradicted**, **unresolved**, or **not inferable**.

## 10. Verification protocol

### Test 1 — Known-lot retrieval completeness

Seed the test with a confirmed source lot. Traverse every split, blend, conversion, transfer and retail endpoint. Compare results with independent source documents. Report missing and extraneous identifiers.

### Test 2 — Cross-license lineage

Verify transfers across licensees, name changes, ownership changes and inactive licenses. Reject name-only joins.

### Test 3 — Transformation accounting

Reconcile input and output quantities with explicit waste, samples, process loss and unit conversions. Flag unexplained variance.

### Test 4 — Scope revision

Apply an addition and a removal to a public list. Confirm the system preserves both versions, the reason, approver and downstream notification effects.

### Test 5 — Stale and inconsistent inventory

Inject a transfer without receipt, a delayed sale and an incorrect status. Confirm the exception queue exposes each failure and prevents false closure.

### Test 6 — Return and destruction disposition

Trace recalled material from endpoint through return, quarantine and final disposition. Confirm quantity-level evidence and authority at every transition.

### Test 7 — Consumer lookup usability

Using only the information reasonably visible on a package or receipt, test whether a consumer can determine inclusion, understand the action and reach a current notice. Record ambiguity and accessibility failures.

### Test 8 — Latency and reconciliation

Measure time from authoritative scope change to internal query, retailer action, public update and notification. Do not describe publication time as notification time.

### Test 9 — False-positive and false-negative review

Independently sample included and excluded identifiers. Report precision, recall, unresolved cases and the denominator used. Avoid performance percentages when the relevant universe is unknown.

## 11. Implementation checklist

- [ ] Approve canonical identifier schema and controlled event vocabulary.
- [ ] Preserve raw values and publish normalization rules.
- [ ] Build append-only event ledger and versioned scope model.
- [ ] Implement parent-child and license-lineage graphs.
- [ ] Attach authority records separately from operational statuses.
- [ ] Configure exception ownership and fail-loudly controls.
- [ ] Reconcile mass, units and disposition.
- [ ] Create consumer-facing identifier lookup and accessibility tests.
- [ ] Retain query logic, exports, schemas and audit history.
- [ ] Run the nine-test protocol using a documented incident record.
- [ ] Obtain technical, regulatory, administrative-law, analytical-chemistry, operator and public-health review.

## 12. Article technology section map

1. The recall problem is reverse lookup, not a product-name search.
2. Identity must survive splits, blends, transfers and license changes.
3. Traceability can locate records without detecting an untested hazard.
4. A status is not an order, and an order is not physical disposition.
5. Scope revisions are expected and must remain versioned.
6. The hard proof is reconciliation: every affected identifier and every unit accounted for.
7. The consumer test is whether package-visible information leads to a clear action.

This map is ready for drafting only after the evidence gates below are satisfied.

## 13. Remaining evidence gates

- one complete source-to-derivative-to-retailer identifier chain;
- one incident-level order/notice/audit/release/disposition chain;
- pre-6 June 2025 authority for the earlier incidents;
- final R103-26 text and required guidelines, if adopted;
- quantity, recovery, release and destruction accounting;
- evidence of consumer reach and warning accessibility;
- specialist review across the disciplines listed above.

## 14. Cannot-infer boundaries

The current desk record cannot establish that every affected unit was found, sold, communicated to a consumer, returned, destroyed or otherwise resolved. It cannot establish system completeness from a public product list, infer legal authority from a workflow status, infer physical disposition from a hold, equate publication with notification, equate traceability with hazard detection, or connect incidents from overlapping license, ownership or product identifiers alone.

