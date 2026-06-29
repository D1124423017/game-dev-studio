# Client Studio End-to-End Trace

This trace shows how `$game-dev-studio` should behave when a client asks the studio to plan and deliver a small playable game slice.

It is a workflow trace, not a runtime implementation case study. Use it as a reference for the expected shape of a real end-to-end validation run.

## Scenario

```txt
$game-dev-studio
I am a client commissioning this studio to make a small 2D action web game. I want a first playable slice with one arena, one enemy, a main menu, a HUD, hit feedback, basic sound direction, and a result screen. Start with planning, then only implement after scope, art direction, and architecture are clear.
```

## Expected Reference Loading

Start small and load only the references needed by each stage:

1. `references/client-studio-production-workflow.md`
2. `references/template-index.md`
3. `references/studio-art-direction-pipeline.md` when visual target or style bible is needed
4. `references/architecture-guide.md` before implementation planning
5. `references/production-milestone-gates.md` for first playable and acceptance gates
6. `references/studio-implementation-delivery-workflow.md` when moving into file edits and delivery
7. Domain references only when active: UI visual, UI motion, VFX, visual assets, Ruthless Playtester

Do not load `references/output-templates.md` unless the client asks for a formal full package.

## Stage 1: Client Brief Intake

- Client goal: first playable 2D action web game slice
- Target player: action game player who should understand the loop within 30 seconds
- Platform: web game
- Must-have: arena, one enemy, menu, HUD, hit feedback, sound direction, result screen
- Not yet approved: art style, exact control scheme, engine choice, visual target
- Success criteria: playable loop, clear feedback, no placeholder UI presented as final

## Stage 2: Studio Proposal

Offer two to four directions:

- Easiest to finish: top-down arena dodge-and-strike loop
- Most distinctive: rhythmic dash-slash combat with timing windows
- Most commercial: roguelite micro-arena with upgrade cards
- Most experimental: single-button combat puzzle arena

Recommend one direction and explain why.

## Stage 3: Scope Lock

MVP:

- One menu
- One arena
- One player
- One enemy type
- One attack
- One health system
- One result screen
- Minimal audio direction
- HUD with health and objective

Deferred:

- Multiple levels
- Progression economy
- Character roster
- Online leaderboard
- Store assets

Explicit non-goals:

- No multiplayer
- No procedural level generation
- No unbounded content expansion

## Stage 4: Art Direction Gate

Before implementation, define:

- Visual target route: ImageGen concept, reference screenshot, Figma frame, or concise style bible
- Style bible: palette, typography, shape language, UI panel style, icon style, VFX language
- UI design system: button states, HUD hierarchy, result screen tone
- Placeholder rule: placeholder assets must be labeled and cannot be reported as final
- Design QA plan: compare final UI against the selected visual target or style bible

## Stage 5: Production Architecture Gate

For a web game, define:

```txt
src/
  main.js
  core/
  gameplay/
  input/
  render/
  render/vfx/
  ui/
  ui/visual/
  ui/motion/
  data/
  audio/
  debug/
tests/
```

Rules:

- Gameplay owns outcomes.
- Render displays state.
- UI explains state.
- VFX, motion, and audio respond to events.
- Save/settings are separate if added.
- Debug UI cannot become final UI.

## Stage 6: Implementation Delivery Plan

Before file edits:

- Inspect entry point, current architecture, asset loading, UI layer, tests, and build scripts.
- Define the first production slice.
- List files likely to edit and files not to touch.
- State tests and manual verification.
- Keep client decisions visible.

## Stage 7: QA / Playtest / Acceptance

After implementation:

- Boot: `Passed` / `Failed` / `Not run` / `Blocked`
- Main menu flow:
- Core gameplay:
- HUD readability:
- Hit feedback:
- Result screen:
- Audio feedback:
- Console/runtime errors:
- Visual target alignment:
- Reduced motion / reduced shake:
- Ruthless Playtester note:

## Stage 8: Delivery Report

Report:

- Delivered slice
- Scope status
- Files changed
- Architecture boundaries preserved
- Visual target / style bible status
- UI/UX changes
- UI visual design changes
- UI motion changes
- Gameplay VFX changes
- Audio changes
- Tests run and results
- Known risks
- Remaining work
- Client decisions still needed

## Failure Conditions

The workflow fails if the Skill:

- Starts coding from the vague client request.
- Treats canvas placeholder UI as final.
- Skips visual target or style bible.
- Skips architecture boundary definition.
- Adds all logic to one file.
- Reports unrun tests as passed.
- Omits client acceptance criteria.
- Turns the workflow into one specific game's permanent rule set.
