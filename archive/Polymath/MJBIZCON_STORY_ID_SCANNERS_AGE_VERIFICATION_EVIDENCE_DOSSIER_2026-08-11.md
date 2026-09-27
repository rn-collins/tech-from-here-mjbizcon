# MJBizCon / Tech From Here — Evidence Dossier

## Replacement finalist 3: ID scanners and age-verification data

**Checkpoint date:** 2026-08-11  
**Status:** RETAIN FOR COMPARISON — DO NOT LOCK; DO NOT DRAFT  
**Technology centrality:** PASS  
**Nevada specificity:** PASS  
**Current-authority confidence:** PASS, with the 2026 regulation kept explicitly proposed  
**Privacy/retention premise:** FAIL AS ORIGINALLY WORDED  
**Visual feasibility:** AMBER (`V?`)  
**Completed image-bearing carousel slides:** 0 of 10

---

## 1. Selection determination

This candidate is a genuine **Tech From Here** story. Its technological object is concrete: an identification-authentication system that can combine barcode and QR decoding, high-resolution document imaging, optical character recognition, ultraviolet and infrared examination, multispectral capture, document-library comparison, and—optionally—online database checks before producing an authenticity/age decision.

Nevada is not merely the setting. The state first placed scanner-assisted checking in cannabis regulation, codified the scanner requirement in 2023, and then published technical expectations in 2024. The legislative record shows that lawmakers intentionally left the statutory hardware language broad so the Cannabis Compliance Board could decide what scanners qualify. That delegation is the Nevada-specific hinge: a short statutory command became a much richer administrative specification.

The original working headline—**“What a Cannabis ID Scanner Is Allowed to Remember”**—is not supportable from the located cannabis authorities. Those authorities require authentication and specify capabilities, but they do not establish a scanner-specific retention period, deletion duty, prohibition on purchase linkage, or complete rule for secondary use. Nevada’s general information-security law may govern some retained personal information, depending on the entity, data, and circumstances, but it does not cure the missing cannabis-specific minimization answer.

The candidate therefore remains strong only under a corrected promise.

---

## 2. Corrected story promise

### Recommended working title

**Nevada Turned an Age Check Into a Technical Specification**

### Alternative title

**What the Scanner at a Nevada Cannabis Counter Is Built to See**

### Evidence-safe thesis

Nevada requires a cannabis seller to use an approved identification scanner before sale. The state’s 2024 guidance describes a technical stack capable of reading machine-readable data, imaging documents, extracting printed text, examining security features outside ordinary visible light, supporting passports, and optionally checking online databases. Yet the located cannabis-specific public rules do not explain the complete data lifecycle after authentication. The documented story is therefore not that Nevada authorizes unlimited memory, nor that scanners necessarily retain identity data. It is that Nevada specified a powerful authentication architecture while leaving key minimization, retention, linkage, and deletion questions outside the located cannabis rule.

### LinkedIn-native revelation

The scanner at a Nevada cannabis counter is not simply a calculator that turns a birth date into “21+.” Nevada’s published expectations contemplate document forensics: machine-readable codes, 400-DPI imaging, OCR, ultraviolet and infrared analysis, multispectral capture, passport support, and optional database connectivity. The surprising question is not only whether the ID is real. It is which of those observations becomes a transaction record—and the public cannabis rules located for this dossier do not answer that lifecycle question.

### Saveable payload

**The Seven-Layer ID-Scanner Data-Flow Test**

1. **Input:** Which document types can the device accept?
2. **Capture:** Does it read a code, image the document, or do both?
3. **Inspection:** Which visible, ultraviolet, infrared, or multispectral features does it evaluate?
4. **Comparison:** Is validation local, library-based, or connected to an external database?
5. **Decision:** What result does the worker see, and what happens on uncertainty or failure?
6. **Record:** Which fields, images, scores, timestamps, or operator actions are retained—and for how long?
7. **Linkage:** Can the result or underlying identity data be joined to a purchase, loyalty profile, security system, or third party?

The first five layers are substantially visible in Nevada’s public architecture. Layers six and seven require operator/vendor records and legal review; silence in the located cannabis rule cannot be treated as permission, prohibition, or proof of actual practice.

---

## 3. Documented mechanism

### A. Statutory gate

NRS 678B.545 requires a cannabis establishment agent, before sale, to check a government-issued photographic identification using a scanner approved by an appropriate Board agent to determine validity. This is a mandatory sale-stage gate, not merely an optional fraud-prevention tool.

### B. Delegated hardware decision

