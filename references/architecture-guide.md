# Cross-Engine Architecture Guide

Use this guide before creating a new game project, expanding a prototype, restructuring an existing project, or reviewing whether the project can survive more features.

## Core Rule

Do not put every system into one giant file.

Even the smallest prototype should separate responsibilities that change for different reasons. A single coordinator can exist, but it should not own gameplay rules, UI, input, audio, save data, asset loading, and tests at the same time.

## Common Game Architecture Principles

Every engine has different file types, but the same responsibilities should remain separated:

- `Core`: game state, initialization, boot flow, main loop ownership, scene flow, high-level app state
- `Gameplay / Systems`: combat, interaction, spawning, quests, progression, rules, win/loss conditions
- `Input`: keyboard, mouse, gamepad, touch, remapping, input buffering; do not mix it into gameplay core
- `UI`: HUD, menus, tutorials, prompts, result screens, settings, accessibility states
- `UI Visual Design`: typography, themed panels, icon language, component states, responsive layout
- `UI Motion`: button feedback, menu transitions, HUD value animation, reward motion, reduced motion fallback
- `Data`: levels, enemies, items, skills, tuning values, localization, drop tables
- `Assets`: images, audio, fonts, prefabs, blueprints, scenes, materials, shaders, animation clips
- `Audio`: BGM, SFX, mixers, music states, volume settings, audio event mapping
- `Save / Settings`: save files, progression, settings, language, volume, key bindings
- `Render / Presentation`: camera, animation, effects, screen shake, transitions, visual state
- `Debug`: debug HUD, diagnostics, cheats, test tools; debug code should not control production gameplay
- `Tests`: unit tests, flow tests, play mode tests, smoke tests, browser checks, fixture scenes

Input should describe intent, gameplay should decide outcomes, render should display state, UI should explain state, audio should respond to events, and data should tune behavior without forcing code edits.

## Shared Module Model

Use these conceptual modules across engines:

- `Core`: bootstrapping, game loop ownership, scene flow, event bus, service registration
- `Gameplay`: player, enemies, abilities, combat, physics rules, level logic, win/loss rules
- `Input`: raw input, input mapping, commands, device-specific adapters
- `UI`: menus, HUD, overlays, dialogs, results, accessibility states
- `UI Visual Design`: UI art direction, component styling, layout system, fonts, icons, states
- `UI Motion`: animation adapters, transition timelines, tween presets, reduced motion mode
- `Data`: tuning values, item tables, level definitions, localization, save schemas
- `Audio`: music states, sound event mapping, mixers, volume settings
- `Assets`: art, animation, VFX, shaders, materials, sprites, models, fonts
- `Save`: persistence, progression, settings, migration
- `Debug`: diagnostics, debug UI, dev cheats, profiling helpers
- `Tests`: unit tests, play mode tests, smoke tests, fixture scenes

## Small Prototype vs Larger Project

Small prototypes can simplify the structure, but they still need boundaries:

```txt
project/
  src/
    core/
    gameplay/
    ui/
    data/
  assets/
  tests/
```

Minimum prototype rules:

- Keep bootstrapping separate from gameplay rules.
- Keep UI display separate from gameplay state changes.
- Keep tuning values in one place.
- Keep at least one smoke test or manual verification checklist.
- Do not use "it is only a prototype" as an excuse to create an unchangeable giant file.

Larger projects need stronger ownership:

```txt
project/
  src/
    core/
    gameplay/
    input/
    ui/
    data/
    audio/
    save/
    render/
    debug/
    tests/
  assets/
    art/
    audio/
    vfx/
    fonts/
  docs/
```

Larger project rules:

- Define entry points and scene flow.
- Use data/config files for balance and content.
- Keep asset import paths and registries consistent.
- Separate save/settings from gameplay systems.
- Add repeatable tests or smoke checks for boot, input, win/loss, restart, and asset loading.

## Unity Suggested Structure

