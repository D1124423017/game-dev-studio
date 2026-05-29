# Cross-Engine Architecture Guide

Use this guide before creating a new game project, expanding a prototype, or reviewing whether the project structure can survive more features.

## Core Rule

Do not put every system into one giant file.

Even the smallest prototype should separate the responsibilities that change for different reasons:

- Boot / app startup
- Scene or screen flow
- Input handling
- Game state
- Gameplay rules
- Entities and components
- UI / HUD
- Audio
- Data and configuration
- Save / persistence
- Asset loading
- Tests or debug tools

Small projects can use fewer folders, but they still need clear boundaries.

## Shared Module Model

Use these conceptual modules across engines:

- `Core`: bootstrapping, game loop ownership, scene flow, event bus, service registration
- `Gameplay`: player, enemies, abilities, combat, physics rules, level logic, win/loss rules
- `UI`: menus, HUD, overlays, dialogs, results, accessibility states
- `Data`: tuning values, item tables, level definitions, localization, save schemas
- `Audio`: music states, sound event mapping, mixers, volume settings
- `Assets`: art, animation, VFX, shaders, materials, sprites, models, fonts
- `Tools`: debug panels, editor helpers, import/export utilities
- `Tests`: unit tests, play mode tests, smoke tests, fixture scenes

## Small Prototype Structure

Use this when the goal is a jam game, proof of concept, or one-screen prototype:

```txt
project/
  src/
    core/
    gameplay/
    ui/
    data/
    audio/
  assets/
  tests/
  README.md
```

Keep the number of files modest, but avoid files that own unrelated systems. A single `GameManager` may coordinate systems, but it should not contain all gameplay, UI, audio, input, and save logic.

## Larger Project Structure

Use this when the game has multiple scenes, progression, reusable content, or a team workflow:

```txt
project/
  src/
    core/
    scenes/
    gameplay/
      player/
      enemies/
      abilities/
      levels/
    ui/
    audio/
    data/
    save/
    tools/
    tests/
  assets/
    art/
    audio/
    vfx/
    fonts/
  docs/
```

Add boundaries for features, not for decoration. If a folder exists, it should reduce confusion about ownership.

## Unity

Recommended shape:

```txt
Assets/
  Scenes/
  Scripts/
    Core/
    Gameplay/
    UI/
    Data/
    Audio/
    Tools/
    Tests/
  Prefabs/
  ScriptableObjects/
  Art/
  Audio/
  VFX/
  Resources/ or Addressables/
```

Guidelines:

- Keep MonoBehaviours thin when possible; move reusable rules into plain C# classes or ScriptableObjects.
- Avoid one massive `GameManager`.
- Use ScriptableObjects for tunable data when appropriate.
- Avoid scattered `FindObjectOfType` calls for core dependencies.
- Keep scene flow, gameplay state, UI presentation, and audio events separate.

## Unreal

Recommended shape:

```txt
Content/
  Maps/
  Blueprints/
    Core/
    Gameplay/
    UI/
    AI/
  Art/
  Audio/
  VFX/
Source/
  GameName/
    Core/
    Gameplay/
    UI/
    Data/
```

Guidelines:

- Keep GameMode, GameState, PlayerController, Character, and UI responsibilities distinct.
- Do not place all rules in a Level Blueprint.
- Use Data Assets or Data Tables for tunable content.
- Keep Blueprint logic readable; move complex or shared logic into C++ or reusable Blueprint components.
- Separate input, camera, ability logic, UI widgets, and save systems.

## Godot

Recommended shape:

```txt
res://
  scenes/
    core/
    gameplay/
    ui/
  scripts/
    core/
    gameplay/
    ui/
    data/
    audio/
  assets/
    art/
    audio/
    vfx/
  resources/
  tests/
```

Guidelines:

- Use scenes for reusable entities and UI, not one scene containing everything.
- Keep Autoload singletons focused; avoid turning them into global dumping grounds.
- Use Resources for tunable data.
- Separate input mapping, gameplay state, UI updates, and audio triggers.
- Prefer signals for decoupling when direct references would become tangled.

## Web Game

Recommended shape for Phaser, PixiJS, Three.js, React, or vanilla TypeScript games:

```txt
src/
  main.ts
  core/
  scenes/
  gameplay/
  entities/
  ui/
  audio/
  data/
  assets/
  tests/
public/
  assets/
```

Guidelines:

- Keep rendering, simulation, input, and UI state separate.
- Do not put the entire game in `main.ts`, `App.tsx`, or one canvas script.
- Use modules for scenes, entities, systems, asset manifests, and tuning data.
- Keep DOM UI or React overlays separate from canvas/WebGL gameplay logic.
- Add simple smoke tests or browser checks for boot, input, resize, and asset loading.

## HTML Canvas

Recommended shape for small canvas games:

```txt
src/
  main.js
  engine/
    loop.js
    input.js
    renderer.js
  game/
    state.js
    player.js
    enemies.js
    rules.js
  ui/
  audio/
  data/
  assets/
```

Guidelines:

- Keep the game loop, rendering, input, and rules in separate modules.
- Avoid global mutable state spread across files.
- Centralize constants and tuning data.
- Add a clear asset preload step before gameplay starts.
- Keep UI drawing and gameplay rules separate, even if both render to canvas.

## Architecture Review Checklist

- Can a new developer find the game loop, scene flow, and main gameplay rules quickly?
- Can gameplay values be tuned without hunting through unrelated code?
- Can UI change without rewriting gameplay logic?
- Can audio events be added without editing every gameplay file?
- Can new levels, enemies, or abilities be added without duplicating large blocks?
- Is there a minimal test or manual smoke flow for boot, controls, win/loss, restart, and asset loading?
