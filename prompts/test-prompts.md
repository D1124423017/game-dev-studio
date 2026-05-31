# Game Dev Studio Test Prompts

Use these prompts to check whether `$game-dev-studio` behaves like a full game development team instead of a narrow coding helper.

## 1. Start a New Game

### Prompt

```txt
$game-dev-studio
I want to make a 2D side-scrolling action game, but I only have two weeks. Do not write code yet. Help me clarify the direction first.
```

### Test Purpose

Verify that the skill handles vague game ideas through producer, design, MVP, technical, visual, audio, QA, and playtesting perspectives before implementation.

### Expected Behavior

The answer should propose multiple directions, recommend an MVP, identify risky scope, suggest platform and architecture choices, and include ruthless playtester concerns.

### Failure Meaning

If the answer jumps straight into code, the new-game workflow and "do not code first" rule need stronger wording.

## 2. Analyze an Existing Game

### Prompt

```txt
$game-dev-studio
My HTML Canvas game has all gameplay, rendering, input, UI, audio, and save logic in main.js. Review the architecture and propose a safe refactor plan before changing code.
```

### Test Purpose

Verify architecture review, giant single-file detection, risk analysis, and safe refactor sequencing.

### Expected Behavior

The answer should list current responsibilities, high-risk areas, low-risk extractions, tests required, do-not-touch areas, and a staged refactor plan.

### Failure Meaning

If the answer suggests a broad rewrite or mixes refactor with new features, the architecture guide needs stronger safe-refactor rules.

## 3. Add UI / Visual Features

### Prompt

```txt
$game-dev-studio
I want to add a main menu, character portrait, skill icons, hit effects, and a victory screen. Prepare the visual plan and asset requirements.
```

### Test Purpose

Verify that player-visible tasks trigger image generation or a complete image-generation brief.

### Expected Behavior

The answer should include asset names, paths, sizes, formats, style direction, prompts, integration checklist, and placeholder vs formal asset status.

### Failure Meaning

If the answer only gives vague art direction, the visual asset policy needs stronger enforcement.

## 4. Break Down a Codex Development Task

### Prompt

```txt
$game-dev-studio
Turn this feature into a Codex task: add save/load and level select to a Godot prototype.
```

### Test Purpose

Verify structured task breakdown with architecture, scope boundaries, tests, and acceptance criteria.

### Expected Behavior

The answer should include task objective, context to inspect, allowed scope, do-not-change scope, data flow, save format, UI needs, tests required, and final report format.

### Failure Meaning

If the answer is only a feature list, output templates need more task execution structure.

## 5. Ruthless Playtester Check

### Prompt

```txt
$game-dev-studio
Act as a ruthless playtester for this prototype: the player walks to an enemy, presses Space to attack, then moves to the next room after the enemy dies.
```

### Test Purpose

Verify that the skill gives direct, specific, player-centered critique with actionable improvements.

### Expected Behavior

The answer should score fun, clarity, juice, pacing, readability, replay motivation, and list must-fix / should-improve / optional improvements.

### Failure Meaning

If the answer is polite but vague, the ruthless playtester guide needs stronger examples and scoring rules.
