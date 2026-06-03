![Game Dev Studio Banner](assets/game-dev-studio-banner.png)

[繁體中文](README.zh-TW.md) | English

# Game Dev Studio Skill

A universal skill that enables Codex / AI Agent to assist in game development as a "complete game development team".

**Current version:** `v0.4.1`

## What is Game Dev Studio?

Game Dev Studio is a skill for AI agents that transforms them into a full game development team. It's not just a code assistant—it's a multi-role team that helps turn vague game ideas into executable plans, technical architectures, visual solutions, and development tasks.

## Quick Start

For routine work, start with a lightweight check:

```txt
$game-dev-studio
Quick Check: Review this upgrade screen and tell me the top three UI or game-feel issues. Keep it short.
```

For broad planning, ask for a full audit:

```txt
$game-dev-studio
Full Studio Audit: I want to make a game. Please help me clarify the direction from producer, game design, programming, UI/UX, art, sound, QA, and playtesting perspectives before writing code.
```

## Features

- Multi-role collaboration: Producer, Game Designer, Programmer, UI/UX Designer, UI Motion Designer / Game Feel Animator, Gameplay VFX / Technical VFX Designer, Game Artist, Sound Consultant, QA, and Ruthless Playtester
- Supports Unity, Unreal, Godot, HTML Canvas, Web Game, 2D, 3D, and game prototypes
- Transforms vague ideas into executable game plans
- Emphasizes code architecture to avoid monolithic files
- Prioritizes image generation or visual solutions for any screen-related tasks
- Beautiful game UI guidance that treats canvas-drawn rectangles and default text as placeholders, not finished UI
- UI motion and game feel review, including HUD feedback, menu transitions, GSAP, React Bits-style patterns, engine-native UI animation, and feedback timing
- Gameplay VFX and technical effects guidance for hit sparks, particles, sprite flipbooks, shaders, post-processing, screen shake, Unity VFX Graph, Unreal Niagara, and Godot particles
- Helps route effects by runtime job instead of forcing everything into canvas drawing
- Token-conscious modes: Quick Check, Focused Review, and Full Studio Audit so routine tasks stay lightweight
- Built-in ruthless playtester that actively points out what's not fun, unclear, or could be improved

## Review Modes

- **Quick Check**: Default for routine questions. Keeps output short and avoids loading large references.
- **Focused Review**: Use for one domain such as architecture, UI, visual assets, UI motion, gameplay VFX, QA, or playtesting.
- **Full Studio Audit**: Use for new game direction, MVP planning, milestone review, public release readiness, or full project review.

The skill is designed to lazy-load references. It should not read every reference or produce a full-team report for small tasks.

## Who is this for?

- People who want to make games but don't know where to start
- Game design students
- Solo developers
- Small game teams
- Anyone using Codex / AI to assist in game development

## When to Use / When Not to Use

Use this skill for game planning, architecture review, UI/UX, visual assets, QA, playtesting, feature task breakdown, MVP planning, and player-facing game work.

Also use it when a game UI feels too static and needs button feedback, HUD value motion, menu transitions, combo feedback, reward animations, or engine-native UI animation planning.

Also use it when gameplay feedback feels weak and needs hit effects, slash trails, particles, shader effects, screen shake, projectile impacts, explosions, reward bursts, or engine-native VFX planning.

Do not use it for tiny typo fixes, simple Git commands, one-line README edits, general knowledge questions, or non-game tasks.

## Installation

Clone or download this repository into your Codex skills directory.

```bash
git clone https://github.com/D1124423017/game-dev-studio.git ~/.codex/skills/game-dev-studio
```

Some Codex / Agent environments use `.agents/skills` instead:

```bash
git clone https://github.com/D1124423017/game-dev-studio.git ~/.agents/skills/game-dev-studio
```

On Windows, use the skills folder for your environment, for example:

```powershell
git clone https://github.com/D1124423017/game-dev-studio.git "$env:USERPROFILE\.codex\skills\game-dev-studio"
```

Or:

```powershell
git clone https://github.com/D1124423017/game-dev-studio.git "$env:USERPROFILE\.agents\skills\game-dev-studio"
```

Restart Codex or reload skills after installation. Then invoke the skill with:

```txt
$game-dev-studio
```

## How to use

In Codex, type:

```txt
$game-dev-studio
I want to make a game. Please help me clarify the direction from the perspectives of producer, game designer, programmer, UI/UX designer, artist, sound, and QA.
```

Or:

```txt
$game-dev-studio
Please break down this game idea into MVP, core systems, technical architecture, art direction, and first-phase development tasks.
```

## Usage Examples

### Quick check

