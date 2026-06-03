# UI Motion / Game Feel Animation Guide

Use this guide when reviewing or planning UI motion, HUD feedback, interaction animation, menu transitions, cards, upgrade screens, result screens, toast prompts, combo feedback, reward feedback, and player action feedback.

## Purpose

UI motion is not decoration. It should communicate:

- state change
- player action
- reward
- danger
- failure
- success
- selection
- progression
- attention priority

Good motion makes the game feel responsive, readable, and alive. Bad motion creates noise, hides important information, slows input, or wastes performance.

## Motion Priority Levels

### 1. Must-have motion

These events need immediate, readable feedback:

- Button hover / press feedback
- Damage / health loss / healing
- Reward gained
- Combo / chain / critical / perfect events
- Error / unavailable action prompts
- Victory / defeat results

### 2. Should-have motion

These improve clarity and polish:

- Menu switching
- Card hover / selected / confirm
- Settings tab switching
- HUD number changes
- Progress bars, energy bars, cooldowns

### 3. Optional polish

These are useful only when they do not reduce readability or performance:

- Background subtle motion
- Decorative glow
- Particles
- Shine sweep
- Idle shimmer
- React Bits-style magnetic / tilt / shine / reveal

## Recommended Motion Patterns

- hover lift
- press squash
- selected glow
- confirm burst
- number pop
- health shake
- damage flash
- reward flyout
- card stagger reveal
- toast slide / fade
- progress bar ease
- modal entrance / exit
- menu transition
- background parallax
- subtle idle shimmer

## Tool Selection

### Web / HTML Canvas / DOM UI

- CSS transition: simple hover, opacity, transform, color, and scale feedback
- GSAP: timeline, stagger, sequenced UI animation, complex state transitions, reward flow, menu choreography
- Canvas animation: gameplay feedback, particles, hit effects, board effects
- React Bits-style patterns: interactive cards, shiny text, animated lists, hover effects, reveal effects
- Do not add React just to use React Bits if the project is not React-based. Adapt the motion concept instead.

### React Projects

- Use React component animation patterns for state-driven UI.
- Use GSAP with React when timeline control, stagger, or sequenced transitions are needed.
- Use React Bits-style components for cards, text, buttons, panels, and interaction polish when they fit the project style.
- Keep animation state understandable and avoid hiding core game state inside presentation-only components.

### Unity

- Use Animator, Timeline, or DOTween-style tweening if available.
- Use Canvas UI transitions for menus, HUD, popups, and result screens.
- Use VFX Graph or Particle System for gameplay feedback when appropriate.
- Keep animation controllers and gameplay state separated.

### Unreal

- Use UMG animations for menus, widgets, HUD, and results.
- Use Sequencer for cinematic UI when intentionally designed.
- Use Niagara for gameplay feedback, reward effects, hit sparks, danger warnings, and polish.
- Keep Widget Blueprints from owning gameplay rules.

### Godot

- Use AnimationPlayer for repeatable UI and scene motion.
- Use Tween for responsive UI state changes.
- Use Control node animations for menus, buttons, panels, and HUD.
- Use particles or shader effects for gameplay feedback.
- Keep UI animation logic separate from core gameplay scripts.

## Anti-patterns

- Motion is too slow and delays player action.
- Motion covers the board, enemies, player status, or critical HUD.
- Every UI element moves at once, creating attention chaos.
- Animation exists only to show off and does not communicate state.
- Buttons have no immediate press feedback.
- Number changes have no animation or readability cue.
- A large package is added for one tiny effect.
- Reduced motion is not supported.
- No fallback exists when animation fails or is disabled.
- UI animation logic is mixed into gameplay core.

## UI Motion Review Template

```md
## UI Motion Review

### Current UI Feel
- Static / responsive / over-animated:

### Missing Feedback
- Player action:
- Reward:
- Danger:
- Error:
- Navigation:
- Progression:

### Recommended Motion
| UI Element | Event | Motion | Tool | Priority |
|---|---|---|---|---|
| Button | hover / press | lift + squash | CSS / GSAP | Must |
| Reward toast | gain reward | slide + glow + fade | GSAP | Should |

### GSAP / React Bits Opportunities
- GSAP:
- React Bits-style pattern:
- Engine-native alternative:

### Risks
- Performance:
- Readability:
- Input delay:
- Accessibility:

### Implementation Notes
- Keep animation duration:
- Avoid blocking input:
- Respect reduced motion:
- Test on:
```