The May 10, 2023 Senate Commerce and Labor hearing on AB 342 records the sponsor explaining that the language was deliberately broad so the CCB could determine which scanners should be used. The hearing framed the law principally as an under-21 access intervention and compared it to Nevada’s tobacco rule. The located hearing discussion did not develop a data-retention or secondary-use framework.

### C. Administrative technical stack

The CCB’s 2024 compliance document requires or describes, among other capabilities:

- advanced barcode and QR-code scanning;
- 400-DPI high-resolution imaging;
- OCR for printed information;
- ultraviolet and infrared inspection;
- multispectral document imaging;
- support for international passports; and
- optional integration with online databases.

The exact mandatory/optional status of each feature must be quoted from the current original document in the eventual claim ledger. A feature list is not proof that every approved scanner implements the same architecture or that every retailer enables every available feature.

### D. Decision layer versus data layer

The public purpose is authentication and age verification. The technical means can expose more information than is necessary to calculate whether a person is at least 21. That creates a design distinction the article must preserve:

- **observed by a sensor or decoder** is not the same as **displayed to an employee**;
- **displayed** is not the same as **stored**;
- **stored locally** is not the same as **transmitted to a vendor**;
- **authentication result retained** is not the same as **full identity retained**; and
- **technically possible** is not the same as **used by a particular Nevada establishment**.

### E. General privacy/security law

NRS Chapter 603A imposes security and destruction duties on covered data collectors and records and contains separate rules for information collected online. Applicability depends on definitions, the actual data maintained, residency, entity, and processing context. The chapter supports a bounded statement that retained personal information may trigger general security obligations. It does **not** supply a located scanner-specific answer to how long cannabis retailers may retain all scanned fields or document images.

### F. Proposed 2026 regulation

LCB File R103-26I is an initial proposed regulation submitted April 29, 2026. It includes scanner language in proposed changes, but it is not treated here as effective law. Its evidentiary value is limited to showing that scanner-assisted authentication remains present in the CCB’s ongoing regulatory design.

---

## 4. Claim ledger

| ID | Allowed claim | Primary source | Confidence | Barred extension / review gate |
|---|---|---|---|---|
| ID-01 | Nevada law requires scanner-assisted verification of government-issued photographic ID before a cannabis sale. | NRS 678B.545 | High | Do not say every entry must be scanned; statute quoted here is sale-stage. Check separate lounge/event rules for other contexts. |
| ID-02 | AB 342 codified a scanner requirement already present in CCB regulation. | AB 342 overview, enacted text, 2023 committee minutes | High | Do not imply the 2023 statute created ID checking itself. |
| ID-03 | The sponsor said the statutory language was purposely broad so the CCB could determine qualifying scanners. | Senate Commerce and Labor minutes, May 10, 2023, pp. 2–3 | High | Attribute this as sponsor explanation, not a judicial holding. |
| ID-04 | CCB guidance describes barcode/QR reading, 400-DPI imaging, OCR, UV/IR or multispectral capabilities, passport support, and optional database integration. | CCB, “Compliance Requirements for ID Scanners and Age Verification,” 2024 | High, subject to exact-text capture | Distinguish required from optional features line by line. Do not claim every device activates every feature. |
| ID-05 | Machine reading can expose information beyond a binary age result. | Technical inference from documented capabilities and ID data structure | Medium-high | Clearly label as inference. Do not claim a particular retailer retains the additional fields. |
| ID-06 | Located cannabis-specific authorities do not state a complete retention, deletion, purchase-linkage, or secondary-use rule. | Bounded search of NRS 678B, current CCB guidance, located regulations and legislative record | Medium-high | This is a dated public-record limitation, not proof no other contract, local law, policy, or rule applies. Legal review required. |
| ID-07 | General Nevada information-security duties may apply when a covered data collector maintains qualifying personal information. | NRS Chapter 603A | High at general level | Do not declare categorical application to all scanned fields, all visitors, or all establishments without privacy counsel. |
| ID-08 | R103-26I is an initial proposed regulation, not current effective authority. | LCB File R103-26I, cover and scanner provisions | High | Never write “Nevada now requires” based solely on this proposal. |
| ID-09 | Public rules and vendor capability are not evidence of actual retailer configuration or practice. | Methodological constraint | High | Operator/vendor reporting required before naming behavior. |

---

## 5. Barred claims

The canonical article, LinkedIn post, carousel, captions, and promotional copy must not state or imply that:

