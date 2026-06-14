# Godot Dodge the Creeps Full Studio Audit

## Source

- Repository: [godotengine/godot-demo-projects](https://github.com/godotengine/godot-demo-projects)
- Project: `2d/dodge_the_creeps`
- Inspected commit: `4e29fc322925582b3b528571cc139b1990860157`
- Inspection date: 2026-06-15
- Stack: Godot, GDScript, Compatibility renderer

## Prompt

```txt
$game-dev-studio
Full Studio Audit: Review this finished tutorial-scale Godot game and propose the smallest path from tutorial demo to a polished portfolio prototype. Do not modify files.
```

## Mode and References

- Mode: Full Studio Audit
- Loaded first: `references/workflow.md`
- Loaded: `references/ui-visual-design-guide.md`
- Loaded: `references/ui-motion-guide.md`
- Loaded: `references/ruthless-playtester.md`
- Not loaded: formal output templates or engine references unrelated to Godot

## Inspected Evidence

- `README.md`
- `project.godot`
- `main.gd` and `main.tscn`
- `player.gd` and `player.tscn`
- `mob.gd` and `mob.tscn`
- `hud.gd` and `hud.tscn`
- Included art, font, music, sound, and screenshot assets

## Producer Decision

Do not expand this into a large content game. Treat it as a one-loop portfolio prototype and spend the next milestone on clarity, escalation, accessibility, and presentation.

## Findings

### Architecture

- `main.gd` coordinates score, timers, spawning, music, and game-over flow.
- Player, enemy, and HUD behavior are already separated into focused scripts and scenes.
- The current structure is appropriate for tutorial scale. Introducing a large service layer or global event bus would add more complexity than value.

### Game design

- The core loop is immediately understandable: move, avoid enemies, survive, and increase score.
- The loop lacks a visible difficulty curve, short-term decisions, and a reason to replay beyond a higher number.
- The smallest meaningful extension is controlled escalation, such as spawn-rate phases or one clearly telegraphed hazard variant.

### UI and motion

- The HUD handles start, score, ready, and game-over states, but transition quality is minimal.
- Add immediate button focus/press feedback, a clearer score hierarchy, a short non-blocking score milestone pulse, and a reduced-motion-compatible game-over transition.
- Keep Godot Control nodes, Theme resources, Tween, and AnimationPlayer separate from gameplay resolution.

### Art and audio

- The project includes coherent tutorial assets, a custom font, music, and a game-over sound.
- Portfolio polish should improve screen composition and feedback timing before replacing the entire art set.

### QA risks

- No repeatable tests or manual acceptance checklist were found in the inspected project folder.
- Important checks are restart after death, repeated start presses, resize behavior, input actions, enemy cleanup, and timer state after game over.

### Ruthless playtester

The first ten seconds are clear, but the game becomes repetitive quickly because survival changes mostly through enemy count. Better feedback will improve feel, but one readable escalation rule is needed to create tension.

## Smallest Portfolio Milestone

1. Define three survival phases with bounded spawn tuning.
2. Improve start, score milestone, damage, and game-over feedback.
3. Add keyboard/controller focus and a reduced-motion option.
4. Add a manual smoke checklist for start, death, restart, score, resize, and audio.
5. Capture one clean screenshot and one short gameplay clip after runtime verification.

## Verification

- Source and scene structure inspection: `Passed`
- Scope and player-loop review: `Passed`
- UI and motion review: `Passed`
- Godot project launch: `Not run`
- Runtime signal verification: `Not run`
- Playtest and performance profiling: `Not run`

## Skill Evidence

This case shows that Full Studio Audit does not require recommending a large architecture or feature set. The useful result is scope control: preserve the tutorial's appropriate separation, add one design escalation, polish the player-facing loop, and define explicit runtime checks.
