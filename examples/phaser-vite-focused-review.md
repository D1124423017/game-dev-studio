# Phaser Vite Template Focused Review

## Source

- Repository: [phaserjs/template-vite](https://github.com/phaserjs/template-vite)
- Inspected commit: `bf90a1f4940d74e0f60f9c585024c744a21f86d4`
- Inspection date: 2026-06-15
- Stack: Phaser `4.0.0`, Vite, JavaScript

## Prompt

```txt
$game-dev-studio
Focused Review: Inspect this Phaser Vite starter before it grows into a small production game. Review architecture and player-facing UI readiness. Do not modify files.
```

## Mode and References

- Mode: Focused Review
- Loaded: `references/architecture-guide.md`
- Loaded: `references/ui-visual-design-guide.md`
- Not loaded: unrelated Unity, Godot, VFX, audio, and full output templates

## Inspected Evidence

- `package.json`
- `src/game/main.js`
- `src/game/scenes/Boot.js`
- `src/game/scenes/Preloader.js`
- `src/game/scenes/MainMenu.js`
- `src/game/scenes/Game.js`
- `src/game/scenes/GameOver.js`
- `public/style.css`

## Findings

### What is already sound

- Boot, preload, menu, gameplay, and game-over responsibilities are separated into Phaser scenes.
- `src/game/main.js` remains a composition and configuration entry point instead of owning scene behavior.
- Vite development and production build scripts already exist.

### Must address before feature growth

- The template has scene boundaries but no domain boundary for gameplay rules, data, save state, audio events, UI presentation, or tests. Add those only as real features require them.
- Main menu and game-over interaction use pointer-down anywhere. A production game needs explicit actions, focus states, keyboard/controller support, and readable interaction targets.
- `Arial Black`, stroked canvas text, and template imagery are suitable placeholders, not a final visual identity.

### Recommended next structure

```txt
src/
  game/
    scenes/
    gameplay/
    data/
    presentation/
    render/vfx/
  ui/
    components/
    styles/
tests/
```

Keep the first playable small. Do not create every folder before a system needs ownership.

## Decision

Continue from the existing scene split, but establish one gameplay-state boundary and one UI strategy before adding progression or complex menus. Use Phaser for gameplay-space rendering; use DOM/CSS for text-heavy responsive UI if the project develops shops, settings, cards, or inventory.

## Verification

- Source inspection: `Passed`
- Architecture boundary review: `Passed`
- UI placeholder detection: `Passed`
- `npm install`: `Not run`
- Production build: `Not run`
- Browser playtest: `Not run`

## Skill Evidence

This case shows that Focused Review can combine architecture and UI judgment without invoking a full producer, audio, QA, and playtesting report. It also avoids the incorrect conclusion that canvas UI is always unacceptable: the issue is production quality and interaction design, not the renderer alone.