- every Nevada cannabis retailer stores a visitor’s ID;
- the scanner creates a government database of cannabis purchasers;
- Nevada law authorizes indefinite retention;
- Nevada law prohibits all retention;
- a barcode scan necessarily captures the front image or facial photograph;
- OCR, ultraviolet, infrared, multispectral, and online checks occur on every scan;
- an optional vendor feature is a CCB mandate;
- a scanner accurately detects every counterfeit or never falsely rejects a valid document;
- scanning proves the presenter is the person named on the credential without a separate human or biometric match;
- cannabis-purchase information is automatically “consumer health data” under Nevada law;
- the 2023 Legislature considered and rejected privacy restrictions; or
- the April 2026 proposed regulation is effective law.

---

## 6. Source spine

### Primary Nevada authorities located

1. **NRS 678B.545 — age verification before cannabis sale**  
   <https://www.leg.state.nv.us/nrs/NRS-678B.html#NRS678BSec545>

2. **AB 342 (2023) overview, text, exhibits, votes, and history**  
   <https://www.leg.state.nv.us/App/NELIS/REL/82nd2023/Bill/10221/Overview>

3. **Assembly Committee on Judiciary minutes, March 23, 2023**  
   <https://www.leg.state.nv.us/Session/82nd2023/Minutes/Assembly/JUD/Final/549.pdf>

4. **Senate Committee on Commerce and Labor minutes, May 10, 2023**  
   <https://www.leg.state.nv.us/Session/82nd2023/Minutes/Senate/CL/Final/1027.pdf>

5. **CCB guidance index** — current host for scanner and acceptable-ID documents  
   <https://ccb.nv.gov/guidance/>

6. **CCB, Compliance Requirements for ID Scanners and Age Verification (2024)**  
   Current linked file observed at:  
   <https://ccb.nv.gov/wp-content/uploads/2024/05/Compliance-Requirements-for-ID-Scanners-and-Age-Verification-1.docx>

7. **NRS Chapter 603A — Security and Privacy of Personal Information**  
   <https://www.leg.state.nv.us/nrs/nrs-603a.html>

8. **LCB File R103-26I — initial proposed CCB regulation submitted April 29, 2026**  
   <https://www.leg.state.nv.us/Register/2026Register/R103-26I.pdf>

### Required recapture before drafting

- Download and hash the current CCB scanner guidance and acceptable-ID file.
- Transcribe each capability with page/section locator and required/optional label.
- Capture AB 342’s introduced, amended, and enrolled language.
- Verify the statute and codification history on the publication date.
- Search current NCCR/NAC, CCB bulletins, FAQ, enforcement materials, and local rules for data handling.
- Obtain privacy counsel’s applicability analysis for NRS 603A and any federal or payment/loyalty-data overlap.

---

## 7. Visual feasibility audit

### Conclusion

The candidate is **document-rich but photographically incomplete**. Public Nevada records can provide strong evidentiary images for the legal and specification history. They cannot prove deployed storage, transmission, deletion, or linkage behavior. The carousel needs permission-based operator/vendor reporting for those slides.

### Ten-slide image route

| Slide | Intended evidence image | Located? | Rights / permission state | Completion gate |
|---|---|---:|---|---|
| 1 | Nevada cannabis counter with an actual approved scanner in use; faces and ID data protected | No | Operator/photographer permission required | Nevada-specific lead, model/employee consent, no readable personal data |
| 2 | Redacted/mocked acceptable Nevada government ID showing visual zone versus machine-readable zone | Partial | Government sample or independently created redaction; confirm terms | Must not reproduce a real person’s credential or usable number |
| 3 | CCB scanner-guidance page showing barcode/QR and 400-DPI requirements | Yes as source document | Public-record capture; publication-use review | Exact current file, legible crop, source/date caption |
| 4 | CCB guidance crop showing OCR, UV/IR, multispectral, passport, or database features | Yes as source document | Public-record capture; publication-use review | Separate, non-duplicative crop tied to exact claim |
| 5 | Actual approved scanner hardware showing camera/illumination surfaces | No | Vendor press kit, licensed photo, or original reporting | Model and approval status verified; no generic unrelated scanner |
| 6 | Worker-facing result screen: pass, fail, or manual review | No | Vendor/operator permission required | Demonstrate actual result without exposing identity data |
| 7 | 2023 hearing page or legislative exhibit documenting delegated scanner choice | Yes | Nevada public-record capture | Precise page and explanatory caption |
| 8 | Retention/configuration or audit screen showing what can be stored and for how long | No | Vendor/operator permission required | Configuration must be authentic and identified; do not infer statewide practice |
| 9 | Establishment privacy notice or data-flow record for scanner data | No | Operator permission; public notice if available | Must be scanner-specific, current, and Nevada-linked |
| 10 | Original Seven-Layer Data-Flow Test over documentary/process images | Not produced | Original editorial diagram plus licensed inputs | Supplemental diagram; cannot substitute for missing proof on slides 5, 6, 8, and 9 |

