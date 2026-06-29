# Evidence-Based Case Studies

These case studies apply `$game-dev-studio` to public repositories from three different game technology stacks.

They are not endorsements, full code reviews, or substitutes for running each project. Each case records the inspected source commit, review scope, relevant references, verified evidence, recommendations, and checks that were not run.

| Case | Stack | Mode | Source commit |
|---|---|---|---|
| [Phaser Vite template](phaser-vite-focused-review.md) | Phaser 4 / Vite / JavaScript | Focused Review | `bf90a1f4940d74e0f60f9c585024c744a21f86d4` |
| [Godot Dodge the Creeps](godot-dodge-the-creeps-audit.md) | Godot / GDScript | Full Studio Audit | `4e29fc322925582b3b528571cc139b1990860157` |
| [Unity Open Project #1](unity-open-project-roadmap.md) | Unity / C# | Roadmap Strategy Audit | `608eac98df29cd97821a6115cd52dfb9027345b1` |

## Client Studio Workflow Trace

The [Client Studio End-to-End Trace](client-studio-end-to-end-trace.md) documents the expected shape of a client-commissioned workflow from brief intake through implementation delivery and acceptance reporting.

It is not runtime proof. It exists to make the expected end-to-end behavior explicit before running the same workflow on a real game repository.

For `v1.0.0`, follow the proof requirements in [../validation/v1.0-acceptance-proof-protocol.md](../validation/v1.0-acceptance-proof-protocol.md). The first stable release should be backed by an independently scoped game project, not only by this trace or the local runtime fixture.

## Case Study Rules

- Pin the inspected source commit.
- Name the files and directories used as evidence.
- Separate verified observations from recommendations.
- Mark builds, runtime checks, and playtests as `Not run` when they were not executed.
- Keep project-specific findings inside the case study. Do not move them into the general-purpose Skill rules.
