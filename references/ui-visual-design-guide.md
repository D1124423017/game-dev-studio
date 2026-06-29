# Game UI Visual Design Guide

Use this guide when a task involves player-facing UI screens or components: main menus, HUDs, card selection, shops, upgrade screens, skill bars, inventory, settings, dialogs, result screens, pause menus, toast prompts, mission panels, or portfolio / store-facing UI screenshots.

For client-ready UI, visual target selection, Product Design plugin coordination, image-to-code handoff, or design QA, also read `references/studio-art-direction-pipeline.md`.

## Core Rule

Canvas can render gameplay, but product-quality UI should usually be designed as a real UI layer with styled components, images, typography, states, layout, and motion.

Do not treat canvas-drawn rectangles and default text as finished game UI.

## UI Design Goals

Game UI should be:

- readable
- beautiful
- game-themed
- responsive
- polished
- consistent
- fast to understand
- aligned with the game's fantasy and mood

The UI should feel like part of the game world, not like a debug overlay or a default web form.

## Canvas UI vs DOM / React UI

### Canvas is good for

- gameplay rendering
- board or arena rendering
- in-world health bars
- particles
- hit effects
- screen shake
- simple diegetic overlays
- visual effects tied directly to gameplay space

### DOM / React / styled component UI is usually better for

- main menu
- settings
- pause menu
- shop
- card selection
- upgrade screen
- inventory
- skill tree
- result screen
- modal dialogs
- complex HUD layout
- responsive UI
- text-heavy UI
- accessibility-sensitive UI

### Canvas UI can be acceptable when

- the whole game intentionally uses a pixel-art or retro canvas aesthetic
- UI is diegetic and integrated into the game world
- the project has a deliberate single-canvas technical constraint
- the canvas UI still has proper art direction, typography, layout, states, icons, and motion

## Quality Bar

Do not accept:

- plain canvas rectangles as final UI
- default fonts as final UI
- default HTML look without game styling
- placeholder icons in finished screens
- buttons without hover / pressed / selected / disabled states
- text squeezed into boxes
- unclear visual hierarchy
- HUD elements that hide gameplay
- unreadable icons at gameplay size
- panels that do not match the game theme
- inconsistent border, shadow, glow, and color language

## Formal Game UI Quality Gate

Before implementing or accepting formal UI, define:

- Target screen:
- Player goal on the screen:
- Game fantasy / theme:
- Typography:
- Color palette:
- Panel and frame treatment:
- Button and control style:
- Icon style:
- HUD hierarchy:
- Empty, loading, disabled, error, success, selected, and focused states:
- Responsive behavior:
- Motion language:
- Required generated or designed assets:
- Accessibility and readability constraints:

The UI should look intentionally designed before final implementation. Canvas can remain the gameplay renderer, but formal menus, shops, cards, settings, upgrade screens, and result screens need real visual hierarchy, component states, and asset treatment.

Do not accept debug overlays, default browser controls, temporary OnGUI labels, or unstyled engine controls as client-ready delivery.

For production implementation, also define the approved visual target:

- Selected ImageGen concept / Figma frame / screenshot / mockup:
- If no image target exists, approved style bible:
- Client approval status:
- Visual comparison or design QA plan:

## Required UI Art Direction

For formal game UI, define:

- theme
- mood
- typography
- color palette
- panel treatment
- button style
- icon style
- border / frame language
- background treatment
- hover state
- pressed state
- selected state
- disabled state
- error state
- success state
- layout grid
- spacing scale
- responsive behavior
- motion language

## UI Surface Checklist

### Main menu

- Game title treatment
- Primary action hierarchy
- Background or key art
- Menu button style
- Settings / quit / credits placement
- Focus / hover / controller selection state

### HUD

- Player status readability
- Health / energy / ammo clarity
- Objective visibility
- Danger feedback
- Combo / score feedback
- Does not block gameplay

### Cards / upgrades / shop

- Card frame style
- Rarity or category language
- Icon / art slot
- Title hierarchy
- Cost / requirement clarity
- Hover / selected / confirm states
- Disabled / unavailable state

### Result screen

- Win / loss emotional tone
- Reward reveal
- Stats hierarchy
- Retry / continue / menu actions
- Share / showcase value

## Web Game UI Recommendation

For web games:

- Use Canvas / WebGL for gameplay.
- Use DOM / React / CSS overlay for complex menus, HUD, cards, shops, settings, and result screens.
- Use generated or designed UI panels, icons, backgrounds, and decorative frames when needed.
- Use CSS transitions for simple states.
- Use GSAP for sequenced transitions or polished reward flow.
- Use React Bits-style ideas for modern cards, text, buttons, panels, reveal effects, and interaction polish when the project is already React-based or can adapt the concept without unnecessary dependency weight.

Do not add React only to copy a visual effect. The goal is polished game UI, not a specific library.

## Engine UI Recommendation

### Unity

- Prefer Canvas UI, UI Toolkit, prefabs, sprites, ScriptableObject-driven data, and animation/tween systems.
- Do not treat temporary OnGUI or debug labels as finished UI.

### Unreal

- Prefer UMG widgets, styled assets, materials, data-driven widgets, and UMG animations.
- Do not put final UI into gameplay-only debug overlays.

### Godot

- Prefer Control nodes, themes, resources, styleboxes, fonts, and Tween / AnimationPlayer for polish.
- Do not ship unstyled default controls unless the art direction explicitly supports them.

## Game UI Visual Design Brief

```md
## Game UI Visual Design Brief

### UI Goal
- What should this screen feel like?

### Screen Type
- Main menu / HUD / shop / upgrade / card select / result / settings:

### Visual Direction
- Theme:
- Mood:
- Color palette:
- Typography:
- Panel style:
- Button style:
- Icon style:

### Component States
- Default:
- Hover:
- Pressed:
- Selected:
- Disabled:
- Error:
- Success:

### Implementation Recommendation
- DOM / React overlay:
- Canvas:
- Engine-native UI:
- Generated image assets:
- CSS / GSAP / tween motion:

### Quality Bar
- Does not look like debug UI:
- Does not rely on plain canvas rectangles:
- Text hierarchy is clear:
- UI matches game style:
- UI matches approved visual target or style bible:
- Responsive layout checked:
```