```txt
Assets/
  Scenes/
  Scripts/
    Core/
    Gameplay/
    Input/
    UI/
    UIMotion/
    Data/
    Audio/
    Save/
    Debug/
    Tools/
  Prefabs/
  ScriptableObjects/
  Art/
  Audio/
  VFX/
  Tests/
  Resources/ or Addressables/
```

Unity guidelines:

- MonoBehaviour should mostly handle Unity lifecycle glue, scene references, collisions, and engine callbacks.
- Do not put every rule into one `GameManager`, `PlayerController`, or `LevelManager`.
- Prefer ScriptableObjects or data configs for enemies, items, skills, levels, spawn rules, economy values, and tuning.
- UI logic should not directly mutate gameplay core. Route player intent through controllers, commands, events, or services.
- UI motion should be presentation-layer feedback. Do not let tween callbacks own gameplay outcomes.
- Respect reduced motion and keep important HUD updates readable without animation.
- Avoid scattered `FindObjectOfType` calls for core dependencies.
- Keep scene flow, gameplay state, UI presentation, and audio events separate.
- Tests should include compile checks, play mode smoke checks, scene reference checks, and prefab reference checks when possible.

## Unreal Suggested Structure

```txt
Content/
  Blueprints/
    Core/
    Gameplay/
    UI/
    UIMotion/
  DataTables/
  Levels/
  Materials/
  Audio/
  Input/
  Characters/
  Effects/
Source/
  GameName/
    Core/
    Gameplay/
    UI/
    Data/
```

Unreal guidelines:

- Keep GameMode, GameInstance, PlayerController, Pawn / Character, and Widget responsibilities distinct.
- GameMode owns match rules and high-level mode behavior.
- GameInstance owns persistent app/session state, not moment-to-moment combat rules.
- PlayerController translates player intent and camera/control concerns, not all progression.
- Pawn / Character owns character behavior and presentation, not global game flow.
- Widget Blueprint should not contain gameplay core rules.
- UMG animations should communicate UI state and feedback, not own match flow or progression.
- Use DataTable / DataAsset for enemies, items, skills, level definitions, and tuning values.
- Avoid putting all rules in a Level Blueprint.
- When Blueprint graphs become large, split into function libraries, actor components, data assets, or C++ classes.

## Godot Suggested Structure

```txt
res://
  scenes/
    core/
    gameplay/
    ui/
  scripts/
    core/
    gameplay/
    input/
    ui/
    ui_visual/
    ui_motion/
    data/
    audio/
  autoload/
  resources/
  audio/
  art/
  tests/
```

Godot guidelines:

- Use scenes for reusable entities and UI, not one scene containing everything.
- Autoload should hold focused global services such as save, audio, scene routing, or settings.
- Do not let Autoload become a dumping ground for all gameplay logic.
- Node signals should have clear data flow. Avoid invisible signal chains that make behavior impossible to trace.
- A scene should not mix unrelated responsibilities such as menu UI, combat state, save logic, and level generation.
- Use Resources for tunable data and content configuration.
- Separate input mapping, gameplay state, UI updates, and audio triggers.
- Keep Tween / AnimationPlayer UI motion separate from core gameplay state changes.

## HTML Canvas / Web Game Suggested Structure

```txt
src/
  main.js
  core/
  gameplay/
  input/
  render/
  ui/
  ui/visual/
  motion/
  data/
  audio/
  assets/
  debug/
tests/
```

Web guidelines:

