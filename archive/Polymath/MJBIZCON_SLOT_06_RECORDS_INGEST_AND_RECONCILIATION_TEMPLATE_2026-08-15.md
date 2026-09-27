# MJBizCon 2026 — Slot 06 Records Ingest and Reconciliation Template

**Working control artifact — 15 August 2026**  
**Status:** Ready for use if records are received; the underlying public-records request remains draft and unsent.  
**Evidence warning:** This template is an administrative control, not evidence. A blank field, missing production or identifier resemblance proves nothing.

## Purpose

Use this file to preserve, normalize, compare and disposition every record received for Slot 06, “When a Recall Has to Find the Product.” It is designed to prevent an agency production, Metrc export, order, bulletin, spreadsheet or witness account from being treated as interchangeable evidence.

No article claim is cleared until the relevant record is logged, its identifiers are reconciled, its evidentiary weight is assigned and the claim-disposition table is completed.

## 1. Intake batch log

| Field | Entry |
|---|---|
| Batch ID | |
| Receipt date/time/timezone | |
| Producing body/person | |
| Delivery channel | |
| Request section/item mapped | |
| Production filename(s) | |
| Page/row range | |
| Native file or export | |
| File hash(es) | |
| Redactions present | |
| Withholding/privilege notice | |
| Custodian/processor | |
| Preservation notes | |

## 2. Document-level register

| Doc ID | Batch ID | Original filename | Record type | Date/time | Author/source | Pages/rows | Native metadata preserved? | Duplicate/version relationship | Request item | Notes |
|---|---|---|---|---|---|---:|---|---|---|---|
| | | | | | | | | | | |

## 3. Identifier normalization register

Never silently shorten, reformat or merge identifiers. Preserve the source value and record the normalized value separately.

| Identifier class | Source value | Normalized value | Source doc/location | Entity/product asserted | Match status | Conflict/lineage note |
|---|---|---|---|---|---|---|
| Case/order number | | | | | | |
| Current license ID | | | | | | |
| Historical license key | | | | | | |
| Metrc package/tag ID | | | | | | |
| Sample ID | | | | | | |
| Batch/lot/run | | | | | | |
| Product/SKU | | | | | | |
| Date/time/timezone | | | | | | |

### Preloaded retrieval keys — not pre-established matches

**Historical GTI/Carson City keys**

- 18900369179730863251 — Medicinal Dispensary
- 83887504703736981918 — Medicinal Cultivator
- 17355802525954961447 — Adult Use Cultivator
- 88939271215332828859 — Medicinal Processor
- 69272354565432352821 — Adult Use Processor
- Current identifiers: D099, C088, P057

**Other bounded keys**

- Greenway Medical LLC — Case No. 2025-028; C018
- Cannex — Case No. 2020-27; Advisory 2020-05

Overlap, shared geography, common ownership, a similar date or a similar allegation does not establish identity. A lineage or cross-entity match requires an express agency crosswalk or a shared exact product/package identifier supported by the record.

## 4. Event timeline ledger

| Event ID | Date/time/timezone | Action type | Legal/administrative authority | Actor | License/facility | Product/package scope | Metrc event | Extension/revision | Release/remediation/destruction evidence | Source doc/location | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | Hold / stop-sale / quarantine / recall / release / destruction / other | | | | | | | | | |

## 5. Request-to-production reconciliation

| Requested record set | Requested item | Produced document(s) | Responsive | Partial | Withheld/redacted | No record stated | Follow-up needed | Disposition |
|---|---|---|---|---|---|---|---|---|
| 2019–2021 Carson City hold | Orders/notices and exact identifiers | | | | | | | |
| 2019–2021 Carson City hold | Metrc events, scope changes and release/disposition | | | | | | | |
| 2023 ethephon response | Source-to-derivative-to-retailer identifier chain | | | | | | | |
| 2023 ethephon response | Quantity, recovery, remediation or destruction accounting | | | | | | | |
| Greenway, Case 2025-028 | Order, identifier schedules, custody and disposition | | | | | | | |
| Governing authority | Guidelines and pre-6 June 2025 authority | | | | | | | |

