# MJBizCon Canonical 14 — Slot 13 Sample-Correspondence Evidence Reconstruction

**Decision date:** 13 August 2026  
**Candidate:** *The Sample Passed. The Product Failed.*  
**Test lot:** `1-40 Diamond Dust - 02/10/2025`  
**Decision:** **PARTIAL CLOSURE; EXACT CORRESPONDENCE NOT PROVED; DRAFTING REMAINS BLOCKED**

## Result

The bounded reconstruction confirms that the affected Virtue products map to the licensed entity **Las Vegas Wellness and Compassion LLC**, and it recovers multiple contemporaneous failed microbial laboratory samples created by that facility. It does **not** establish which failed laboratory sample corresponds to `1-40 Diamond Dust - 02/10/2025`, its initial passing sample, or any particular retail package listed in Bulletin 2025-01.

The public Laboratory Library is therefore strong enough to corroborate the facility-level testing environment and expose candidate secondary records, but not strong enough to publish an item-level initial sample → source lot → retail package → secondary sample chain. The candidate retains provisional Slot 13 because the official bulletin itself proves the event and named affected lots. Article drafting remains blocked.

## Controlling official records

1. Nevada CCB, *Public Health and Safety Bulletin 2025-01*, issued 12 September 2025: <https://ccb.nv.gov/wp-content/uploads/2025/09/Public-Health-and-Safety-Bulletin-2025-01.pdf>
2. Nevada CCB Laboratory Library readme, last Metrc extraction 1 July 2026: <https://ccb.nv.gov/wp-content/uploads/2026/04/READ_ME_FIRST_LAB_DATA.xlsx>
3. Nevada CCB 2025 Laboratory Library archive: <https://ccbdownload.wpenginepowered.com/wp-content/uploads/2026/04/2025.zip>
4. Nevada CCB Guidance and public-health-advisory index: <https://ccb.nv.gov/guidance/>
5. Nevada CCB public-meetings, complaints and dispositions index: <https://ccb.nv.gov/public-meetings/>

## What the bulletin proves

Bulletin 2025-01 states that identified uninfused pre-roll and whole-flower packages passed initial laboratory testing; CCB agents discovered that products were misrepresented during laboratory sampling; the Board required secondary confirmation; and secondary results for the first group failed for yeast and mold and/or Aspergillus. A separately labeled precautionary group could not undergo secondary testing and might have been contaminated.

For the selected test lot, the bulletin identifies `1-40 Diamond Dust - 02/10/2025` and numerous downstream package identifiers, including `1A4040300000276000044489`. It does not publish the initial laboratory sample tag, secondary laboratory sample tag, source-package identifier, COAs, discovery method, actor, technique, intent, or procedural outcome.

## Laboratory Library schema finding

The readme describes fourteen relevant columns, A–N. The current CSV export contains a fifteenth field, `Test Result Level`, after `Lab Test Detail Id`. The operative fields are facility (A), laboratory (B), date (C), internal `PackageLabSampleId` (D), overall pass (E), product category (H), laboratory-sample `PackageLabel` (I), test type (L), test passed (M), detail identifier (N), and result level (O in the export).

This correction matters: filtering column N as the pass/fail flag produces a false empty result. The valid failed-test filter uses column M.

The readme defines “Source Package” and “Sample,” but the published CSV has no source-package tag, batch/lot name, product/strain name, parent-child package lineage, or downstream retail-package relationship. `PackageLabel` identifies the laboratory sample, not the bulletin's retail package.

## Facility correspondence

Searching the complete 2025 archive for the package-prefix segment found that `1A4040300000276…` laboratory samples were packaged by **Las Vegas Wellness and Compassion LLC**. Later 2025 records explicitly include labels such as `Virtue - Diamond Dust - Lab Sample`, confirming the Virtue-to-licensed-entity correspondence without relying on a commercial brand biography.

The prefix alone does not prove that any particular laboratory sample is a parent or sibling of a bulletin package. It identifies the establishment namespace, not the lot lineage.

## Recovered candidate failed microbial records

Using the corrected schema, the July–15 September 2025 files contain 21 failed microbial test-detail rows for Las Vegas Wellness and Compassion LLC, resolving to twelve failed sample-level records:

