# Contributing to Game Dev Studio

Thank you for helping improve Game Dev Studio.

## Project Goal

Game Dev Studio is a Codex / AI Agent skill that works like a full game development studio team.

It is designed to help AI agents support game development beyond code generation, including production planning, game design, programming architecture, UI/UX review, game UI visual design, gameplay VFX, art direction, sound planning, QA, and ruthless playtesting.

As of the Client Studio Production Workflow, it should also support client-style briefs where the user is the client, stakeholder, or product owner and the Skill behaves like a professional game studio from intake through proposal, scope, art direction, architecture, production tasks, QA, and acceptance.

It should also preserve the studio art direction pipeline: client-ready UI and visual work should use selected visual targets, approved references, style bibles, Product Design plugin coordination when available, and design QA rather than accepting placeholder presentation as final.

Implementation work should preserve the same studio discipline through file edits: repo intake, scoped production slices, architecture boundaries, QA evidence, playtest notes, client decisions, and delivery reports.

## How to Contribute

Useful contributions include:

- Improve `SKILL.md` instructions and role behavior.
- Improve reference documents in `references/`.
- Add or refine architecture guidance for different engines.
- Add or refine game design, UI/UX, visual art, gameplay VFX, audio, QA, and playtesting templates.
- Report unclear behavior, missing workflows, or problems encountered while using `$game-dev-studio`.

## Contribution Rules

Keep this skill general-purpose and reusable.

- Do not add private rules for one specific game project.
- Do not make the skill only useful for Unity or any single engine.
- Do not remove the multi-role game development team positioning.
- Do not remove the Client Studio Production Workflow or the rule that the user has final client decision authority.
- Do not remove the visual target / style bible requirement for client-ready UI and art.
- Do not remove production milestone gates for prototype, vertical slice, alpha, beta, release candidate, and client acceptance work.
- Do not remove implementation delivery evidence for scoped builds, QA, playtesting, acceptance, and final reports.
- Do not remove the principle that visual tasks should prioritize image generation models or complete image-generation briefs.
- Do not remove architecture planning or the rule against giant single-file implementations.
- Do not remove the Gameplay VFX / Technical VFX role or the principle that VFX should not be mixed into gameplay core logic.
- Do not remove token-conscious behavior such as Quick Check, Focused Review, Full Studio Audit, Roadmap Strategy Audit, and lazy reference loading.
- Do not remove the Ruthless Playtester role.
- Do not rename the skill or change `$game-dev-studio` usage.
- Keep `SKILL.md` short and router-like. Put detailed guidance in references so routine tasks stay lightweight.

## Markdown Style

- Use clear headings.
- Keep documentation neutral, public, and maintainable.
- Write primarily in English.
- Add Traditional Chinese only when it improves clarity for bilingual users.
- Keep Markdown as real multi-line text, not compressed into one long line.

## Pull Request Checklist

Before opening a pull request, check:

- Markdown files are real multi-line files.
- No deprecated skill name remains.
- `$game-dev-studio` is used correctly.
- `git diff --check` passes.
- `node scripts/validate-skill.mjs` passes.
- README language links work between `README.md` and `README.zh-TW.md`.
- The skill remains engine-agnostic.
- Routine tasks still default to lightweight output and lazy reference loading.
- Roadmap work remains evidence-based and does not become an unlimited feature wishlist.
- Client/studio work still starts with brief, proposal, scope, art direction, architecture, and acceptance before implementation.
- Client-ready visual work still has a selected visual target, style bible, or approved reference before production implementation.
- Multi-phase production work still defines milestone gate evidence and client approval points.
- Implementation work still includes repo intake, scoped slice planning, test evidence, known risks, and client decisions.
- `SKILL.md` remains concise and does not duplicate long reference content.
- `.skill` package files are not committed.
