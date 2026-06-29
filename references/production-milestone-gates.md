# Production Milestone Gates

Use this reference when planning or reviewing a game project across multiple phases: prototype, vertical slice, alpha, beta, release candidate, public release, demo, portfolio build, or client acceptance.

This guide is not a contract, pricing, legal, or payment workflow. It is a production quality framework.

## Contents

- Core Rule
- When to Use
- Milestone Ladder
- Gate Criteria
- Change Control
- Risk Register
- Delivery Evidence

## Core Rule

A studio-quality game project should move through explicit gates. Each gate should state what is in scope, what is deferred, what evidence proves readiness, and what risks remain.

Do not treat "it runs" as release-ready.

## When to Use

Use this guide for:

- Client/studio production plans.
- Full Studio Audits that mention milestone, demo, public release, or delivery readiness.
- Roadmap Strategy Audits that need release gates.
- Requests to take a game from concept to implementation.
- Major feature sets that affect gameplay, UI, art, VFX, audio, save, or release packaging.

Do not use it for tiny Quick Check tasks.

## Milestone Ladder

### Concept Gate

Goal: prove the game direction is clear enough to plan.

Exit evidence:

- Client brief or project goal exists.
- Target player and platform are known or explicitly assumed.
- Core fantasy and core loop are stated.
- Two to four directions were considered when the request was vague.
- Recommended direction and main risk are stated.
- Prototype scope is small enough to build.

Not accepted:

- A feature wishlist without a playable loop.
- Art mood without gameplay purpose.
- Technology choice without scope.

### Prototype Gate

Goal: prove the core interaction can work.

Exit evidence:

- One playable loop exists or is fully specified.
- Controls, win/loss, fail/retry, and feedback are testable.
- Placeholder assets are labeled.
- Architecture has clear boundaries for gameplay, input, render, UI, audio, data, and tests.
- Known missing polish is recorded.

Not accepted:

- A tech demo with no player goal.
- Giant single-file growth with no module boundary.
- Placeholder UI presented as final.

### Vertical Slice Gate

Goal: prove the final quality bar in one narrow slice.

Exit evidence:

- One representative level, encounter, screen flow, or mode is complete enough to show the intended quality.
- Formal art direction is selected.
- UI visual direction and component states are implemented for the slice.
- Gameplay VFX, UI motion, and audio feedback support the loop.
- Save/settings and restart behavior are covered if relevant.
- QA pass includes boot, main flow, input, UI readability, asset loading, console/runtime errors, and known risks.

Not accepted:

- More content without one polished representative slice.
- Canvas placeholder rectangles as final UI.
- VFX that hides gameplay or owns game rules.

### Alpha Gate

Goal: prove the planned game is feature-complete enough for broad testing.

Exit evidence:

- MVP feature set is implemented or explicitly deferred.
- Major systems are integrated.
- Content pipeline is usable.
- UI flows cover main menu, gameplay, pause/settings, result, and restart as relevant.
- Save/settings/data config work as planned.
- Known bugs are tracked by severity.
- Performance risks are measured or bounded.

Not accepted:

- Missing critical flows.
- Untracked feature creep.
- No regression checklist.

### Beta Gate

Goal: stabilize and polish.

Exit evidence:

- No known blocker bugs.
- Major P1/P2 issues are fixed or explicitly accepted.
- Balance and playtest feedback are reviewed.
- Accessibility and reduced motion / reduced shake behavior are checked where relevant.
- Localization and text overflow risks are checked if text-heavy.
- Build/package path is repeatable.
- Release notes or delivery notes are drafted.

Not accepted:

- Adding major new systems instead of stabilizing.
- UI text clipping on common viewports.
- Unverified asset references or missing files.

### Release Candidate Gate

Goal: decide whether the build can ship or be handed to the client.

Exit evidence:

- Scope matches the accepted MVP or revised scope.
- Build boots cleanly.
- Main player flow passes.
- No known blocker or unaccepted high-severity bugs.
- Store/demo/portfolio screenshots do not show placeholder UI or assets unless intentionally labeled.
- Final report lists tests, risks, remaining work, and client decisions.

Not accepted:

- "Looks good to me" without test evidence.
- Missing acceptance criteria.
- Public presentation built from debug UI.

### Public Release / Client Acceptance Gate

Goal: hand off with evidence.

Exit evidence:

- Delivery report exists.
- QA status is explicit: `Passed`, `Failed`, `Not run`, or `Blocked`.
- Known risks and remaining work are named.
- Client decisions still needed are listed.
- Ruthless Playtester note is included when player experience changed.
- Release tag, changelog, README, or package metadata are aligned when publishing a skill or public repo.

Not accepted:

- Silent assumptions about client approval.
- Hidden test gaps.
- Version metadata that disagrees with docs.

## Gate Criteria

Each milestone should answer:

- What is the goal of this gate?
- What is included?
- What is deferred?
- What is explicitly not included?
- What evidence proves readiness?
- What tests were run?
- What risks remain?
- What needs client approval?

## Change Control

When the client changes scope:

- Restate the requested change.
- Identify affected gameplay, UI, art, VFX, audio, architecture, tests, schedule, and risk.
- State whether the current milestone can absorb it.
- If not, propose a revised scope or defer it.

Do not silently add large scope during implementation.

## Risk Register

Track risks in plain language:

- Risk:
- Affected milestone:
- Severity:
- Likelihood:
- Evidence:
- Mitigation:
- Owner or next action:

Common risks:

- Scope too broad for MVP.
- Art direction not selected.
- UI has no visual target.
- Single-file architecture is growing.
- VFX or motion hides gameplay.
- Save/data migration not planned.
- Performance not measured.
- QA only covers happy path.

## Delivery Evidence

A delivery report should cite concrete evidence:

- Files changed:
- Build/test commands:
- Screenshots or visual comparison when relevant:
- QA results:
- Playtest notes:
- Known risks:
- Deferred work:
- Client decisions:

If evidence is missing, mark it missing instead of implying the gate passed.