## 6. Evidence ladder

Assign one level to each proposed proposition.

1. **Direct identifier-level evidence:** exact package, tag, batch, lot, product or license identifier in a competent official/native record.
2. **Corroborative record:** independent record supporting identity, timing or action but not independently closing the proposition.
3. **Testimonial evidence:** attributed firsthand account, bounded to what the witness observed or was told.
4. **Inference:** reasoned connection not expressly established by a source; never presented as fact.
5. **Unresolved:** evidence is absent, contradictory, withheld, ambiguous or insufficient.

## 7. Claim disposition register

| Claim ID | Proposed wording | Required evidence | Supporting record(s) | Contrary/missing evidence | Evidence level | Decision | Approved wording/qualification | Reviewer/date |
|---|---|---|---|---|---|---|---|---|
| | | | | | | Confirmed / Disconfirmed / Partial / Unresolved | | |

### Current language control

Safe pending closure: **“A GTI-affiliated witness described a Carson City hold affecting his organization.”**

Prohibited unless identifier-level closure is obtained: **“The GTI/Rise Carson City hold was the Cannex hold.”** Do not substitute ownership overlap, account history, location, chronology or witness recollection for an agency record or exact shared identifier.

## 8. Missing-record and follow-up tracker

| Gap ID | Missing record/field | Why material | Prior request item | Evidence searched | Follow-up wording | Owner | Status | Deadline |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |

## 9. Duplicate and version control

| Record family | Version/date | Supersedes | Differences located | Comparison method | Controlling for which claim | Notes |
|---|---|---|---|---|---|---|
| | | | | | | |

Keep initial and amended bulletins, orders, schedules and exports. “Later” does not automatically mean “complete,” and silence in a later document does not prove release, remediation, destruction or recovery.

## 10. Redaction and withholding log

| Doc/request item | Page/row/field | Redaction/withholding basis stated | Scope | Identifier impact | Challenge/clarification needed | Status |
|---|---|---|---|---|---|---|
| | | | | | | |

## 11. Ingestion SOP

1. Preserve the original delivery and filenames; calculate hashes before transformation.
2. Assign batch and document IDs; log custody and metadata.
3. Map every document to the exact request item or mark it unsolicited.
4. Extract identifiers verbatim, then normalize them in a separate field.
5. Compare identifiers across orders, Metrc events, bulletins, product lists, retailer lists and disposition records.
6. Construct the event timeline without filling gaps by assumption.
7. Record redactions, withheld material, “no record” statements and production omissions.
8. Deduplicate while retaining every version and recording substantive differences.
9. Assign an evidence level and complete a claim disposition for every proposed article statement.
10. Escalate contradictions or legal-characterization questions before drafting.

## 12. Acceptance gates for Slot 06 drafting

The evidence gate is not satisfied until the material proposition has, as applicable:

- an exact product, lot, batch, package or Metrc identifier;
- an affected license/facility identifier and any necessary agency lineage crosswalk;
- the action and effective date/time, with timezone;
- the scope and every documented extension or revision;
- release, remediation, recovery, transfer, destruction or other final-disposition evidence;
- chain-of-custody and quantity reconciliation adequate for the claim; and
- any contrary or missing evidence explicitly disclosed.

Possible final dispositions are **closed—confirmed**, **closed—disconfirmed**, **partial**, or **unresolved**. “Unresolved” is a valid result and does not authorize stronger prose.

## 13. Administrative status

- Records request: **draft and unsent**.
- Submission authorization: **not granted**.
- Requester details: **not supplied/confirmed**.
- Voluntary fee ceiling: **not approved**; draft proposes notice before $50.
- Article drafting: **blocked pending identifier-level closure**.
- This template: **ready for any voluntarily supplied or formally produced records**.

