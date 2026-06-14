# Review Modes

Use this file when deciding how much Game Dev Studio process to apply.

## Quick Check

Use by default.

Best for:

- Small questions
- Narrow reviews
- Minor UI, VFX, design, or architecture advice
- "Should I do X?" decisions
- Follow-up questions

Reference loading:

- Do not read references by default.
- Read one reference only if the task clearly needs it.

Output:

- 3-7 bullets or short paragraphs.
- Include only relevant roles.
- Ruthless Playtester note is optional and should be 1-3 lines.

Avoid:

- Full team role-by-role output.
- Long templates.
- Broad refactor plans.
- Reading all references.

## Focused Review

Use when one or two domains need depth.

Best for:

- Architecture review
- UI visual review
- UI motion / game feel review
- Gameplay VFX review
- Visual asset planning
- QA pass
- Ruthless playtest pass

Reference loading:

- Read only the directly relevant reference.
- Add `references/template-index.md` if a structured output is needed.
- Read `references/output-templates.md` only for formal deliverables.

Output:

- Findings first.
- Must-fix / should-improve / optional when reviewing quality.
- Clear next action and test or validation note.

## Full Studio Audit

Use only when the user asks for a full audit or when the task is broad enough to need whole-team thinking.

Best for:

- Vague new game ideas
- MVP planning
- Major milestone review
- Full project review
- Public release readiness
- Portfolio or demo readiness

Reference loading:

- Start with `references/workflow.md`.
- Then load only the references needed by the audit findings.
- Do not load every reference just because Full Studio Audit is active.

Output:

- Producer summary
- Game design review
- Architecture review
- UI/UX and UI visual review
- Motion and VFX review if relevant
- Art and audio notes if relevant
- QA risks
- Ruthless Playtester notes
- Top priorities

## Roadmap Strategy Audit

Use when the main question is what the project should do next, not how to implement one feature.

Best for:

- Maturity assessment
- Continue adding features vs enter stabilization
- Version and release roadmaps
- Portfolio, demo, early access, or v1 readiness
- Choosing between expansion, refactor, validation, polish, and release
- Defining a focused 30-day plan

Reference loading:

- Read `references/roadmap-strategy-audit.md`.
- Inspect current repository evidence such as code, tests, examples, changelog, release state, and user feedback.
- Add `references/workflow.md` only when project phases or MVP scope need deeper review.
- Load architecture, UI, visual, motion, VFX, QA, or playtesting references only when evidence shows that domain affects the strategy decision.

Output:

- Final goal
- Current maturity with evidence
- Continue / stabilize / refactor / validate / release decision
- Largest gaps and direct risks
- Prioritized version roadmap
- Explicit "do not do now" list
- Five to seven actions for the next 30 days

Avoid:

- Unlimited feature wishlists
- Treating documentation volume as proof of quality
- Recommending a major version without validation evidence
- Reading all references by default
- Turning a general skill or game into one-project-specific guidance

## Mode Selection Rule

If in doubt, choose the lighter mode and say what would trigger a deeper review.
