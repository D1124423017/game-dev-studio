# Output Templates

Use these templates only when a user asks for a detailed structured plan, review, brief, task, test report, refactor plan, or final report.

For ordinary tasks, read `references/template-index.md` first and use a short format. Do not load or reproduce every template here unless the user needs a formal deliverable.

## Game Concept Template

- Game title or working title
- One-sentence pitch
- Target platform
- Target player
- Genre and camera
- Core fantasy
- Core loop
- Player goal
- Success and failure conditions
- What makes it fun
- What makes it different
- Scope warning

## MVP Planning Template

- MVP goal
- Must-have features
- Nice-to-have features
- Cut or postpone
- First playable milestone
- Core systems
- Required screens
- Required assets
- Required UI visual design direction
- Required gameplay VFX feedback
- Required sound
- Required UI motion / game feel feedback
- Technical architecture
- Test plan
- Acceptance criteria
- Biggest risks

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

## UI/UX Review Template

```md
## UI/UX Review

### First Impression
- ...

### Information Hierarchy
- Primary:
- Secondary:
- Missing:
- Too noisy:

### Player Flow
- Entry:
- Main action:
- Failure flow:
- Reward flow:

### Readability Issues
- ...

### Interaction Issues
- ...

### Recommended Fixes
- Must-fix:
- Should-improve:
- Optional:
```

## Game UI Visual Design Brief Template

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
- Responsive layout checked:
```

## UI Motion Brief Template

```md
## UI Motion Brief

### Goal
- What should the motion communicate?

### Target UI
- Screen:
- Element:
- User event:
- Game state:

### Motion Design
- Entrance:
- Hover:
- Press:
- Selected:
- Confirm:
- Error:
- Exit:

### Tooling
- CSS transition:
- GSAP timeline:
- Canvas animation:
- React Bits-style component:
- Engine-native animation:

### Timing
- Duration:
- Delay:
- Stagger:
- Easing:

### Accessibility
- Reduced motion:
- Fallback:

### Acceptance Criteria
- Motion is readable:
- Motion does not block input:
- Motion supports gameplay feedback:
- No console/runtime errors:
```

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

## Visual Asset Brief Template

- Asset purpose
- Asset list
- Style direction
- Mood and references
- Character or object details
- Environment details
- UI or icon requirements
- Color palette
- Resolution and format
- Animation or spritesheet needs
- Variants needed
- Suggested paths
- Naming convention
- Image generation prompt
- Negative prompt or avoid list
- Delivery checklist

## Gameplay VFX Brief Template

```md
## Gameplay VFX Brief

### Goal
- What gameplay event should the effect communicate?

### Target Event
- Event:
- Source:
- Target:
- Player meaning:
- Priority: Must-have / Should-have / Optional

### VFX Design
- Shape:
- Timing:
- Color:
- Scale:
- Directionality:
- Anticipation:
- Impact:
- Follow-through:
- Decay:

### Runtime Route
- Sprite / flipbook:
- Particle system:
- Shader / material:
- Post-processing:
- Camera impulse / screen shake:
- UI FX:
- Sound pairing:

### Asset Requirements
- Generated asset needed:
- Frame count:
- FPS:
- Cell size:
- Rows / columns:
- Transparent background:
- Anchor:
- Blend mode:
- Suggested path:

### Performance and Accessibility
- Worst-case spawn count:
- Pooling:
- Overdraw risk:
- Mobile risk:
- Reduced motion:
- Reduced shake:
- Flashing risk:

### Acceptance Criteria
- Effect reads at gameplay scale:
- Effect does not hide hazards:
- Effect does not block input:
- Effect performs under worst-case use:
- Core gameplay still owns outcome:
```

## VFX Implementation Plan Template

```md
## VFX Implementation Plan

### Objective
- ...

### Files to Inspect First
- Gameplay event source:
- Render / presentation layer:
- Asset registry:
- Audio event mapping:

### Architecture Boundary
- Core gameplay event:
- VFX subscriber:
- Effect pool:
- Asset path:
- Cleanup rule:

### Implementation Steps
1. Add or verify gameplay event.
2. Add presentation-layer VFX adapter.
3. Add assets or placeholders clearly labeled as placeholders.
4. Add pooling or cleanup.
5. Pair sound, hit pause, camera impulse, or UI feedback if needed.
6. Add reduced motion / reduced shake handling.
7. Test worst-case effect spam.

