![Game Dev Studio Banner](assets/game-dev-studio-banner.png)

[繁體中文](README.zh-TW.md) | English

# Game Dev Studio Skill

A universal skill that enables Codex / AI Agent to assist in game development as a "complete game development team".

## What is Game Dev Studio?

Game Dev Studio is a skill for AI agents that transforms them into a full game development team. It's not just a code assistant—it's a multi-role team that helps turn vague game ideas into executable plans, technical architectures, visual solutions, and development tasks.

## Features

- Multi-role collaboration: Producer, Game Designer, Programmer, UI/UX Designer, Game Artist, Sound Consultant, QA, and Ruthless Playtester
- Supports Unity, Unreal, Godot, HTML Canvas, Web Game, 2D, 3D, and game prototypes
- Transforms vague ideas into executable game plans
- Emphasizes code architecture to avoid monolithic files
- Prioritizes image generation or visual solutions for any screen-related tasks
- Built-in ruthless playtester that actively points out what's not fun, unclear, or could be improved

## Who is this for?

- People who want to make games but don't know where to start
- Game design students
- Solo developers
- Small game teams
- Anyone using Codex / AI to assist in game development

## Installation

Clone or download this repository into your Codex skills directory.

```bash
git clone https://github.com/D1124423017/game-dev-studio.git ~/.codex/skills/game-dev-studio
```

On Windows, use your Codex skills folder, for example:

```powershell
git clone https://github.com/D1124423017/game-dev-studio.git "$env:USERPROFILE\.codex\skills\game-dev-studio"
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

```txt
$game-dev-studio
I want to make a 2D action roguelite. Give me four possible directions: easiest to finish, most distinctive, most commercial, and most experimental.
```

```txt
$game-dev-studio
Review my current Godot prototype as producer, game designer, programmer, UI/UX designer, art director, sound designer, QA, and ruthless playtester.
```

```txt
$game-dev-studio
Create a visual asset brief for the main character, enemies, HUD, skill icons, hit effects, and capsule art. Include image generation prompts.
```

```txt
$game-dev-studio
Turn this feature idea into a Codex implementation task with architecture requirements, test requirements, and acceptance criteria.
```

## Core philosophy

This is not just a code assistant.

It's a game development team skill designed to help AI not just write code, but assist in creating more complete, more playable, and higher-quality games.

## Repository structure

```
game-dev-studio/
├── SKILL.md              # Core skill definition
├── README.md             # English documentation
├── README.zh-TW.md       # Traditional Chinese documentation
├── LICENSE               # MIT License
├── references/           # Reference documents
│   ├── workflow.md
│   ├── architecture-guide.md
│   ├── visual-asset-policy.md
│   ├── ruthless-playtester.md
│   └── output-templates.md
└── assets/              # Image assets
    └── game-dev-studio-banner.png
```

## Release Suggestions

Recommended public release flow:

- Tag the first stable public version as `v0.1.0`.
- Include a short release note explaining the skill purpose, installation path, and supported workflows.
- Mention breaking changes when reference templates or invocation behavior changes.
- Keep README examples aligned with the latest `SKILL.md`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
