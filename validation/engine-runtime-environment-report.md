# Engine Runtime Environment Report

- Date: 2026-06-30
- Purpose: determine whether non-Web engine runtime visual QA can run in this environment.
- Overall status: `Blocked`
- Scope: Godot, Unity, and Unreal runtime availability only. Web / HTML Canvas visual QA is tracked separately.

## Results

| Engine | Runtime Status | Evidence | Next Capture Route |
|---|---|---|---|
| Godot | `Blocked` | No PATH command, environment variable, or common install path found. | Open the project main scene and capture a running editor/export screenshot plus output log. |
| Unity | `Available` | C:\Program Files\Unity\Hub\Editor\6000.2.9f1\Editor\Unity.exe | Open the target scene in Play Mode or a build and capture screenshot plus console status. |
| Unreal | `Available` | C:\Program Files\Epic Games\UE_5.6\Engine\Binaries\Win64\UnrealEditor.exe | Open the target map in PIE or a build and capture screenshot plus output log. |

## Interpretation

- At least one non-Web engine runtime is unavailable in this environment. Static smoke tests and patch artifacts remain useful, but they must not be reported as runtime visual QA.
- If an engine is installed outside PATH or common install locations, set the matching environment variable and rerun this script.
- Do not use this environment report as a substitute for project-specific screenshots.

## Suggested Commands

```bash
node scripts/check-engine-runtime-visual-qa.mjs
node scripts/check-engine-runtime-visual-qa.mjs --write validation/engine-runtime-environment-report.md
```
