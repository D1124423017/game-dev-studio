# Game Dev Studio v0.5.0 Prompt Test Results

## Test Run

- Date: 2026-06-15
- Skill source: v0.5.0 candidate worktree
- Prompt source: `prompts/test-prompts.md`
- Runner: Codex Desktop, prompts evaluated one at a time against the current Skill routing
- Result scale: `Passed`, `Failed`, `Not run`, `Blocked`

The local Codex CLI executable could not be launched because Windows denied execution from the packaged WindowsApps path. These results are therefore in-session forward tests, not independent-process or multi-model consistency tests. The observed response behavior and reference routing were recorded, but token counts and cross-run variance were not measured.

## Test 1: Start a New Game

- Status: `Passed`
- Selected mode: Full Studio Audit
- References used: `references/workflow.md`, then architecture and short template guidance as needed
- Observed output evidence:
  - Proposed easiest, distinctive, commercial, and experimental directions.
  - Recommended a two-week MVP instead of starting implementation.
  - Covered core loop, technical boundary, minimum screens, asset direction, audio feedback, QA, and scope risk.
  - Included a short ruthless playtester warning about weak differentiation.
- Failure check: The response did not jump directly into code.

## Test 2: Analyze an Existing Game

- Status: `Passed`
- Selected mode: Focused Review
- References used: `references/architecture-guide.md`
- Observed output evidence:
  - Identified gameplay, render, input, UI, audio, save, and bootstrap responsibilities mixed in `main.js`.
  - Recommended extracting constants and pure helpers before input, audio, UI, save, and gameplay core.
  - Required smoke checks after each extraction and prohibited mixing refactor with feature work.
  - Named save, lifecycle, win/loss, and loop timing as high-risk areas.
- Failure check: The response proposed staged extraction, not a rewrite.

## Test 3: Add UI / Visual Features

- Status: `Passed`
- Selected mode: Focused Review
- References used: `references/visual-asset-policy.md`, with UI visual and VFX references only for relevant assets
- Observed output evidence:
  - Listed menu background, portrait, skill icons, hit-effect frames, victory screen, and UI frame assets.
  - Specified paths, formats, dimensions, transparency, naming, style direction, image-generation prompts, avoid lists, and integration checks.
  - Distinguished production assets from placeholders.
- Failure check: The response provided usable asset specifications instead of vague art direction.

## Test 4: Break Down a Codex Development Task

- Status: `Passed`
- Selected mode: Focused Review
- References used: `references/template-index.md`, then the formal Codex task template
- Observed output evidence:
  - Defined objective, files to inspect, allowed scope, excluded scope, save schema, level-select flow, architecture boundaries, tests, and acceptance criteria.
  - Kept Godot Resources or focused save services separate from scene UI.
  - Required migration behavior and corrupt-save handling.
- Failure check: The response was an executable task brief, not a feature list.

## Test 5: Ruthless Playtester Check

- Status: `Passed`
- Selected mode: Focused Review
- References used: `references/ruthless-playtester.md`
- Observed output evidence:
  - Identified repetitive input, absent tension, weak enemy response, unclear progression, and room-to-room pacing as the main problems.
  - Separated must-fix, should-improve, and optional suggestions.
  - Attached a player-experience reason and actionable change to each criticism.
- Failure check: The critique was direct without attacking the developer.

## Test 6: UI Motion / Game Feel Test

- Status: `Passed`
- Selected mode: Focused Review
- References used: `references/ui-motion-guide.md`
- Observed output evidence:
  - Prioritized button press, reward, error, HUD value, and result feedback.
  - Routed simple states to CSS, sequences to GSAP, React component patterns only when React already exists, and engine UI to native animation.
  - Identified input blocking, over-animation, readability, performance, and reduced-motion risks.
- Failure check: The response did not treat UI as static-only and did not prescribe one library universally.

## Test 7: Game UI Visual Design Test

- Status: `Passed`
- Selected mode: Focused Review
- References used: `references/ui-visual-design-guide.md`
- Observed output evidence:
  - Treated plain canvas rectangles and default text as placeholders.
  - Recommended Canvas for gameplay and DOM/React or engine-native UI for complex responsive surfaces when appropriate.
  - Defined typography, panel language, icon style, component states, hierarchy, responsive behavior, and motion.
- Failure check: The response did not reject Canvas categorically or accept debug UI as final quality.

## Test 8: Gameplay VFX / Technical VFX Test

- Status: `Passed`
- Selected mode: Focused Review
- References used: `references/game-vfx-guide.md`
- Observed output evidence:
  - Separated must-have feedback, should-have game feel, and optional spectacle.
  - Routed effects across sprite or flipbook, particles, shader or material, post-processing, camera impulse, UI FX, and engine-native systems.
  - Kept damage, score, progression, and win/loss rules in gameplay core.
  - Covered pooling, overdraw, worst-case spawn count, reduced motion, reduced shake, and hazard readability.
- Failure check: The response did not reduce VFX to canvas shapes.

## Test 9: Token Efficiency / Quick Check

- Status: `Passed`
- Selected mode: Quick Check
- References used: none
- Observed output evidence:
  - Returned exactly three pause-menu recommendations.
  - Focused on hierarchy, interaction states, and transition feedback.
  - Did not produce producer, architecture, audio, QA, or full-team sections.
- Failure check: The response stayed narrow and did not load a formal template.

## Test 10: Roadmap Strategy Audit

- Status: `Passed`
- Selected mode: Roadmap Strategy Audit
- References used: `references/roadmap-strategy-audit.md`; other references only when repository evidence required them
- Observed output evidence:
  - Defined the final goal and explicit non-goals.
  - Assessed maturity from repository structure, releases, examples, tests, and validation evidence.
  - Chose validation and stabilization over continued feature expansion.
  - Produced bounded v0.5.0, v0.6.0, and v1.0.0 outcomes with release gates.
  - Listed direct risks, deferred directions, and seven actions for the next 30 days.
- Failure check: The response did not become a full-team game audit or an unlimited feature wishlist.

## Summary

| Result | Count |
|---|---:|
| Passed | 10 |
| Failed | 0 |
| Not run | 0 |
| Blocked | 0 |

## Residual Validation Risk

- Independent-process consistency remains unverified.
- Exact token usage remains unmeasured.
- Different model versions may route ambiguous prompts differently.
- The three repository cases are source-inspection exercises; their engine builds and runtime playtests were explicitly not run.

These risks belong in a future evaluation harness. They do not justify adding more core Skill features before the current modes receive broader real-project use.
