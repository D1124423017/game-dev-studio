# Studio Art Direction Pipeline

Use this reference when a task needs client-ready game art direction, polished game UI, a visual target before implementation, style bible work, or Product Design plugin coordination.

This guide keeps game-dev-studio from accepting placeholder UI, debug rectangles, generic web styling, or canvas-only mock visuals as finished game presentation.

## Contents

- Core Rule
- When to Use
- Visual Target Gate
- Product Design Plugin Integration
- Game Style Bible
- UI Design System Gate
- Asset Production Gate
- Design QA Gate
- Fallback When Tools Are Unavailable

## Core Rule

Formal player-facing work needs a selected visual direction before production implementation.

For client-ready UI, menus, HUD, cards, shops, result screens, store art, hero art, or promotional visuals, do not jump from a written idea directly to code unless the user explicitly chooses prototype-only output.

The studio should help the client choose a visual direction, then build toward that selected target.

## When to Use

Use this guide for:

- Client/studio production work that includes visual presentation.
- New game UI, UI redesign, HUD, menu, shop, upgrade, card, inventory, settings, or result screens.
- Requests that say the game should look beautiful, polished, premium, commercial, formal, or not like Canvas placeholders.
- Art direction packages, style bibles, key art, characters, environments, icons, VFX language, or store-facing assets.
- Product Design plugin handoff for visual ideation, image-to-code, or design QA.

Do not use it for tiny copy edits, one-line UI bug fixes, or prototype-only gameplay experiments unless the player-facing visual quality is the main concern.

## Visual Target Gate

Before client-ready UI or visual implementation, establish one of these:

- A selected ImageGen concept.
- A selected Figma frame.
- A selected screenshot or mockup.
- A selected reference image plus a written adaptation brief.
- A concise style bible plus approved screen spec when image generation is not available.

If no target exists, propose how to create one instead of starting production UI code.

Minimum visual target brief:

- Screen or asset:
- Player goal:
- Game fantasy:
- Mood:
- Reference direction:
- Layout priority:
- Typography direction:
- Color palette:
- Shape language:
- Icon and panel treatment:
- Motion / VFX language:
- Accessibility constraints:
- Client approval needed:

## Product Design Plugin Integration

When the Product Design plugin is available, use it as the visual production partner for UI-heavy work.

Recommended routing:

- Need to clarify UI/product context: use Product Design `get-context`.
- Need visual alternatives before build: use Product Design `ideate` and show exactly three distinct options unless the user requests a different count.
- Existing UI needs critique from screenshots or a flow: use Product Design `audit`.
- A client has selected a visual target and wants web UI implementation: use Product Design `image-to-code` when the target is a screenshot, mockup, ImageGen result, or Figma-like visual.
- After implementing from a visual target: use Product Design `design-qa` as the blocking visual comparison gate when available.

Game Dev Studio remains responsible for game-specific quality:

- gameplay readability
- fantasy fit
- game UI states
- HUD safety
- motion timing
- VFX interaction
- performance risk
- engine integration
- QA and acceptance criteria

Product Design should not replace game design, gameplay architecture, or playtesting judgment.

## Game Style Bible

For formal art direction packages, define:

- Game title or working title:
- Genre and camera:
- Target player:
- Visual pillar 1:
- Visual pillar 2:
- Visual pillar 3:
- Do-not-look-like list:
- Color palette:
- Typography:
- Shape language:
- Material / texture language:
- Character style:
- Enemy / NPC style:
- Environment style:
- Prop / item style:
- UI panel style:
- Button and control style:
- Icon style:
- HUD style:
- UI motion language:
- Gameplay VFX language:
- Audio mood pairing:
- Asset naming and folder rules:
- Placeholder replacement rule:

The style bible should be short enough to guide production, not a lore document.

## UI Design System Gate

Before implementing formal UI, define:

- Type scale:
- Color tokens:
- Spacing scale:
- Panel styles:
- Button styles:
- Input / slider / toggle styles:
- Icon system:
- Card system:
- Modal / dialog system:
- HUD component rules:
- Navigation and focus rules:
- Default, hover, pressed, selected, disabled, focused, loading, error, and success states:
- Motion timing:
- Reduced motion behavior:
- Responsive breakpoints:
- Controller / keyboard focus if relevant:

Canvas can still render gameplay. It should not be the reason formal UI lacks typography, layout, states, or design system rules.

## Asset Production Gate

Before calling visual work production-ready, confirm:

- Required assets are listed.
- Every asset has purpose, size, format, path, naming, and generation or creation route.
- Placeholder assets are labeled and have a replacement plan.
- Icons remain readable at in-game size.
- UI assets match the selected style direction.
- VFX and UI motion do not hide gameplay information.
- Store-facing assets are distinct from in-game placeholder captures.

## Design QA Gate

Before handoff, compare implementation against the approved visual target:

- Same viewport or engine screen:
- Same screen state:
- Typography match:
- Layout and spacing match:
- Color and contrast match:
- Component states implemented:
- Motion does not block input:
- Reduced motion exists where relevant:
- Gameplay readability preserved:
- Console/runtime errors checked:
- Remaining differences classified as P0 / P1 / P2 / P3:

Do not claim "matches the design" without visual evidence, screenshot comparison, or an explicit limitation note.

## Fallback When Tools Are Unavailable

If ImageGen, Figma, Product Design, or screenshot tooling is unavailable:

- State the missing capability.
- Provide a full visual target brief.
- Provide image generation prompts and avoid lists.
- Mark implementation as prototype, not final visual delivery, unless the user approves text-only direction as the target.

The goal is not to force one tool. The goal is to prevent unapproved placeholder visuals from becoming the final game presentation.
