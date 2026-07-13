## req_000_establish_shared_i18n_readiness_for_user_facing_copy - Establish shared i18n readiness for user facing copy
> From version: 0.15.3
> Schema version: 1.0
> Status: Done
> Understanding: 100
> Confidence: 99
> Complexity: Medium
> Theme: Internationalization readiness
> Reminder: Update status/understanding/confidence and linked backlog/task references when you edit this doc.

# Needs
- Establish a source-only shared i18n contract for the existing Next.js product UI.
- Prevent additional page and component copy from becoming hardcoded before multilingual work begins.
- Adopt stable semantic keys without requiring an immediate second-language translation.

# Context
- User-facing text is distributed across App Router pages and reusable components such as navigation, forms, confirmations, filters, and notifications.
- The repository has no detected locale catalog or runtime translation adapter.
- The current Logics corpus is being modernized separately; this request must remain isolated from that migration.
- The shared i18n contract and lifecycle commands are delivery dependencies.

# Scope
- In:
  - inventory app-owned copy by common shell, authentication, forms, scheduling, filters, and notifications;
  - initialize a source-only contract and JSON catalog for the current UI language;
  - add the smallest server/client-compatible Next.js translation boundary needed by existing components;
  - migrate common shell and one representative page flow first, then require semantic keys for new copy;
  - define fallback, missing-key development behavior, contract validation, and viewer support;
  - leave a promotable plan for remaining page slices and a future second locale.
- Out:
  - translate the complete product or add locale-prefixed routing;
  - translate database content, user content, dates, or configurable branding values in this request;
  - redesign pages or replace the current component architecture;
  - modify the separate Logics migration or unrelated pending worktree changes.

# Acceptance criteria
- AC1: A valid source-only i18n v1 contract declares the current UI language and a repository-contained JSON catalog.
- AC2: Common shell copy and one representative page flow use stable semantic keys with unchanged visible text and behavior.
- AC3: Server and client components resolve translations without duplicating catalog data or adding an unnecessary abstraction layer.
- AC4: New app-owned UI copy has a documented semantic-key path and contract validation catches catalog defects.
- AC5: Adding a second locale does not require restructuring existing pages.
- AC6: The viewer exposes the source catalog and existing lint, typecheck, build, and focused tests pass.

# Definition of Ready (DoR)
- [x] Problem statement is explicit and user impact is clear.
- [x] Scope boundaries (in/out) are explicit.
- [x] Acceptance criteria are testable.
- [x] Dependencies and known risks are listed.

# Dependencies and risks
- Depends on the shared i18n v1 schema and lifecycle commands.
- Next.js server/client boundaries require a deliberately small adapter; introducing locale routing before it is needed would expand scope.
- Existing uncommitted Logics migration files are not part of this request.

# Companion docs
- Product brief(s): (none yet)
- Architecture decision(s): (none yet)

# References
- `app/layout.tsx`
- `app/app-layout.tsx`
- `app/login/page.tsx`
- `components/SessionNavBar.tsx`
- `components/PresetCreateForm.tsx`
- `components/FilterPanel.tsx`
- `package.json`

# AI Context
- Summary: Introduce a source-only semantic catalog and Next.js translation boundary before further UI growth.
- Keywords: i18n-readiness, source-only, semantic-keys, nextjs
- Use when: Planning initial contract adoption independently of the existing Logics migration.
- Skip when: Translating dynamic product data or changing current pending worktree files.

# Backlog
- none
- `item_001_establish_shared_i18n_readiness_for_user_facing_copy`
