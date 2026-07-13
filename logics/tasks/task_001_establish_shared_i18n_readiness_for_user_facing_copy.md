## task_001_establish_shared_i18n_readiness_for_user_facing_copy - Establish shared i18n readiness for user facing copy
> From version: 0.15.3
> Schema version: 1.0
> Status: Done
> Understanding: 90%
> Confidence: 85%
> Progress: 100%
> Complexity: Medium
> Theme: Implementation delivery
> Reminder: Update status/understanding/confidence/progress and linked request/backlog references when you edit this doc.
> Owner: codex

# Definition of Done (DoD)
- [x] The backlog scope is implemented.
- [x] Acceptance criteria are covered.
- [x] Validation passes.
- [x] Meaningful waves followed ADR 009: affected docs updated and the repo left commit-ready without automatic commits.

# Backlog
- `item_001_establish_shared_i18n_readiness_for_user_facing_copy`

# Acceptance criteria
- AC1: A valid source-only i18n v1 contract declares the current UI language and a repository-contained JSON catalog.
- AC2: Common shell copy and one representative page flow use stable semantic keys with unchanged visible text and behavior.
- AC3: Server and client components resolve translations without duplicating catalog data or adding an unnecessary abstraction layer.
- AC4: New app-owned UI copy has a documented semantic-key path and contract validation catches catalog defects.
- AC5: Adding a second locale does not require restructuring existing pages.
- AC6: The viewer exposes the source catalog and existing lint, typecheck, build, and focused tests pass.

# Validation
- Shared i18n contract validation passed.
- ESLint passed with three pre-existing warnings; all 39 tests and the production Next.js build/typecheck passed.
- contract validation, lint, 39 tests, typecheck, and production build passed
- Finish workflow executed on 2026-07-13.
- Linked backlog/request close verification passed.

# Report
- Implementation complete.
- Finished on 2026-07-13.
- Linked backlog item(s): `item_001_establish_shared_i18n_readiness_for_user_facing_copy`
- Related request(s): `req_000_establish_shared_i18n_readiness_for_user_facing_copy`

# AI Context
- Summary: Implement establish shared i18n readiness for user facing copy.
- Keywords: task, implementation, backlog, runtime, python
- Use when: You need a bounded implementation task for a backlog item.
- Skip when: The work is still at the request or backlog shaping stage.

# Links
- Request: `req_000_establish_shared_i18n_readiness_for_user_facing_copy`
- Product brief(s): (none yet)
- Architecture decision(s): (none yet)

# AC Traceability
- request-AC1 -> This task. Proof: the valid source-only contract declares `i18n/fr.json`.
- request-AC2 -> This task. Proof: app shell, session navigation, and the full login flow resolve stable semantic keys.
- request-AC3 -> This task. Proof: the same small `lib/i18n.ts` adapter is imported by server and client components.
- request-AC4 -> This task. Proof: new copy follows catalog keys and the contract validator checks the catalog.
- request-AC5 -> This task. Proof: locale data is isolated from pages behind one lookup boundary.
- request-AC6 -> This task. Proof: viewer contract validation, lint, 39 tests, typecheck, and build passed.
