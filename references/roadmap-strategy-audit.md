# Roadmap Strategy Audit Guide

Use this guide when the user asks about a project's final goal, maturity, next phase, version roadmap, release readiness, or whether development should expand or stabilize.

Do not use it for a single implementation task, minor bug, narrow UI review, or routine Git operation.

## Purpose

A Roadmap Strategy Audit should answer:

- What is the project trying to become?
- What evidence proves its current maturity?
- Should the next phase expand, stabilize, refactor, validate, polish, or release?
- What gaps block the next meaningful milestone?
- What should explicitly not be done now?

The audit is a decision tool, not a feature brainstorming session.

## Required Inputs

Inspect the available evidence before deciding:

- Current repository structure and implementation
- Existing tests and actual test results
- Examples, demos, screenshots, or playable builds
- README, changelog, metadata, tags, and releases
- Known user or playtester feedback
- Supported engines, platforms, and target audience
- Time, team, budget, and release constraints

If evidence is missing, mark it as missing. Do not replace evidence with confidence.

## Evidence Labels

Use these labels when the distinction matters:

- **Verified**: directly confirmed from code, files, commands, builds, tests, or public release state.
- **Inferred**: a reasonable conclusion from verified evidence, but not directly tested.
- **Unknown**: evidence was unavailable or the check was not run.

Documentation coverage is not proof that behavior works.

## Decision Framework

Choose one primary next-phase direction:

- **Expand**: add capabilities because the core is proven and a clear user need remains unmet.
- **Stabilize**: stop feature growth and fix consistency, reliability, documentation, or release quality.
- **Refactor**: reduce structural risk that blocks safe development.
- **Validate**: test assumptions through real projects, players, users, or repeatable evaluations.
- **Polish**: improve presentation and usability after core behavior is proven.
- **Release**: package and publish because scope, quality gates, and evidence are sufficient.

Use a secondary direction only when it supports the primary direction.

## Priority Rules

Rank roadmap items by:

1. Missing proof that blocks trust
2. User or player value
3. Risk reduction
4. Release readiness
5. Maintenance cost
6. Optional differentiation

Do not rank work higher because it sounds impressive or adds another technology name.

## Version Planning

Each planned version should have:

- One primary outcome
- Three to six bounded deliverables
- Explicit release gates
- Known exclusions

Avoid version inflation:

- Patch: compatible fixes, documentation corrections, validation maintenance
- Minor: new bounded capability or workflow with evidence
- Major: stable behavior, documented compatibility, migration expectations, and proven public use

## Output Format

### Final Goal

Define what the project should become and what it should not become.

### Current Maturity

Score only relevant areas. Support important scores with repository or runtime evidence.

### Next-Phase Decision

Choose expand, stabilize, refactor, validate, polish, or release. Explain why.

### Largest Gaps and Risks

List direct blockers, weak evidence, maintenance risks, and scope risks.

### Version Roadmap

For each version, state the outcome, bounded deliverables, release gates, and exclusions.

### Do Not Do Now

Name attractive but low-value or high-risk directions that should be deferred.

### Next 30 Days

Limit the list to five to seven concrete actions with observable completion evidence.

## Risk Checks

- Feature growth is replacing validation.
- One showcase project is distorting a general-purpose product.
- More references are being added without routing or testing.
- A major release is proposed without real usage evidence.
- Test prompts describe expected behavior but have never been executed.
- Token-efficiency claims are not measured.
- Generated examples hide missing runtime verification.
- Release metadata, tags, changelog, and documentation disagree.

## Reference Loading Boundary

This guide is normally sufficient for strategy structure.

Load other references only when the roadmap decision depends on their domain:

- Architecture risk: `references/architecture-guide.md`
- Player-facing UI quality: `references/ui-visual-design-guide.md`
- UI motion: `references/ui-motion-guide.md`
- Gameplay VFX: `references/game-vfx-guide.md`
- Player experience: `references/ruthless-playtester.md`
- Full project phase planning: `references/workflow.md`

Do not load `references/output-templates.md` unless the user requests a formal, expanded deliverable.
