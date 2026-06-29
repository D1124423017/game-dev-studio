# v1.0 Proof Report: Godot Dodge the Creeps HUD Proof Slice

## Source

- Repository: https://github.com/godotengine/godot-demo-projects
- Project path: `2d/dodge_the_creeps`
- Starting commit: `939ca55eaad4b3fa156a88289deef2e3e9479679`
- Ending commit: `8ea3cc244709760592c42baf0c852eea6cc764e8` local proof commit in the temporary sparse clone
- Date: 2026-06-29
- Environment: Windows PowerShell, Node.js, sparse temporary clone at `%TEMP%\gds-proof-godot-demo-projects`
- Patch artifact: `validation/proof-artifacts/godot-dodge-the-creeps-client-studio.patch`
- License note: upstream project folder includes an MIT license; bundled art, audio, and font have their own licenses documented in the upstream README

## Client Prompt

```txt
$game-dev-studio
I am a client commissioning this studio to turn Godot's Dodge the Creeps demo into a small portfolio proof slice. Preserve the tutorial gameplay, but add client-facing HUD polish, keyboard/gamepad focus behavior, score milestone feedback, reduced-motion handling, and a static proof checklist. Do not vendor the whole third-party project into the Skill repo.
```

## References Loaded

- `SKILL.md`
- `references/client-studio-production-workflow.md`
- `references/studio-implementation-delivery-workflow.md`
- `references/architecture-guide.md`
- `references/ui-visual-design-guide.md`
- `references/ui-motion-guide.md`
- `references/ruthless-playtester.md`

## Studio Workflow Evidence

- Brief intake: client wants a Godot proof slice that keeps the original survival loop but improves portfolio-facing HUD quality.
- Proposal: choose a HUD polish slice instead of a new mechanic, because the tutorial architecture is already clean and the smallest value is player-facing clarity.
- Scope lock: include Start button focus, game-over focus return, score milestone pulse, reduced-motion toggle, architecture checklist, and static smoke test; defer new enemies, art replacement, difficulty systems, and engine migration.
- Art direction: keep the existing abstract forest / arcade-survival visual identity and improve Control-node feedback without replacing assets.
- Architecture gate: keep `main.gd` as gameplay orchestration, `player.gd` as player movement/collision, `mob.gd` as enemy behavior, and `hud.gd` as UI state, focus, message motion, and score feedback.
- Task breakdown: patch only `hud.gd` and add `proof/portfolio_acceptance_checklist.md` plus `proof/static_smoke.mjs`.
- Implementation delivery: patch artifact applied to a sparse temporary clone and committed locally as `8ea3cc244709760592c42baf0c852eea6cc764e8`.
- QA / playtest: static smoke checks passed; Godot runtime launch and screenshot capture were blocked because no Godot executable was available in this environment.
- Acceptance report: accepted as a second cross-engine proof of the studio workflow, with runtime visual acceptance still blocked.

## Implementation Evidence

- Files inspected: `README.md`, `LICENSE`, `project.godot`, `main.gd`, `hud.gd`, `player.gd`, `mob.gd`, `hud.tscn`, `main.tscn`
- Files changed: `hud.gd`, `proof/portfolio_acceptance_checklist.md`, `proof/static_smoke.mjs`
- Architecture boundaries: gameplay orchestration remains in `main.gd`; movement and collision remain in `player.gd`; enemy behavior remains in `mob.gd`; HUD motion, focus, reduced-motion, and score milestone feedback are isolated in `hud.gd`.
- UI / visual status: the slice adds non-blocking HUD polish through Godot Control focus behavior, message fade-in, and score milestone pulse while preserving the original tutorial visual identity.
- Motion / VFX / audio status: UI motion is handled through Godot Tween in `hud.gd`; reduced-motion can disable the tweens; no gameplay VFX or audio behavior was changed.

## Test Evidence

| Check | Result | Evidence |
|---|---|---|
| Sparse clone | `Passed` | `git clone --filter=blob:none --sparse` and `git sparse-checkout set 2d/dodge_the_creeps` completed |
| Patch apply check | `Passed` | `git apply --check --whitespace=nowarn validation/proof-artifacts/godot-dodge-the-creeps-client-studio.patch` passed on the temporary clone |
| JavaScript syntax | `Passed` | `node --check 2d/dodge_the_creeps/proof/static_smoke.mjs` exited 0 |
| Static smoke test | `Passed` | `node 2d/dodge_the_creeps/proof/static_smoke.mjs` printed `godot dodge proof static smoke: passed` |
| Local proof commit | `Passed` | temporary clone commit `8ea3cc244709760592c42baf0c852eea6cc764e8` contains three proof files and 149 insertions |
| Godot project launch | `Blocked` | no `godot`, `godot4`, or `godot3` command was available in PATH |
| Visual QA | `Blocked` | runtime screenshot requires a Godot executable or exported build |

## Ruthless Playtester Note

- This proof improves the client-facing feel of a tutorial game, but it still does not solve the core repetition problem. A portfolio-ready version needs one explicit escalation rule, such as phase-based enemy pacing or a readable hazard variant.
- The implementation is appropriately small. Expanding this proof into a full content update would weaken its value as a focused architecture and UI quality validation.

## Client Acceptance Status

- Verdict: Accepted as a second cross-engine proof of the client-studio workflow; not accepted as final v1.0 completion.
- Remaining risks: Godot runtime launch is blocked, visual QA is blocked, the proof does not cover Unity or Unreal, and playtest evidence is static rather than interactive.
- Client decisions: provide a Godot runtime for launch/screenshot verification, or choose whether the next proof should target Unity, Unreal, or a user-owned prototype.
