# Changelog

## Unreleased

- Captured local runtime fixture visual QA screenshot evidence and preserved existing passed visual evidence when a later environment cannot rerun browser capture.
- Added a second real-project proof report for Godot Dodge the Creeps, including a HUD polish patch artifact, static smoke test, QA status, Ruthless Playtester note, and client acceptance status.
- Added a third real-project proof report for a Unity 2D prototype, including a title-menu UI motion patch artifact, static smoke test, QA status, Ruthless Playtester note, and client acceptance status.
- Added a fourth real-project proof report for an Unreal Paper2D sample, including a pixel-perfect viewport policy patch artifact, static smoke test, QA status, Ruthless Playtester note, and client acceptance status.
- Added a Runtime Visual QA Gate that records the external Web screenshot proof, Playwright visual QA report, and remaining non-Web engine runtime capture blockers.
- Added a Runtime Visual QA Guide plus a zero-dependency engine runtime environment checker for Godot, Unity, and Unreal visual QA readiness.
- Recorded Unity and Unreal runtime availability separately from project-specific screenshot acceptance so engine detection is not mistaken for passed visual QA.

## v0.9.0 - 2026-06-29

- Added a v1.0 acceptance proof protocol so final release readiness requires real client-studio delivery evidence, not only documentation and prompt coverage.
- Added a proof package validator for future `validation/proof-*.md` reports.
- Added a v0.9 real-project proof plan and `--require` validation mode for release gating.
- Added a completion-audit test prompt for proving the Skill should not claim v1.0 readiness without external implementation, QA, visual evidence, and client acceptance proof.
- Added the first external real-project proof report using `end3r/Gamedev-Canvas-workshop`, including a patch artifact, local proof commit, syntax checks, smoke test, QA notes, Ruthless Playtester note, and client acceptance status.

## v0.8.0 - 2026-06-29

- Added Studio Implementation Delivery Workflow for scoped implementation, repository intake, production slice planning, QA evidence, playtest notes, and client-facing delivery reports.
- Strengthened implementation guardrails so approved scope, non-goals, architecture boundaries, visual target / style bible status, tests, risks, and client decisions remain visible during file edits.
- Added short and formal templates for implementation delivery plans and implementation delivery reports.
- Added a prompt test and recorded validation result for end-to-end client studio implementation delivery.
- Added final-goal coverage audit and client-studio end-to-end trace to separate documented coverage from missing runtime proof.
- Added a local web first-playable runtime fixture with modular architecture, DOM/CSS game UI, Canvas gameplay rendering, smoke test, QA evidence, Ruthless Playtester note, and client acceptance status.
- Added visual QA script for the runtime fixture; it records `Passed` when Playwright/browser runtime is available and `Blocked` otherwise.

## v0.7.0 - 2026-06-29

- Added Studio Art Direction Pipeline for selected visual targets, style bibles, UI design systems, Product Design plugin coordination, and design QA gates.
- Added Production Milestone Gates for concept, prototype, vertical slice, alpha, beta, release candidate, public release, and client acceptance checks.
- Strengthened client-ready UI and art rules so written ideas alone are not treated as enough for production visual implementation.
- Added short and formal templates for visual target selection, style bibles, game UI design systems, milestone gates, change requests, and design QA reports.
- Added test prompts and validation coverage for studio art direction and production milestone gates.

## v0.6.0 - 2026-06-29

- Added Client Studio Production Workflow for client briefs, stakeholder requests, commissioned game work, and concept-to-implementation planning.
- Added a lazy-loaded client/studio production reference.
- Added scope lock, formal art direction gate, production architecture gate, production task breakdown, QA, and client acceptance reporting guidance.
- Strengthened formal game art, UI visual design, gameplay VFX, and architecture quality gates.
- Added short and formal templates for client briefs, studio proposals, scope locks, art direction packages, technical architecture packages, production task breakdowns, and client acceptance reports.
- Added a client/studio production test prompt and recorded v0.6.0 validation result.
- Updated validation coverage for the new workflow and v0.6.0 version fields.

## v0.5.0 - 2026-06-15

- Added Roadmap Strategy Audit for maturity, next-phase, version, and release decisions.
- Added a lazy-loaded roadmap strategy reference and test prompt.
- Added evidence-based case studies for Phaser, Godot, and Unity projects.
- Executed and recorded ten prompt tests with explicit validation limitations.
- Added a zero-dependency Node.js validation tool and GitHub Actions workflow.
- Added checks for frontmatter, reference routing, versions, bilingual links, deprecated naming, multiline files, case studies, prompt results, and generated `.skill` packages.
- Corrected early changelog dates and restored the missing `v0.1.1` entry.

## v0.4.1 - 2026-06-03

- Polished README structure and installation guidance.
- Added `.agents/skills` installation examples.
- Updated GitHub issue and pull request templates for review modes, lazy loading, and VFX guidance.
- Normalized public Markdown and YAML formatting.
- Updated metadata version for public documentation polish.

## v0.4.0 - 2026-06-03

- Added Quick Check, Focused Review, and Full Studio Audit modes.
- Reduced default SKILL.md context load by moving detailed guidance behind lazy references.
- Added lightweight template index for short outputs.
- Improved reference loading rules to avoid reading all references for routine tasks.
- Updated metadata for token-conscious usage.

## v0.3.0 - 2026-06-03

- Added Gameplay VFX / Technical VFX guidance.
- Added runtime routing for sprite flipbooks, particles, shaders, post-processing, camera impulse, and UI FX.
- Added Unity VFX Graph, Unreal Niagara, Godot particles, and Web Game VFX guidance.
- Added Gameplay VFX Brief, VFX Implementation Plan, and VFX QA Checklist templates.
- Added architecture boundaries for VFX, particle, shader, and camera impulse modules.
- Added test prompt for gameplay VFX review.

## v0.2.0 - 2026-06-03

- Added Game UI Visual Design guidance.
- Added Canvas UI vs DOM / React UI quality rules.
- Added Game UI Visual Design Brief template.
- Added test prompt for polished game UI review.
- Added UI Motion / Game Feel Animation guidance.
- Added UI motion review template.
- Added GSAP / React Bits-style motion analysis guidance.
- Added test prompt for UI motion and game feel review.

## v0.1.1 - 2026-05-31

- Strengthened cross-engine architecture and safe-refactor guidance.
- Expanded QA, visual asset, output template, and Ruthless Playtester coverage.
- Added public issue and pull request templates.
- Added initial public test prompts.

## v0.1.0 - 2026-05-29

- Initial public release of Game Dev Studio Skill.
- Added full game development team workflow.
- Added bilingual README.
- Added reference guides for workflow, architecture, visual assets, output templates, and playtesting.
- Added contribution guide and public metadata.