### Located reusable/open-license contextual imagery

Image retrieval did not establish a complete rights-safe set of Nevada-specific photographs. Generic passport scanners, barcode imagery, and retail-counter photographs are inadequate as proof and should not be used merely to make the deck look visual. Government-document screenshots may support several slides, subject to publication and accessibility review, but the deck cannot consist of ten nearly identical document crops.

### Visual rating correction

The replacement comparison’s prior `V` rating is downgraded to **`V?`**. The visual route is feasible only if original field reporting or explicit vendor/operator permission supplies at least:

- the real Nevada scanner in context;
- the worker-facing decision interface;
- a bounded retention/configuration view; and
- a current scanner-specific privacy or data-flow artifact.

Until then, **0 of 10 slides are complete**. A slide assignment is not an image-bearing carousel.

---

## 8. Reporting and review gates

### Operator / worker reporting

- Which scanner model and software version are deployed?
- At entry, point of sale, or both?
- What does the worker see after a successful, failed, or uncertain read?
- What is the manual fallback for valid IDs the system cannot authenticate?
- Which fields or images are stored locally?
- Is a timestamp or authentication score retained?
- Is the scan/result linked to POS, loyalty, security-video, incident, or purchase records?
- Who can access it, and what is the deletion schedule?
- Does the establishment configure those choices, or does the vendor?

### Vendor / technical reporting

- Which CCB requirements map to which hardware and software modules?
- Does the product decode, image, authenticate, query, or merely calculate age?
- Which computations occur on-device, on-premises, or in a cloud service?
- Is database integration optional, and if enabled, which databases receive what?
- Are images or decoded fields stored by default?
- Can clients select field minimization and retention?
- What are false-reject and counterfeit-detection limitations?
- What logs are created, and can they be exported?

### Consumer / accessibility reporting

- What notice is visible before scanning?
- What happens when a person cannot present a machine-readable ID?
- Are passports, tribal IDs, temporary documents, damaged IDs, and non-U.S. documents handled consistently?
- Is a manual-review path available without unnecessary disclosure?
- Are screen, height, reach, language, hearing, and visual-access needs addressed?

### Specialist review

- Nevada cannabis regulatory counsel.
- Nevada privacy/data-security counsel.
- Document-authentication or identity-security specialist with no undisclosed vendor conflict.
- Retail worker or compliance lead.
- Accessibility review.

---

## 9. Canonical and LinkedIn architecture

### Beehiiv canonical article

The full article may proceed only after the reporting gates close. It should reconstruct:

1. the familiar counter interaction;
2. the statutory binary goal—valid ID and age;
3. the much richer sensing and document-analysis stack;
4. the 2023 delegation of hardware definition to the CCB;
5. the 2024 administrative specification;
6. the difference between seeing, deciding, displaying, storing, transmitting, and linking;
7. what Nevada’s public cannabis rules do and do not currently answer;
8. an actual operator/vendor data flow;
9. worker, visitor, error, and accessibility consequences; and
10. the Seven-Layer ID-Scanner Data-Flow Test.

It must include archival/public-record images, field images, citations, evidence trail, further reading, and the stable **About Tech From Here** box. Beehiiv remains the canonical destination.

### LinkedIn post

The independently written LinkedIn post should lead with the technical surprise rather than summarize the article. It must deliver a satisfying standalone explanation of how a nominal age check becomes document forensics. Its final bridge may direct readers to the Beehiiv edition for the complete data-flow reporting, archival documents, images, sources, and further reading.

There is no LinkedIn newsletter edition. The image-bearing carousel is part of the LinkedIn package, not a third article.

### Light series marker

A varied line near the close may identify the series, for example:

> Tech From Here follows the machinery inside an ordinary interaction—and asks which choices the word “verification” hides.

This does not replace the story’s technological proof.

---

## 10. Final decision

**Retain this candidate for comparison. Do not lock it into the Canonical 14 and do not draft the canonical or LinkedIn versions yet.**

It currently ranks above a generic privacy story because Nevada’s delegated technical specification is real, historically traceable, and intellectually sharp. It remains blocked for two reasons:

1. **Evidence:** the public record specifies capture/authentication capabilities but does not reveal a complete deployed data lifecycle.
2. **Images:** the public record can support documentary slides, but the decisive hardware, interface, retention, and notice images remain uncaptured and uncleared.

The candidate becomes lockable only when one representative Nevada deployment can be documented end to end without exposing personal information or facility security—and when ten genuinely distinct, rights-safe, captioned, accessible images are acquired or created under the Canonical 14 rules.

Nothing in this dossier is publication approval. Nothing has been published, scheduled, sent, or externally shared.