### Do Not Mix
- Do not put damage, score, progression, or win/loss logic in VFX code.
- Do not hide gameplay-critical information behind the effect.
- Do not add heavy post-processing without measuring performance.

### Tests
- Boot:
- Trigger event:
- Repeated trigger:
- Mobile / low-end mode:
- Reduced motion / shake:
- Console/runtime errors:
```

## VFX QA Checklist Template

```md
## VFX QA Checklist

### Readability
- Reads at gameplay scale:
- Clear source and target:
- Clear danger / reward / impact meaning:
- Does not obscure hazards:

### Timing
- Anticipation is clear:
- Impact lands on the gameplay event:
- Decay does not linger too long:
- Input is not blocked:

### Performance
- Worst-case spawn count tested:
- Pooling / cleanup works:
- Overdraw acceptable:
- Post-processing cost acceptable:
- No runtime errors:

### Accessibility
- Reduced motion checked:
- Reduced shake checked:
- No rapid flashing:
- Important state readable without animation:
```

## Sound Design Brief Template

```md
## Sound Design Brief

### Mood
- ...

### Music Needs
- Main menu:
- Gameplay:
- Combat:
- Victory:
- Defeat:

### SFX Needs
- UI:
- Player action:
- Enemy action:
- Hit / damage:
- Reward:
- Warning:

### Mixing Notes
- Volume:
- Priority:
- Looping:
- Avoid:
```

## QA Test Report Template

```md
## QA Test Report

### Test Environment
- Engine / framework:
- Platform:
- Build / commit:
- Browser / device:
- Date:

### Test Results
| Test Item | Status | Notes |
|---|---|---|
| Launch / boot | Passed / Failed / Not run / Blocked | |
| Main menu | Passed / Failed / Not run / Blocked | |
| Core gameplay | Passed / Failed / Not run / Blocked | |
| UI flow | Passed / Failed / Not run / Blocked | |
| Save / load | Passed / Failed / Not run / Blocked | |
| Audio | Passed / Failed / Not run / Blocked | |
| Asset loading | Passed / Failed / Not run / Blocked | |
| Localization | Passed / Failed / Not run / Blocked | |
| Build / deployment | Passed / Failed / Not run / Blocked | |

### Bugs Found
- Severity:
- Repro steps:
- Expected:
- Actual:
- Notes:

### Not Run / Blocked
- Item:
- Reason:

### Risk
- ...
```

## Ruthless Playtester Report Template

- First impression
- What is fun
- What is boring
- What is unclear
- Where the pace drags
- Where feedback is weak
- Where UI blocks play
- What feels generic
- What should be cut
- What should be stronger
- Must-fix issues
- Suggested improvements
- Optional upgrades

## Refactor Plan Template

```md
## Refactor Plan

### Goal
- ...

### Current Problem
- ...

### Allowed Scope
- ...

### Not Allowed
- ...

### Safe Step Order
1. ...
2. ...
3. ...

### Risk Areas
- ...

### Tests Required
- ...

### Rollback Plan
- ...
```

## Engine-specific Verification Template

```md
## Engine Verification

### Web / HTML Canvas
- npm run check:
- npm run test:
- npm run build:
- Browser console:
- Network 404:
- Local smoke test:

### Unity
- Script compile:
- Console errors:
- Play mode:
- Scene references:
- Prefab references:

### Unreal
- Blueprint compile:
- PIE test:
- Asset references:
- Packaging risk:

### Godot
- Project launch:
- Scene loading:
- Signal connections:
- Autoload state:
```

## Codex Task Template

- Task objective
- Project context
- Files or areas to inspect first
- Allowed change scope
- Do-not-change scope
- Functional requirements
- Visual requirements
- UI visual design requirements
- UI motion requirements
- Gameplay VFX requirements
- Audio requirements
- Architecture requirements
- Test requirements
- Acceptance criteria
- Reporting format

## Final Development Report Template

- Summary
- Modified files
- Added files
- Deleted files
- Feature changes
- Architecture impact
- UI/UX changes
- UI visual design changes
- UI motion / game feel changes
- UI Motion / Game Feel:
- 動效工具:
- 動效風險:
- reduced motion / accessibility:
- Gameplay VFX / Technical VFX changes
- VFX tools:
- VFX risks:
- reduced shake / VFX accessibility:
- Visual asset changes
- Sound changes
- Tests run
- Test results
- Known risks
- Remaining work
- Ruthless playtester notes
