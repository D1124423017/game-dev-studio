# Runtime Visual QA Gate

## Purpose

This gate defines the remaining runtime visual evidence required before Game Dev Studio can be treated as `v1.0.0` ready.

The Skill already has external proof reports for Web / HTML Canvas, Godot, Unity, and Unreal. The remaining gap is not more documentation about supported engines. The Web proof now has real runtime screenshots; the remaining gap is engine-level runtime visual capture for Godot, Unity, Unreal, or a user-owned prototype when those runtimes are available.

## Current Status

- Local runtime fixture visual QA: `Passed`
- External Web proof runtime visual QA: `Passed`
- External Godot proof runtime visual QA: `Blocked`
- External Unity proof runtime visual QA: `Blocked`
- External Unreal proof runtime visual QA: `Blocked`
- Engine runtime environment check: `Blocked`

The local fixture screenshot is useful smoke evidence, and the external Web proof now closes the minimum external screenshot requirement. Non-Web engine captures remain useful follow-up proof because the Skill claims cross-engine applicability.

## 2026-06-30 External Web Proof Retry

Target proof:

- Repository: `https://github.com/end3r/Gamedev-Canvas-workshop`
- Local proof commit: `5164ee67c7a85898bb7138502d9b9cec70061100`
- Page: `proof/studio-slice.html`

Results:

| Check | Result | Evidence |
|---|---|---|
| Static smoke | `Passed` | `node proof/tests/smoke.mjs` printed `client-studio breakout proof smoke: passed` |
| Local HTTP boot | `Passed` | temporary Node static server returned HTTP 200 for `proof/studio-slice.html` |
| Playwright install | `Blocked` | temporary npm install was rejected by safety review because it would download an unpinned package |
| Chrome headless screenshot | `Blocked` | Chrome reached the page but failed with GPU process fatal errors and no PNG output |
| Edge headless screenshot | `Blocked` | Edge exited 0 but wrote no screenshot file for the proof page or a minimal test page |
| Chrome DevTools Protocol screenshot | `Blocked` | Chrome remote debugging endpoint did not become reachable in this environment |
| Existing Node REPL Playwright capture | `Passed` | no package install was needed; captured main menu and play-state screenshots with HTTP 200, console messages `none`, and page errors `none` |

Artifacts:

- Visual QA report: `validation/proof-artifacts/gamedev-canvas-workshop-visual-qa-report.md`
- Main menu screenshot: `validation/proof-artifacts/gamedev-canvas-workshop-studio-slice-main-menu.png`
- Play state screenshot: `validation/proof-artifacts/gamedev-canvas-workshop-studio-slice-play-state.png`

## Required Evidence To Close This Gate

At least one external proof must include:

- Runnable source project and commit
- Browser or engine command used for visual capture
- Screenshot artifact committed under `validation/proof-artifacts/`
- Viewport or runtime configuration
- Console / runtime error status
- Proof report row marked `Visual QA | Passed`
- Client acceptance note that compares the screenshot against the visual target or style bible

The Web / HTML Canvas proof now satisfies this minimum external screenshot requirement. The gate remains useful as a tracker for stronger cross-engine runtime proof.

## 2026-06-30 Engine Runtime Environment Check

Environment report:

- `validation/engine-runtime-environment-report.md`

Results:

| Engine | Runtime Status | Project-Specific Visual QA Status | Evidence |
|---|---|---|---|
| Godot | `Blocked` | `Blocked` | no PATH command, environment variable, or common install path found |
| Unity | `Available` | `Blocked` | Unity `6000.2.9f1` was detected, but the proof source is Unity `2022.1.10f1`; the batch attempt summary records package upgrade risk, headless entitlement messages, and no screenshot artifact |
| Unreal | `Available` | `Blocked` | UE `5.6.1` launched against the UE `5.2` proof source and mounted Paper2D, but the unattended open attempt timed out before clean compile, PIE, or screenshot evidence |

Unity attempt summary:

- `validation/proof-artifacts/unity2d-prototype-editor-batch-summary.md`

Unreal attempt summary:

- `validation/proof-artifacts/unreal-pixelperfect2d-editor-open-summary.md`

Do not count runtime availability as visual QA. A runtime is only a prerequisite; project-specific screenshot or visual comparison evidence is still required.

## Acceptable Capture Routes

- Browser screenshot from Playwright, Chrome, Edge, or another approved browser tool
- Engine screenshot from Godot, Unity, or Unreal when the corresponding runtime is installed
- User-provided screenshot from a clean run of the proof project, if the proof report names the source, viewport, command or manual steps, and reviewer notes

## Not Acceptable

- Treating a static smoke test as visual QA
- Marking visual QA as passed without a screenshot or visual comparison artifact
- Using the local fixture screenshot as proof that an external project rendered correctly
- Counting a browser page HTTP 200 response as visual QA

## Release Decision

The original external Web screenshot blocker is closed. Do not treat that as proof that every engine runtime has been visually tested; Godot is unavailable, while Unity and Unreal still need compatible project-specific screenshot captures.