```txt
$game-dev-studio
Quick Check: Review this upgrade screen and tell me the top three UI or game-feel issues. Keep it short.
```

### Focused review

```txt
$game-dev-studio
Focused Review: Check this game's combat VFX and suggest must-have effects, performance risks, and reduced-shake considerations. Do not modify files yet.
```

### Full studio audit

```txt
$game-dev-studio
Full Studio Audit: Review this prototype as a full game development team and give me the top priorities for making it demo-ready.
```

### Start a new game

```txt
$game-dev-studio
I want to make a 2D action roguelite. Give me four possible directions: easiest to finish, most distinctive, most commercial, and most experimental.
```

### Review an existing game

```txt
$game-dev-studio
Review my current Godot prototype as producer, game designer, programmer, UI/UX designer, art director, sound designer, QA, and ruthless playtester.
```

### Plan visual assets

```txt
$game-dev-studio
Create a visual asset brief for the main character, enemies, HUD, skill icons, hit effects, and capsule art. Include image generation prompts.
```

### Review UI motion and game feel

```txt
$game-dev-studio
Review my web game's HUD, buttons, reward toast, combo counter, and result screen. Suggest UI motion using CSS, GSAP, React Bits-style patterns, or engine-native alternatives where appropriate.
```

```txt
$game-dev-studio
Review this game's UI and suggest where motion design could improve game feel. Consider GSAP, React Bits-style patterns, or engine-native animation depending on the tech stack. Do not modify files yet.
```

### Improve game UI visual design

```txt
$game-dev-studio
Review this web game's UI and tell me how to make it look like a polished game interface instead of canvas-drawn placeholder boxes. Consider DOM / React overlay, typography, panels, icons, component states, layout, and motion. Do not modify files yet.
```

### Review gameplay VFX and technical effects

```txt
$game-dev-studio
Review this game's combat feedback and suggest gameplay VFX improvements. Consider hit sparks, slash trails, projectile impacts, particles, sprite flipbooks, shader effects, post-processing, screen shake, Unity VFX Graph, Unreal Niagara, or Godot particles depending on the engine. Do not modify files yet.
```

### Create a safe refactor plan

```txt
$game-dev-studio
My HTML Canvas game has all logic in main.js. Review the architecture and create a safe refactor plan before changing code.
```

### Break down a Codex task

```txt
$game-dev-studio
Turn this feature idea into a Codex implementation task with architecture requirements, test requirements, and acceptance criteria.
```

### Ruthless playtest review

```txt
$game-dev-studio
Act as a ruthless playtester for this prototype. Tell me what is boring, confusing, slow, weak, or forgettable, then suggest must-fix improvements.
```

## Core philosophy

This is not just a code assistant.

It's a game development team skill designed to help AI not just write code, but assist in creating more complete, more playable, and higher-quality games.

## Repository structure

```
game-dev-studio/
├── .github/              # Issue and pull request templates
├── SKILL.md              # Core skill definition
├── README.md             # English documentation
├── README.zh-TW.md       # Traditional Chinese documentation
├── CHANGELOG.md          # Release history
├── CONTRIBUTING.md       # Contribution guide
├── LICENSE               # MIT License
├── agents/               # Skill metadata
│   └── openai.yaml
├── prompts/              # Skill validation prompts
│   └── test-prompts.md
├── references/           # Reference documents
│   ├── workflow.md
│   ├── modes.md
│   ├── template-index.md
│   ├── architecture-guide.md
│   ├── visual-asset-policy.md
│   ├── ui-visual-design-guide.md
│   ├── ui-motion-guide.md
│   ├── game-vfx-guide.md
│   ├── ruthless-playtester.md
│   └── output-templates.md
└── assets/              # Image assets
    └── game-dev-studio-banner.png
```

## Packaging as a .skill file

This repository is designed to be used as a source folder for a Codex Skill.
If your Codex environment supports `.skill` packaging, package the `game-dev-studio/` folder according to your Codex Skill tooling.

The `.skill` file itself is ignored by Git because generated packages should not be committed to the source repository.

## Release Suggestions

Current recommended public release: `v0.4.1`.

Suggested release title:
`v0.4.1 - Public documentation and template polish`

Suggested release notes:

- Polished README structure and installation guidance
- Added `.agents/skills` installation examples
- Updated GitHub issue and pull request templates for review modes, lazy loading, and VFX guidance
- Kept public documentation aligned with token-efficient Skill behavior

See [CHANGELOG.md](CHANGELOG.md) for full release history.

When publishing future releases, mention breaking changes when reference templates or invocation behavior changes, and keep README examples aligned with the latest `SKILL.md`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
