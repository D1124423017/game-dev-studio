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

## 6. UI Motion / Game Feel Test Prompt

### Prompt

```txt
$game-dev-studio
Please review this game's UI and identify where motion design could improve clarity, feedback, and game feel. Consider GSAP, React Bits-style patterns, or engine-native animation depending on the tech stack. Do not modify files yet.
```

### Test Purpose

驗證 Skill 是否會主動分析 UI 動效、回饋節奏、GSAP / React Bits / 引擎原生方案。

### Expected Behavior

列出 Must-have / Should-have / Optional motion。

提出 UI Motion Review。

指出哪些元素適合 GSAP / React Bits-style / CSS / Canvas / engine-native animation。

指出效能、可讀性、reduced motion 風險。

### Failure Meaning

Skill 仍只做靜態 UI 評估，沒有 motion / game feel 思維。

## 7. Game UI Visual Design Test Prompt

### Prompt

```txt
$game-dev-studio
Review this web game's UI and explain how to make it look like a polished game interface instead of canvas-drawn placeholder boxes. Consider DOM / React overlay, typography, panels, icons, component states, layout, visual hierarchy, and motion. Do not modify files yet.
```

### Test Purpose

Verify that the skill distinguishes product-quality game UI from canvas placeholder UI.

### Expected Behavior

The answer should identify whether Canvas, DOM, React, or engine-native UI is appropriate; define visual direction; specify typography, panels, icons, component states, spacing, responsive behavior, and motion; and reject debug-style rectangles as final UI.

### Failure Meaning

If the answer accepts plain canvas rectangles and default text as finished UI, the UI visual design guide and SKILL rules need stronger wording.

## 8. Gameplay VFX / Technical VFX Test Prompt

### Prompt

```txt
$game-dev-studio
Please review this game's combat and reward feedback. Identify where gameplay VFX would improve clarity, impact, and game feel. Consider sprite flipbooks, particles, shaders, post-processing, screen shake, Unity VFX Graph, Unreal Niagara, Godot particles, or Web Game render effects depending on the tech stack. Do not modify files yet.
```

### Test Purpose

Verify that the skill does not treat VFX as only canvas-drawn shapes and can route effects by runtime job, engine, performance risk, and gameplay purpose.

### Expected Behavior

The answer should list Must-have / Should-have / Optional gameplay VFX.

It should propose a Gameplay VFX Review.

It should distinguish UI FX from gameplay-space VFX.

It should identify which effects belong in sprite / flipbook, particle system, shader / material, post-processing, camera impulse, UI FX, or engine-native VFX systems.

It should call out readability, timing, color, overdraw, pooling, reduced motion, reduced shake, and worst-case spawn count risks.

### Failure Meaning

If the answer only suggests drawing shapes on canvas, only talks about static art, or puts VFX logic inside gameplay core, the VFX guide and architecture rules need stronger wording.

## 9. Token Efficiency / Quick Check Test Prompt

### Prompt

```txt
$game-dev-studio
Quick Check: This game's pause menu feels plain. Give me the top three improvements only. Do not do a full studio audit and do not modify files.
```

### Test Purpose

Verify that the skill can preserve game-development judgment while avoiding unnecessary full-team output, long templates, and broad reference loading.

### Expected Behavior

The answer should stay short.

It should focus on the pause menu only.

It should not produce producer, designer, programmer, UI/UX, art, audio, QA, and playtester sections unless needed.

It should not mention reading every reference or use a full structured template.

It may include a short ruthless playtester note if useful.

### Failure Meaning

If the answer performs a Full Studio Audit, loads unrelated domains, or produces a long report for a small question, the mode routing and default Quick Check rules need stronger wording.

## 10. Roadmap Strategy Audit Test Prompt

### Prompt

```txt
$game-dev-studio
Roadmap Strategy Audit: Review this public game-development Skill repository. Define its final goal, assess maturity from repository evidence, decide whether it should add features or enter stabilization, propose v0.5.0, v0.6.0, and v1.0.0, list what not to do now, and give five to seven actions for the next 30 days. Do not modify files.
```

### Test Purpose

Verify that the skill can make evidence-based product and release decisions without turning the result into an unlimited feature wishlist or loading every game-domain reference.

### Expected Behavior

The answer should define the final goal, separate verified evidence from assumptions, choose a primary next-phase direction, identify missing proof and direct risks, create bounded version outcomes with release gates, list deferred directions, and limit the 30-day plan to five to seven actions.

### Failure Meaning

If the answer only praises the project, repeats README features, proposes uncontrolled expansion, recommends v1.0 without validation, or performs an unrelated full-team game audit, the roadmap mode and evidence rules need stronger wording.
