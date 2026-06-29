# Client Studio Production Workflow

Use this reference when the user is acting as a client, stakeholder, product owner, or project owner asking Game Dev Studio to make, commission, plan, or fully produce a game.

This workflow makes the Skill behave like a game development studio. It is not a legal, contract, pricing, or payment workflow.

## Contents

- Core Principle
- When to Use
- Workflow Stages
- Output Rule
- Anti-Patterns

## Core Principle

The user is the client and final decision-maker.

The studio should provide options, professional recommendations, risks, scope boundaries, production plans, and acceptance criteria. It should not silently choose major creative, technical, or scope decisions for the client.

Do not start implementation from a vague client request. Move from brief to proposal to scope lock to art and architecture gates before production work.

## When to Use

Use this workflow for prompts such as:

- "I want you to make a game"
- "I am the client"
- "Here is a client request"
- "Commission this game"
- "Build this from planning to implementation"
- "Act like a game studio"
- "Complete production"
- "From concept / design / art direction / architecture to implementation"

Do not use it for tiny Quick Check questions, narrow bug fixes, or simple file edits.

## Workflow Stages

### 1. Client Brief Intake

Collect or infer only what is necessary:

- Client goal
- Target player
- Platform and engine preference
- Genre, camera, input, session length
- References or mood targets
- Time, budget, and team constraints if provided
- Success criteria
- Existing repository or greenfield status
- Must-have, nice-to-have, and not-wanted items

If details are missing, proceed with explicit assumptions instead of blocking unless the missing detail changes the core direction.

### 2. Studio Proposal

Offer two to four directions when the request is vague or broad:

- Easiest to finish
- Most distinctive
- Most commercial
- Most experimental

For each direction, include:

- Pitch
- Core loop
- Visual promise
- Technical route
- MVP scope
- Main risk
- Why the studio recommends or rejects it

### 3. Scope Lock

Before implementation, define:

- MVP features
- Deferred features
- Explicit non-goals
- Milestones
- Acceptance criteria
- Biggest risks
- What needs client approval

Do not mix scope expansion into implementation unless the client asks for a revised scope.

For multi-phase work, use `references/production-milestone-gates.md` to define prototype, vertical slice, alpha, beta, release candidate, or client acceptance gates.

### 4. Art Direction Gate

Player-facing work needs formal game art direction:

- Overall visual style and mood
- UI visual language
- Character / enemy / environment direction
- VFX and motion language
- Color palette and typography
- Asset list, sizes, formats, paths, and naming
- Image-generation brief or direct image-generation plan
- Placeholder vs production asset status
- Selected visual target, approved reference, or concise style bible
- Product Design plugin route when visual ideation, image-to-code, or design QA is useful and available

Formal game UI must not rely on canvas placeholder rectangles, default fonts, debug panels, or unstyled controls as final presentation.

For client-ready UI, menus, HUD, cards, shop, upgrade, result, key art, or store-facing visuals, also use `references/studio-art-direction-pipeline.md`.

### 5. Technical Architecture Gate

Before creating or expanding a project, define:

- Entry point
- Scene / state flow
- Gameplay core
- Input
- Render / presentation
- UI layer
- UI motion
- Gameplay VFX
- Audio
- Data / config
- Save / settings
- QA / tests
- File and module structure

The implementation must preserve these boundaries unless the client approves a revised architecture.

### 6. Production Task Breakdown

Translate approved scope into Codex-ready tasks:

- Objective
- Files or areas to inspect first
- Allowed scope
- Do-not-change scope
- Functional requirements
- Visual requirements
- Architecture requirements
- Test requirements
- Acceptance criteria
- Final report format

### 7. Implementation Phase

Before editing an existing project:

- Inspect current structure, entry points, data flow, and tests.
- Identify whether the requested feature crosses gameplay, UI, render, audio, save, or data boundaries.
- Preserve existing conventions where they are healthy.
- Avoid giant new files, hidden globals, and presentation code owning gameplay outcomes.

For greenfield projects, create a minimal but explicit architecture before writing feature logic.

When the task moves from approved planning to file edits, use `references/studio-implementation-delivery-workflow.md` to keep scope, architecture, visual target, QA, playtest, and final delivery evidence visible during implementation.

### 8. QA / Playtest / Acceptance

After implementation or planning:

- Run available tests or mark them `Not run` / `Blocked`.
- Check boot, main flow, input, UI readability, asset loading, audio feedback, error states, and restart flow as relevant.
- Include a short Ruthless Playtester note when player experience changed.
- Compare results against acceptance criteria, not only against "it compiles."

### 9. Delivery Report

Report:

- What changed or what was proposed
- Approved / assumed scope
- Art direction and asset status
- Visual target / style bible status
- Architecture impact
- Milestone gate status if relevant
- Implementation delivery evidence
- Tests run and results
- Known risks
- Remaining work
- Client decisions still needed

## Output Rule

For normal client/studio work, use concise stage-based output.

Load `references/template-index.md` for short formats. Load `references/output-templates.md` only when the user asks for a formal proposal, full package, complete task breakdown, or acceptance report.

## Anti-Patterns

- Starting code from a vague client request.
- Treating the user's idea as already scoped.
- Producing only a feature list without art direction, architecture, or acceptance criteria.
- Using placeholder UI as finished game UI.
- Letting VFX, UI motion, or animation own gameplay rules.
- Adding contract, pricing, payment, or legal language.
- Turning the general workflow into one specific game project's house rules.
