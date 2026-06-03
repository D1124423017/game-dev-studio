# Visual Asset Policy

Use this reference whenever a task touches anything players can see: characters, enemies, environments, UI, HUD, icons, effects, menus, spritesheets, cutscenes, store art, banners, logo, screenshots, or promotional images.

For UI motion, HUD animation, menu transitions, reward feedback, combo feedback, React Bits-style components, or GSAP-style timelines, also read `references/ui-motion-guide.md`.

For gameplay VFX, hit effects, particles, sprite effects, shaders, post-processing, screen shake, flipbooks, Unity VFX Graph, Unreal Niagara, or Godot particles, also read `references/game-vfx-guide.md`.

Visual assets are not only static images.

Player-facing visual work may include motion, animated UI, gameplay VFX, particle textures, shader effects, spritesheets, flipbooks, transitions, camera impulse, screen shake, and feedback timing.

If the task involves UI screens, cards, buttons, HUD, or result screens, check whether motion is needed.

If the task involves formal game UI, also read `references/ui-visual-design-guide.md`.

## Core Principle

Player-visible tasks should prioritize direct image generation when the environment supports it.

If direct image generation is not available, provide a complete image generation brief with asset specs, naming, size, style direction, and integration notes.

Do not stop at vague art direction when the user needs usable game assets or visual concepts.

## Formal Asset vs Prototype Placeholder

### Formal asset

A formal asset can be used in the actual game or public presentation:

- Resolution is high enough for its purpose.
- Name and path are clear.
- Style is consistent with the rest of the game.
- Format is appropriate.
- Transparent background is provided when needed.
- Asset has been integrated or has clear integration instructions.

### Prototype placeholder

A prototype placeholder is only for quick testing:

- It must be clearly labeled as placeholder.
- It must not be reported as finished production art.
- It should be replaced before public screenshots, release builds, store pages, or portfolio presentation.

## Required Visual Asset Brief

For visual tasks, provide:

- Asset purpose
- Asset list
- Style direction
- Mood and references
- Color palette
- Resolution
- Format
- Transparent background requirement
- Animation or spritesheet requirements
- Gameplay VFX requirements
- Motion / interaction requirements
- UI visual design requirements
- Suggested path
- Naming convention
- Image generation prompt
- Avoid list / negative prompt
- Integration checklist

## Naming and Paths

- Use lowercase kebab-case unless the project already has a naming convention.
- Do not use names such as `final-final-v2.png`.
- Put icons, characters, backgrounds, effects, and UI in sensible folders.
- If the project has an asset registry, update it when adding assets.
- If the engine uses import metadata, mention required import settings.

Suggested folders:

```txt
assets/
  art/
    characters/
    enemies/
    backgrounds/
    ui/
    icons/
    vfx/
  audio/
  fonts/
```

## Suggested Sizes

- README / banner: around 1600px wide
- Background: at least 1920x1080
- UI icon: at least 512x512
- Detailed icon: 1024x1024
- Character / enemy portrait: at least 1024px tall
- Card art: at least 1024x1536
- Spritesheet: specify rows, columns, cell size, padding, frame count, and anchor point
- VFX flipbook: specify rows, columns, cell size, frame count, FPS, one-shot / loop, blend mode, anchor, and cleanup timing
- Particle texture: specify shape, edge softness, alpha behavior, color tinting, intended particle system, and overdraw risk
- Shader / material effect: specify visual purpose, parameters, trigger event, duration, and fallback
- UI motion asset: specify trigger event, duration, easing, loop behavior, and reduced motion fallback

## Style Consistency Check

Before calling a visual task complete, check:

- Does it look like the same game?
- Is the main color palette consistent?
- Is the UI visual language consistent?
- Do effects block gameplay readability?
- Do gameplay VFX communicate the correct event, target, direction, danger, reward, or impact?
- Do UI animations communicate state, reward, danger, or navigation?
- Do VFX use the right route: sprite / flipbook, particle system, shader / material, post-processing, camera impulse, or UI FX?
- Does the UI look like a polished game interface rather than canvas placeholder boxes?
- Do animations respect reduced motion and avoid blocking input?
- Do gameplay effects respect reduced shake, avoid rapid flashing, and stay readable at gameplay scale?
- Are particles pooled or bounded for repeated use?
- Are icons recognizable when scaled down?
- Does anything still look like placeholder art?
- Are player-critical elements readable against the background?

## Visual Asset Report

```md
## Visual Asset Report

### Generated / Required Assets
- Asset name:
- Type:
- Purpose:
- Suggested path:
- Resolution:
- Format:
- Transparent background:
- Style direction:
- Motion requirement:
- UI visual design requirement:
- Status: generated / prompt only / integrated / not integrated

### Integration Checklist
- File added:
- Asset registry updated:
- Code reference updated:
- In-game display confirmed:
- Motion behavior confirmed:
- Gameplay VFX behavior confirmed:
- VFX performance checked:
- Reduced motion fallback checked:
- Reduced shake fallback checked:
- No placeholder remains:
- Style consistency checked:
```
