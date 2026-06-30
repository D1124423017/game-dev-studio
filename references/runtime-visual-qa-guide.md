# Runtime Visual QA Guide

Use this reference when player-facing UI, art, motion, VFX, scenes, HUD, result screens, or presentation polish must be proven in a running project.

This guide is about evidence. It does not replace art direction, UI visual design, VFX design, or QA. It verifies that those decisions actually render in the target runtime.

## Contents

- Core Rule
- When to Use
- Required Evidence
- Visual QA Status Rules
- Capture Routes by Runtime
- Blocked Runtime Handling
- Acceptance Notes
- Anti-Patterns

## Core Rule

Do not accept player-facing visual work as complete only because the code changed, a static smoke test passed, or the implementation sounds correct.

If the work affects what the player sees, capture runtime visual evidence or clearly mark visual QA as `Blocked` or `Not run`.

## When to Use

Use this guide for:

- Final delivery reports.
- Client acceptance gates.
- Prototype, vertical slice, demo, release candidate, or public release checks.
- UI, HUD, menu, result screen, art, VFX, animation, or camera polish changes.
- Claims that canvas placeholders, debug UI, default fonts, or rough engine UI were replaced.
- Cross-engine proof work for Web, Godot, Unity, or Unreal projects.

Do not use it for pure concept planning, tiny text-only edits, or Quick Check advice unless the user explicitly asks for visual evidence.

## Required Evidence

A runtime visual QA record should include:

- Project or proof source:
- Commit or build identifier:
- Runtime / engine:
- Launch or capture command:
- Viewport, resolution, device, or engine window setting:
- Screenshot or visual comparison artifact:
- Console, log, or engine error status:
- Visual target or style bible reference:
- Pass / fail / blocked decision:
- Remaining risks:

If a screenshot is not possible, explain exactly which runtime, tool, permission, or environment requirement is missing.

## Visual QA Status Rules

Use explicit statuses:

- `Passed`: runtime visual evidence exists and matches the acceptance criteria closely enough.
- `Failed`: runtime evidence exists and shows visual defects, missing assets, unreadable UI, placeholder visuals, broken layout, or incorrect state.
- `Blocked`: the runtime, browser, engine, license, display server, project dependency, or capture tool is unavailable.
- `Not run`: no attempt was made, and the reason is not a blocker.

Do not mark `Visual QA` as `Passed` without a screenshot, video frame, engine capture, or visual comparison artifact.

## Capture Routes by Runtime

### Web / HTML Canvas / Web Game

Preferred evidence:

- Browser screenshot from Playwright, Chrome, Edge, or an in-app browser tool.
- Console messages and page errors.
- Main menu, gameplay, pause/result, and responsive viewport captures when relevant.

Check:

- DOM UI is not replaced by raw canvas debug text.
- Canvas gameplay render is separate from polished UI overlays when the project needs formal UI.
- Asset 404s are absent.
- Reduced motion and resize behavior are not broken.

### Godot

Preferred evidence:

- Godot project launch with the main scene loaded.
- Screenshot from the running editor, exported build, or a project-specific capture script.
- Output log showing scene load and script errors.

Check:

- `Control` UI theme, fonts, panels, and states render as intended.
- Particles, shaders, animation players, and signal-driven UI feedback appear in the correct game state.
- Autoload services, save/settings, and scene transitions do not break the captured state.

If Godot is not installed or the project cannot launch, mark runtime visual QA as `Blocked`.

### Unity

Preferred evidence:

- Unity Editor or player build opening the target scene.
- Screenshot from Play Mode, a standalone build, or a project-specific capture test.
- Console status for compile errors, missing references, shader/material errors, and UI warnings.

Check:

- Canvas / UI Toolkit screens use the approved style direction rather than default engine controls.
- Prefab references, fonts, sprites, particles, post-processing, VFX Graph, and audio hooks are present.
- Play Mode starts in the intended state and does not rely on editor-only debug UI.

If Unity Editor or the project version is unavailable, mark runtime visual QA as `Blocked`.

### Unreal

Preferred evidence:

- Unreal Editor or packaged build opening the target map.
- Screenshot from PIE, standalone game, automation capture, or a project-specific screenshot command.
- Output log for Blueprint errors, missing assets, shader/material compile issues, and input mapping problems.

Check:

- UMG widgets, materials, Niagara effects, post-processing, and camera presentation render in the intended state.
- Debug overlays are disabled unless the client approved a diagnostic build.
- Data assets, maps, and input setup load without broken references.

If Unreal Editor or the required engine version is unavailable, mark runtime visual QA as `Blocked`.

## Blocked Runtime Handling

When runtime capture is blocked:

1. Record the exact engine or browser command attempted.
2. Record whether the runtime is missing, inaccessible, unlicensed, mismatched, or failing to boot.
3. Preserve any static smoke tests separately; do not count them as visual QA.
4. Name the smallest next action that would unblock evidence.
5. Avoid upgrading the acceptance status unless the client explicitly accepts the blocked risk.

Use a dedicated environment report when possible, especially for cross-engine release readiness.

## Acceptance Notes

A client-facing acceptance note should compare runtime evidence against the approved visual target or style bible:

- What matches:
- What is weaker than target:
- What is intentionally deferred:
- What still needs client approval:
- What should be captured next:

For a studio-quality delivery, include the screenshot paths or artifact names in the final report.

## Anti-Patterns

- Treating HTTP 200, a static script check, or a successful import as visual QA.
- Calling UI complete while default fonts, debug panels, or placeholder rectangles remain.
- Passing runtime visual QA without naming the captured screen state.
- Hiding engine launch blockers behind vague "could not test" language.
- Using Web screenshots as proof that Unity, Godot, or Unreal runtime presentation works.
