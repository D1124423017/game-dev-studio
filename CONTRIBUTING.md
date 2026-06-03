# Contributing to Game Dev Studio

Thank you for helping improve Game Dev Studio.

## Project Goal

Game Dev Studio is a Codex / AI Agent skill that works like a full game development studio team.

It is designed to help AI agents support game development beyond code generation, including production planning, game design, programming architecture, UI/UX review, game UI visual design, gameplay VFX, art direction, sound planning, QA, and ruthless playtesting.

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
- Do not remove the principle that visual tasks should prioritize image generation models or complete image-generation briefs.
- Do not remove architecture planning or the rule against giant single-file implementations.
- Do not remove the Gameplay VFX / Technical VFX role or the principle that VFX should not be mixed into gameplay core logic.
- Do not remove token-conscious behavior such as Quick Check, Focused Review, Full Studio Audit, and lazy reference loading.
- Do not remove the Ruthless Playtester role.
- Do not rename the skill or change `$game-dev-studio` usage.

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
- README language links work between `README.md` and `README.zh-TW.md`.
- The skill remains engine-agnostic.
- Routine tasks still default to lightweight output and lazy reference loading.
- `.skill` package files are not committed.