- `main.js` should bootstrap the game, register systems, load assets, and start the loop.
- Do not put all gameplay, rendering, input, audio, and UI into one canvas script.
- `render` should display game state. It should not decide gameplay results.
- `input` should collect and normalize input. It should not directly mutate large global state everywhere.
- `data` should centralize constants, tuning values, and tables instead of scattering magic numbers.
- `debug` tools should not control formal game flow or ship enabled by accident.
- UI motion logic should be separated from gameplay core.
- UI visual design should be separated from gameplay core.
- DOM / React UI animation should live in UI or motion modules, not gameplay logic.
- DOM / React UI styling should live in UI, visual, style, or component modules, not gameplay logic.
- Canvas gameplay effects should be separated from rules and state resolution.
- Keep DOM UI or React overlays separate from canvas/WebGL gameplay logic.
- Keep GSAP timelines, React component motion, and CSS transitions in UI / presentation modules.
- Do not add a motion library for one tiny effect; prefer CSS transitions for simple states.
- Respect `prefers-reduced-motion` or an in-game reduced motion option.
- Add browser smoke checks for boot, input, resize, asset loading, and console errors.

For Web games, consider modules like:

```txt
src/ui/motion/
src/ui/animations/
src/ui/components/
src/ui/styles/
src/ui/theme/
src/render/effects/
src/core/reducedMotion.js
```

For engines, use animation controllers, tween services, or UI animation components instead of mixing motion code into gameplay state logic.

## Canvas UI vs DOM / React UI

Canvas can render gameplay, but complex product-quality UI should usually live in a real UI layer.

Prefer Canvas / WebGL for:

- gameplay space
- board or arena rendering
- in-world bars
- particles and hit effects
- simple diegetic overlays

Prefer DOM / React / CSS overlay for:

- main menus
- settings
- pause screens
- shops
- card selection
- upgrade screens
- inventory
- skill trees
- result screens
- text-heavy panels
- responsive HUD

If final UI must be drawn on Canvas, it still needs UI art direction, typography, icons, layout, interaction states, visual assets, and motion specs. Plain rectangles and default text are not a finished UI.

## Safe Refactor Workflow for Giant Single-File Games

Use this workflow when a game has one huge file, God object, giant manager, giant Blueprint, giant scene script, or oversized canvas file.

1. Read the file first. Do not split it immediately.
2. List every responsibility the file currently owns.
3. Mark high-risk areas:
   - piece lifecycle
   - combat resolution
   - save/load
   - result screen
   - asset loading
   - input mapping
   - audio unlock
   - defeat / win flow
4. Extract low-risk areas first:
   - constants
   - data tables
   - debug HUD
   - pure UI helpers
   - formatting helpers
   - asset path registry
5. Extract medium-risk areas next:
   - input adapter
   - audio manager
   - menu renderer
   - settings panel
6. Extract high-risk core last:
   - gameplay loop
   - player lifecycle
   - combat turn flow
   - save / progression
7. Change only one architectural direction per step.
8. Run tests or smoke checks after each extraction.
9. If no tests exist, add a minimal smoke test or manual verification flow before touching core logic.
10. Do not mix refactoring and new features in the same commit.

Rollback should be simple: each extraction should preserve behavior and keep the previous call path understandable until verified.

## Architecture Review Template

```md
## Architecture Review

### Current Structure
- Entry points:
- Core files:
- Data files:
- UI files:
- Asset flow:
- Test files:

### Biggest Architecture Problems
- ...

### Giant File / God Object Risks
- File:
- Responsibilities mixed together:
- Why it is risky:

### Recommended Module Split
- Module:
- Responsibility:
- Suggested files:
- Risk level:

### High-Risk Areas
- ...

### Safe Refactor Order
1. ...
2. ...
3. ...

### Required Tests
- ...

### Do Not Touch Yet
- ...
```

## Architecture Review Checklist

- Can a new developer find the game loop, scene flow, and main gameplay rules quickly?
- Can gameplay values be tuned without hunting through unrelated code?
- Can UI change without rewriting gameplay logic?
- Can input devices or bindings change without rewriting gameplay systems?
- Can audio events be added without editing every gameplay file?
- Can save/load change without touching UI and combat code together?
- Can new levels, enemies, or abilities be added without duplicating large blocks?
- Is debug code isolated from production gameplay?
- Is there a minimal test or manual smoke flow for boot, controls, win/loss, restart, and asset loading?
