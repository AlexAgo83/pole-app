## item_001_establish_shared_i18n_readiness_for_user_facing_copy - Establish shared i18n readiness for user facing copy
> From version: 0.15.3
> Schema version: 1.0
> Status: Done
> Understanding: 90%
> Confidence: 85%
> Progress: 100%
> Complexity: High
> Theme: Operator workflow and runtime integration
> Reminder: Update status/understanding/confidence/progress and linked request/task references when you edit this doc.

# Problem
Establish a source-only shared i18n contract for the existing Next.js product UI.
Prevent additional page and component copy from becoming hardcoded before multilingual work begins.
Adopt stable semantic keys without requiring an immediate second-language translation.

# Scope
- In:
  - one coherent delivery slice from the source request
- Out:
  - unrelated sibling slices that should stay in separate backlog items instead of widening this doc

# Acceptance criteria
- AC1: A valid source-only i18n v1 contract declares the current UI language and a repository-contained JSON catalog.
- AC2: Common shell copy and one representative page flow use stable semantic keys with unchanged visible text and behavior.
- AC3: Server and client components resolve translations without duplicating catalog data or adding an unnecessary abstraction layer.
- AC4: New app-owned UI copy has a documented semantic-key path and contract validation catches catalog defects.
- AC5: Adding a second locale does not require restructuring existing pages.
- AC6: The viewer exposes the source catalog and existing lint, typecheck, build, and focused tests pass.

# AC Traceability
- request-AC1 -> This backlog slice. Proof: AC1: A valid source-only i18n v1 contract declares the current UI language and a repository-contained JSON catalog.
- request-AC2 -> This backlog slice. Proof: AC2: Common shell copy and one representative page flow use stable semantic keys with unchanged visible text and behavior.
- request-AC3 -> This backlog slice. Proof: AC3: Server and client components resolve translations without duplicating catalog data or adding an unnecessary abstraction layer.
- request-AC4 -> This backlog slice. Proof: AC4: New app-owned UI copy has a documented semantic-key path and contract validation catches catalog defects.
- request-AC5 -> This backlog slice. Proof: AC5: Adding a second locale does not require restructuring existing pages.
- request-AC6 -> This backlog slice. Proof: AC6: The viewer exposes the source catalog and existing lint, typecheck, build, and focused tests pass.

# Decision framing
- Product framing: Not needed
- Product signals: (none detected)
- Product follow-up: No product brief follow-up is expected based on current signals.
- Architecture framing: Not needed
- Architecture signals: (none detected)
- Architecture follow-up: No architecture decision follow-up is expected based on current signals.

# Links
- Product brief(s): (none yet)
- Architecture decision(s): (none yet)
- Request: `req_000_establish_shared_i18n_readiness_for_user_facing_copy`
- Primary task(s): `task_001_establish_shared_i18n_readiness_for_user_facing_copy`

# AI Context
- Summary: Establish shared i18n readiness for user facing copy
- Keywords: backlog-groom, request, establish shared i18n readiness for user facing copy, bounded slice
- Use when: Use when implementing or reviewing the delivery slice for Establish shared i18n readiness for user facing copy.
- Skip when: Skip when the change is unrelated to this delivery slice or its linked request.

# Priority
- Priority: Medium
- Rationale: Default until groomed.

# Notes
- Hybrid rationale: Derived from request `req_000_establish_shared_i18n_readiness_for_user_facing_copy` and kept bounded to one coherent delivery slice.
- Source file: `logics/request/req_000_establish_shared_i18n_readiness_for_user_facing_copy.md`.
- Generated locally by logics-manager.
- Task `task_001_establish_shared_i18n_readiness_for_user_facing_copy` was finished via `logics-manager flow finish task` on 2026-07-13.

# Tasks
- `task_001_establish_shared_i18n_readiness_for_user_facing_copy`
