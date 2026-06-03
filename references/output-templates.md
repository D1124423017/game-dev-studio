# Output Templates

Use these templates when a user asks for a structured plan, review, brief, task, test report, refactor plan, or final report. Keep the headings, but omit sections that are not relevant to the current task.

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
- UI motion requirements
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
- UI motion / game feel changes
- Visual asset changes
- Sound changes
- Tests run
- Test results
- Known risks
- Remaining work
- Ruthless playtester notes
