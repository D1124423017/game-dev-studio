# v1.0 Proof Report: Unity 2D Prototype Title Menu Proof Slice

## Source

- Repository: https://github.com/practical-works/unity2d-prototype
- Starting commit: `aa630e140fb464287307746a73f9d2af6e7f9150`
- Ending commit: `88505c7d62339922be7d8af7a2d6b5ac7adc9f9b` local proof commit in the temporary clone
- Date: 2026-06-29
- Environment: Windows PowerShell, Node.js, temporary clone at `%TEMP%\gds-proof-unity2d-prototype`
- Patch artifact: `validation/proof-artifacts/unity2d-prototype-client-studio.patch`
- License note: upstream repository includes an MIT license

## Client Prompt

```txt
$game-dev-studio
I am a client commissioning this studio to turn this Unity 2D platformer prototype into a small portfolio proof slice. Preserve the learning-sample gameplay, but improve the title screen's player-facing prompt feedback, reduced-motion behavior, and static proof checklist. Do not vendor the whole third-party project into the Skill repo.
```

## References Loaded

- `SKILL.md`
- `references/client-studio-production-workflow.md`
- `references/studio-implementation-delivery-workflow.md`
- `references/architecture-guide.md`
- `references/ui-visual-design-guide.md`
- `references/ruthless-playtester.md`

## Studio Workflow Evidence

- Brief intake: client wants a Unity proof slice that preserves the platformer sample while improving a visible title-screen UI moment.
- Proposal: choose title prompt polish instead of adding gameplay, because the README identifies UI as unfinished and the project already has platformer, combat, audio, and scene systems.
- Scope lock: include TextMeshPro prompt pulse, reduced-motion toggle, middle-mouse input guard, architecture checklist, and static smoke test; defer HUD, settings menu, new art, prefab rewiring, and scene redesign.
- Art direction: keep the existing pixel-platformer / learning-prototype identity and make the title prompt feel intentional without changing the art set.
- Architecture gate: keep `TitleMenu.cs` responsible for title UI, prompt motion, start input, and title audio transition; keep `GameManager.cs`, `Actor.cs`, `Platformer2DController.cs`, and `Collectable.cs` out of title UI motion.
- Task breakdown: patch only `Assets/Scripts/TitleMenu.cs` and add `Proof/client_studio_acceptance.md` plus `Proof/static_smoke.mjs`.
- Implementation delivery: patch artifact applied to a temporary clone and committed locally as `88505c7d62339922be7d8af7a2d6b5ac7adc9f9b`.
- QA / playtest: static smoke checks passed; Unity runtime availability was confirmed, but editor compile, Play Mode, and screenshot capture remain blocked by project/editor version mismatch risk and lack of a clean capture path.
- Acceptance report: accepted as a third cross-engine proof of the studio workflow; runtime Unity acceptance remains blocked.

## Implementation Evidence

- Files inspected: `README.md`, `LICENSE`, `Assets/Scripts/TitleMenu.cs`, `Assets/Scripts/Managers/GameManager.cs`, `Assets/Scripts/Actor.cs`, `Assets/Scripts/Collectable.cs`, `Assets/Scripts/Platformer/Platformer2DController.cs`, `Assets/Scripts/Effects/SpriteFader.cs`, `Assets/Scenes/TitleScreen.unity`, `Assets/Scenes/SampleLevel.unity`
- Files changed: `Assets/Scripts/TitleMenu.cs`, `Proof/client_studio_acceptance.md`, `Proof/static_smoke.mjs`
- Architecture boundaries: title prompt motion and start input gating remain in `TitleMenu.cs`; global scene restart remains in `GameManager.cs`; player input translation remains in `Platformer2DController.cs`; actor health and damage remain in `Actor.cs`; collectable audio and destruction remain in `Collectable.cs`.
- UI / visual status: the slice adds intentional TextMeshPro prompt alpha motion and a reduced-motion fallback while preserving the existing title screen and pixel-platformer visual identity.
- Motion / VFX / audio status: UI motion uses TextMeshPro color alpha driven by `Time.unscaledTime`; reduced motion restores the base alpha; title audio transition behavior is preserved; no gameplay VFX or audio service behavior was changed.

## Test Evidence

| Check | Result | Evidence |
|---|---|---|
| Clone and source intake | `Passed` | repository cloned to `%TEMP%\gds-proof-unity2d-prototype` at starting commit `aa630e140fb464287307746a73f9d2af6e7f9150` |
| JavaScript syntax | `Passed` | `node --check Proof/static_smoke.mjs` exited 0 |
| Static smoke test | `Passed` | `node Proof/static_smoke.mjs` printed `unity2d prototype proof static smoke: passed` |
| Patch whitespace | `Passed` | `git diff --check` reported no errors in the temporary clone |
| Local proof commit | `Passed` | temporary clone commit `88505c7d62339922be7d8af7a2d6b5ac7adc9f9b` contains three proof files and 170 insertions |
| Unity runtime availability | `Passed` | `scripts/check-engine-runtime-visual-qa.mjs` found `C:\Program Files\Unity\Hub\Editor\6000.2.9f1\Editor\Unity.exe` |
| Unity batch editor open attempt | `Blocked` | `validation/proof-artifacts/unity2d-prototype-editor-batch-summary.md` records that Unity 6000.2.9f1 started against a Unity 2022.1.10f1 project, began package upgrade work, emitted headless licensing / entitlement messages, and did not produce a clean screenshot or Play Mode artifact |
| Unity editor compile | `Blocked` | the available editor version does not match the source project version and the batch attempt did not produce a clean compile acceptance artifact |
| Unity Play Mode | `Blocked` | no clean Play Mode run or built player was captured |
| Visual QA | `Blocked` | runtime screenshot still requires a matching Unity editor, built player, or project-specific capture script |

## Ruthless Playtester Note

- The title prompt feels less static, but the project still has no real HUD, no goal framing on the first level, and no clear "why keep playing" hook.
- The proof is correctly small. Turning this into a portfolio-ready Unity slice should next add HUD clarity and first-level objective feedback, not more menu animation.

## Client Acceptance Status

- Verdict: Accepted as a third cross-engine proof of the client-studio workflow; not accepted as final v1.0 completion.
- Remaining risks: Unity compile and Play Mode are blocked, visual QA is blocked, and the available Unity 6000 editor may mutate this Unity 2022 source project during import.
- Client decisions: provide matching Unity 2022 editor access for compile/play/screenshot verification, approve a project-specific capture script, or choose a user-owned prototype with executable runtime access.
