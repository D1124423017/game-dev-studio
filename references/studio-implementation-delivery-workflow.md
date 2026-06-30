# Studio Implementation Delivery Workflow

Use this reference after a client/studio task has enough approved or assumed scope to move from planning into implementation, QA, playtest, acceptance, and delivery reporting.

This guide keeps implementation from collapsing into "just write code." It preserves the studio gates while Codex edits files.

## Contents

- Core Rule
- When to Use
- Implementation Preconditions
- Repository Intake
- Production Slice Plan
- Implementation Loop
- Player-Facing Quality Checks
- Cross-Engine Verification
- Runtime Visual QA
- QA / Playtest / Acceptance
- Delivery Report
- Anti-Patterns

## Core Rule

Implementation starts only after the requested work has enough scope, art direction, architecture boundary, and acceptance criteria to edit safely.

If those are missing, do not silently invent a full production direction. State the missing gate and either ask the client for a decision or proceed only as a clearly labeled prototype assumption.

## When to Use

Use this guide for:

- Client-approved implementation tasks.
- Requests that say build, implement, make it playable, finish this feature, create the prototype, or deliver the vertical slice.
- Existing repo work after client brief, scope lock, art direction, and architecture gates.
- Final delivery, QA, playtest, or acceptance reports after implementation.

Do not use it for pure planning, tiny typo fixes, or Quick Check advice.

## Implementation Preconditions

Before editing, confirm:

- Client goal:
- Approved or assumed scope:
- Explicit non-goals:
- Acceptance criteria:
- Target engine / stack:
- Existing repo or greenfield:
- Architecture boundary:
- Visual target / style bible status:
- UI motion / VFX / audio requirements:
- QA or smoke test route:
- Client decisions still open:

If the user explicitly asks for implementation but gates are incomplete, use the smallest safe assumption set and name it in the final report.

## Repository Intake

For existing projects, inspect before editing:

- Entry point:
- Scene / state flow:
- Main gameplay loop:
- Input handling:
- Render / presentation layer:
- UI layer:
- UI visual styling:
- UI motion / animation:
- Gameplay VFX:
- Audio:
- Data / config:
- Save / settings:
- Asset loading:
- Tests or smoke checks:
- Build / run scripts:

Do not assume a file is safe because its name sounds relevant. Read enough current structure to preserve conventions and avoid duplicating systems.

## Production Slice Plan

Turn approved scope into a bounded production slice:

- Slice objective:
- Files to inspect first:
- Files likely to edit:
- Files not to touch:
- New modules needed:
- Data/config changes:
- Asset changes:
- UI/visual changes:
- Motion/VFX/audio changes:
- Tests to run:
- Manual verification:
- Rollback risk:

Prefer small integrated slices over broad rewrites. One slice should leave the project runnable.

## Implementation Loop

Use this loop while editing:

1. Inspect current structure and tests.
2. Confirm the smallest useful slice.
3. Add or update modules at the right responsibility boundary.
4. Keep gameplay rules, UI, render, VFX, audio, save, data, and debug code separate.
5. Integrate player-facing work against the visual target or style bible.
6. Add or update tests, smoke checks, or manual verification notes.
7. Run available checks.
8. Fix regressions caused by the slice.
9. Report evidence, risks, and remaining client decisions.

Do not mix large refactors with new production features unless the refactor is the approved task.

## Player-Facing Quality Checks

Before calling implementation complete, check:

- UI is not default browser / engine styling unless intentionally approved.
- Canvas rectangles, debug overlays, and placeholder art are labeled or replaced.
- Typography, palette, spacing, states, icons, and panels follow the visual target or style bible.
- UI motion supports state or feedback and does not block input.
- Gameplay VFX communicates source, target, timing, and gameplay meaning.
- Audio feedback supports UI, action, reward, warning, success, or failure events.
- Reduced motion / reduced shake behavior exists when relevant.
- Text does not overflow common viewports or engine screen sizes.
- Player-critical information remains readable during effects.

If a visual target exists, compare against it. If no target exists, report that the visual QA is limited.

## Cross-Engine Verification

Choose the checks that fit the project.

### Web / HTML Canvas / Web Game

- Install/build command if present:
- Lint/typecheck/test command if present:
- Local boot:
- Browser console:
- Main flow:
- Input:
- Resize / responsive UI:
- Asset 404:
- Save/settings:
- Reduced motion:

### Unity

- Script compile:
- Play Mode smoke:
- Scene references:
- Prefab references:
- UI Canvas / UI Toolkit screen:
- Particle/VFX references:
- Audio mixer/events:
- Save/settings:

### Unreal

- C++ or Blueprint compile:
- PIE smoke:
- UMG widgets:
- Niagara / material references:
- Input mapping:
- Data assets / data tables:
- Packaging risk:

### Godot

- Project launch:
- Main scene load:
- Signal connections:
- Autoload services:
- Control theme / UI states:
- Particles / shaders:
- Save/settings:

If a check cannot run, mark it `Not run` or `Blocked` with the reason.

## Runtime Visual QA

When implementation affects player-facing presentation, read `references/runtime-visual-qa-guide.md` before claiming final acceptance.

Minimum evidence:

- Runtime or engine used:
- Screenshot / capture path:
- Captured screen state:
- Console, browser, or engine error status:
- Visual target / style bible comparison:
- `Passed`, `Failed`, `Not run`, or `Blocked` decision:

Do not count build success, static smoke tests, or engine availability as visual QA. Engine availability only proves that a capture may be possible; the project still needs a screenshot, video frame, or equivalent visual comparison artifact.

## QA / Playtest / Acceptance

After implementation, compare against acceptance criteria:

- Boot:
- Main player flow:
- Core gameplay behavior:
- UI flow:
- Visual target / style bible alignment:
- UI motion:
- Gameplay VFX:
- Audio:
- Save/settings:
- Error / empty / disabled states:
- Restart / retry:
- Performance risk:
- Accessibility / reduced motion / reduced shake:
- Ruthless Playtester note:

Use `Passed`, `Failed`, `Not run`, or `Blocked`.

## Delivery Report

A delivery report should include:

- Delivered slice:
- Scope status:
- Modified files:
- Added files:
- Deleted files:
- Architecture boundaries preserved:
- Visual target / style bible status:
- UI/UX changes:
- UI visual design changes:
- UI motion changes:
- Gameplay VFX changes:
- Audio changes:
- Tests run:
- Test results:
- Manual verification:
- Known risks:
- Remaining work:
- Ruthless Playtester note:
- Client decisions still needed:

Evidence matters more than confidence. Do not imply that unrun tests passed.

## Anti-Patterns

- Starting implementation from a vague brief.
- Editing before reading current structure.
- Turning one feature into a rewrite.
- Adding giant files that own multiple systems.
- Treating placeholder art or debug UI as finished client delivery.
- Reporting "done" without test or manual verification evidence.
- Hiding scope changes inside implementation.
- Letting animation, VFX, or audio own gameplay outcomes.
