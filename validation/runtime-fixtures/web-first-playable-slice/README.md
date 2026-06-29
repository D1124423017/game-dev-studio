# Web First-Playable Slice Runtime Fixture

This fixture is a small local proof target for the Game Dev Studio final goal.

It is not a bundled game template for users. It is a validation fixture that demonstrates how a client-approved first playable can preserve studio gates through implementation, QA, and delivery.

## Client Brief

The client requested a small 2D action web game slice:

- One arena
- One player
- One enemy
- Main menu
- HUD
- Hit feedback
- Basic sound direction
- Result screen

## Scope Lock

Included:

- Keyboard movement
- Space / attack button combat
- Enemy defeat win condition
- DOM/CSS menu, HUD, controls, and result screen
- Canvas gameplay renderer
- Presentation-layer VFX events
- Audio event mapping stub
- Node smoke test

Deferred:

- Multiple levels
- Asset pipeline
- Real generated art
- Persistent save
- Mobile touch polish
- Browser screenshot comparison

Explicit non-goals:

- No multiplayer
- No procedural generation
- No monetization, contracts, pricing, or payment logic

## Art Direction Gate

Visual target route:

- Text-only style bible for this fixture.
- No generated bitmap assets are included.

Style bible:

- Mood: compact neon arcade arena
- Palette: ink background, cyan player, coral enemy, gold reward accent
- Typography: system UI with strong weight and clear hierarchy
- UI style: dark panels, crisp borders, compact game HUD, explicit button states
- Placeholder rule: canvas gameplay shapes are acceptable for this fixture, but DOM UI must not look like browser defaults

## Architecture Gate

```txt
src/
  core/
  gameplay/
  render/
  render/vfx/
  ui/
  ui/visual/
  audio/
  data/
tests/
```

Responsibilities:

- `core` owns state shape.
- `gameplay` owns rules and outcomes.
- `render` displays gameplay state.
- `render/vfx` displays presentation events only.
- `ui` explains state and collects player intent.
- `audio` maps events to sound names but does not own outcomes.
- `data` owns tuning.

## Run

Open `index.html` in a browser, or serve the folder with any static file server.

Run smoke tests:

```bash
node validation/runtime-fixtures/web-first-playable-slice/tests/smoke.mjs
```

## Acceptance Evidence

See `delivery-report.md`.