| Date | Sample tag ending | Internal ID | Category | Lab | Failed evidence |
|---|---|---:|---|---|---|
| 17 Jul | `44596` | 9704668 | Shake/trim | 374 Labs | Four Aspergillus species fields |
| 17 Jul | `44597` | 9704670 | Shake/trim | 374 Labs | Four Aspergillus species fields |
| 28 Jul | `44799` | 9761246 | Plants | ERP | Yeast/mold, 15,100 CFU/g |
| 15 Aug | `45012` | 9837686 | Shake/trim | G3 Labs | Yeast/mold, 10,100 CFU/g |
| 15 Aug | `45013` | 9837901 | Shake/trim | G3 Labs | Yeast/mold, 10,500 CFU/g |
| 15 Aug | `45017` | 9838052 | Shake/trim | G3 Labs | A. flavus, A. fumigatus; yeast/mold, 50,000 CFU/g |
| 22 Aug | `45213` | 9864166 | Shake/trim | G3 Labs | Yeast/mold, 14,200 CFU/g |
| 22 Aug | `45218` | 9864379 | Plants | G3 Labs | Yeast/mold, 23,400 CFU/g |
| 22 Aug | `45212` | 9864452 | Shake/trim | G3 Labs | A. flavus; yeast/mold, 22,000 CFU/g |
| 22 Aug | `45214` | 9864454 | Shake/trim | G3 Labs | A. niger |
| 5 Sep | `45418` | 9910597 | Plants | G3 Labs | Yeast/mold, 50,000 CFU/g |
| 12 Sep | `45498` | 9936719 | Buds | G3 Labs | A. flavus |

Complete identifiers are preserved in `evidence/slot13/virtue_failed_microbial_jul_sep.tsv`. These are **candidate context records**, not identified secondary samples from Bulletin 2025-01. Several are shake/trim or whole-wet-plant samples, while the bulletin concerns packaged flower and pre-rolls. The dataset does not provide the lineage needed to connect those categories safely.

## Selected-lot correspondence matrix

| Required link | Public status | Decision |
|---|---|---|
| Named lot → affected retail packages | Bulletin supplies lot/package pairs | **Proved** |
| Prefix namespace → licensed facility | Archive plus later explicit Virtue labels | **Proved at facility level** |
| Initial passing sample/result → selected lot | Initial pass stated at bulletin-group level; lineage absent | **Not proved** |
| Selected lot → recovered failed sample | Source-package/lot lineage absent | **Not proved** |
| Failed sample → incident's secondary COA | Rows recovered; COA/correspondence absent | **Not proved** |
| Selected lot → retailer sale | Retailer list exists; package-to-transaction rows absent | **Partial** |
| Discovery mechanism and procedural outcome | No matching public record recovered | **Not proved** |

## Discovery and procedural search

The official guidance index preserves Bulletin 2025-01. The official public-meetings page lists meeting materials, complaints and dispositions. A bounded search did not locate a complaint, final order, disposition, meeting discussion or investigative document naming this bulletin or Las Vegas Wellness and Compassion LLC in connection with the sampling statement.

Absence from the indexed public records is not proof that no investigation, confidential inquiry or later proceeding exists. It means no public procedural record was recovered in this pass.

## Claim controls

- Say **the CCB stated** that products were misrepresented during laboratory sampling.
- Do not identify who acted, what material was presented, how it differed, or whether conduct was intentional.
- Do not call a recovered failed sample a retest of Diamond Dust or another named lot without source lineage or a paired COA.
- Do not infer analytical error from the initial-pass/secondary-fail sequence.
- Keep confirmed failures separate from unavailable precautionary lots.
- Do not infer illness, concealment, completed recall, full consumer notice or product recovery.
- Do not present a shared Metrc prefix as parent-child package correspondence.

## Gate decision and next safe action

**Retain the candidate provisionally; keep drafting blocked.** The public archive closes facility identity and proves that contemporaneous failed microbial samples exist, but it cannot close the selected lot's exact correspondence chain.

The remaining decisive evidence is a CCB source/parent lineage export, paired initial and secondary COAs, or an official procedural exhibit containing the mapping. Obtaining nonpublic records, making a public-record request, contacting a licensee or laboratory, purchasing product, or interviewing anyone requires RN's explicit authorization.

Until then, the next autonomous action is to test whether a different publicly documented Nevada incident can close the same correspondence mechanism more completely. If not, merge this incident into Slot 4 and reopen Slot 13 under the automatic boundary rule.

All inherited video, real-image carousel, precise RN location-photography, best-single-image, LinkedIn, audio-edition, rights, accessibility and QA requirements remain in force. Nothing is published, scheduled, sent or uploaded to a public destination.
