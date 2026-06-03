# Gameplay VFX / Technical VFX Guide

Use this guide when a task involves gameplay visual effects, technical effects, particles, shaders, sprite effects, hit sparks, explosions, trails, beams, screen shake, camera impulse, post-processing, Niagara, Unity VFX Graph, Godot particles, or any player-facing effect tied to gameplay feedback.

## Core Principle

Gameplay VFX is communication, not decoration.

Every effect should answer at least one player question:

- What happened?
- Who caused it?
- Where did it happen?
- Was it good, bad, dangerous, blocked, critical, or rewarding?
- What should the player do next?

Do not treat VFX as "draw some circles on canvas." Canvas can be a valid renderer, but production-quality effects need art direction, timing, shape, color, readability, performance limits, and integration rules.

## VFX Categories

### Must-have gameplay feedback

Use these when the player needs instant clarity:

- Hit impact
- Damage taken
- Damage dealt
- Enemy defeated
- Player death
- Parry / block / dodge
- Skill cast
- Projectile spawn and impact
- Danger warning
- Pickup / reward
- Level up / upgrade acquired

### Should-have game feel

Use these to make the game feel responsive and physical:

- Slash trail
- Muzzle flash
- Dust puff
- Landing impact
- Footstep or movement trail
- Charge-up anticipation
- Camera shake or impulse
- Hit pause
- Combo pulse
- Critical hit burst

### Optional spectacle

Use these only when they do not harm readability or performance:

- Full-screen ultimate effect
- Large reward burst
- Environmental particles
- Bloom-heavy magic aura
- Screen-space distortion
- Cinematic transition
- Long looped ambient effect

## Shape, Timing, Color

Review VFX with this framework:

- Shape: silhouette, direction, mass, scale, and whether the effect reads at gameplay size.
- Timing: anticipation, impact, follow-through, decay, and whether the effect supports input rhythm.
- Color: value contrast, saturation hierarchy, team/faction language, danger language, and background readability.

If an effect does not read in grayscale, color alone will not save it.

## Runtime Route Selection

### 2D Web Game

Use this route for Phaser, PixiJS, Canvas, or DOM-overlay browser games:

- Sprite VFX / flipbook: attacks, explosions, magic impacts, projectile impacts, slashes.
- Particle textures: sparks, smoke, dust, debris, embers, pickups.
- Canvas gameplay effects: simple in-world particles, hit flashes, board effects, screen-space gameplay feedback.
- DOM / CSS / GSAP: UI reward, result screen flourish, menu reveal, button feedback.
- Avoid drawing formal UI or text-heavy effects entirely in canvas when DOM / React would be clearer.

Recommended modules:

```txt
src/render/vfx/
src/render/particles/
src/render/effects/
src/render/camera/
src/assets/vfx/
src/ui/fx/
```

### 3D Web Game

Use this route for Three.js, React Three Fiber, Babylon.js, or PlayCanvas:

- Particle systems for sparks, dust, smoke, embers, trails, and reward bursts.
- Shader/material animation for dissolve, shield, force field, glow, distortion, and hit flash.
- Post-processing for bloom, vignette, color grading, shockwave, or damage state.
- Camera impulse or shake for impact, but keep it short and readable.
- Keep HUD and menus in DOM / React unless the UI must be spatial or diegetic.

Recommended modules:

```txt
src/render/effects/
src/render/particles/
src/render/materials/
src/render/postprocessing/
src/render/camera/
src/presentation/vfx/
```

### Unity

Use engine-native systems:

- Particle System for common real-time effects.
- VFX Graph for GPU-heavy or high-volume effects.
- Shader Graph or custom shaders for dissolve, distortion, force field, shield, and elemental surfaces.
- Timeline, Animator, or tween tools for sequenced presentation.
- Cinemachine impulse for camera feedback.

Keep gameplay state, damage resolution, and score changes outside particle callbacks.

### Unreal

Use engine-native systems:

- Niagara for particles, ribbons, beams, trails, sparks, smoke, and magic effects.
- Materials and material instances for dissolve, hit flash, shields, distortion, and impact decals.
- Post Process volumes or materials for screen feedback.
- Camera Shake / Camera Animation for impact.
- UMG animation for UI effects, not gameplay VFX.

Do not put match rules or combat resolution inside Niagara graphs or Widget animation events.

### Godot

Use engine-native systems:

- GPUParticles2D / GPUParticles3D for high-volume effects.
- CPUParticles2D / CPUParticles3D for simpler effects or compatibility.
- ShaderMaterial for dissolve, aura, shield, hit flash, and distortion.
- AnimationPlayer and Tween for repeatable timing.
- Camera2D / Camera3D shake or impulse scripts for impact feedback.

Keep particle nodes, shader parameters, and camera shake in presentation scripts, not core gameplay rules.

## Asset Generation Guidance

For player-visible VFX assets, prefer direct image generation or a complete generation brief when generation is available.

Useful generated assets include:

- Impact sprite sheet
- Explosion flipbook
- Slash trail sprite
- Projectile sprite
- Particle texture atlas
- Magic circle / sigil
- Smoke puff
- Hit spark
- Pickup burst
- Elemental aura frame
- UI reward burst frame

For animated effects, specify:

- Effect purpose
- Trigger event
- Frame count
- FPS
- Cell size
- Rows and columns
- Transparent background
- Anchor point
- Loop or one-shot
- Additive / alpha blend expectation
- Start, impact, decay, and end frames
- Avoid list

## Game Feel Pairing

VFX should often pair with deterministic game-feel code:

- Hit pause
- Screen shake
- Controller vibration where supported
- Sound effect
- Damage number timing
- Enemy flash
- UI pulse
- Camera impulse
- Slow motion for rare moments

The gameplay result should resolve in core logic. VFX should subscribe to that result and present it.

## Performance Rules

- Budget VFX by platform and target FPS.
- Avoid unbounded particles.
- Avoid overdraw-heavy transparent layers on mobile.
- Keep bloom, blur, distortion, and full-screen passes measurable.
- Reuse particle textures and materials.
- Pool frequently spawned effects.
- Destroy, recycle, or disable effects after completion.
- Keep effect LODs for large scenes or repeated enemies.
- Test worst-case moments, not only a single effect in isolation.

## Accessibility and Readability

- Avoid rapid flashing.
- Avoid full-screen shake for common actions.
- Provide reduced motion or reduced shake options.
- Ensure important state remains readable without animation.
- Keep danger colors consistent.
- Do not hide enemy attacks behind friendly effects.
- Keep VFX readable against the actual background, not only on a dark test canvas.

## Common Anti-Patterns

- Canvas-only circles reported as finished VFX.
- Beautiful screenshots that fail at gameplay size.
- Long effects that block input.
- Bloom or distortion that hides enemy attacks.
- Every action using the same color and timing.
- Particle callbacks owning damage, score, or win/loss logic.
- Adding a heavy library for one small sparkle.
- No reduced motion or shake control.
- No pooling for repeated hit effects.
- Effects living inside giant gameplay files.

## VFX Review Template

```md
## Gameplay VFX Review

### Current VFX State
- Existing effects:
- Missing feedback:
- Placeholder effects:
- Canvas-only risks:

### Must-have Effects
| Event | Effect | Purpose | Tool / System | Priority |
|---|---|---|---|---|
| Hit impact | Spark + flash + tiny shake | Confirm damage | Sprite / particle / engine-native VFX | Must |

### Should-have Effects
- ...

### Optional Spectacle
- ...

### Tooling Recommendation
- 2D sprite / flipbook:
- Particle system:
- Shader / material:
- Post-processing:
- Camera impulse / shake:
- UI FX:
- Image generation needed:

### Architecture Notes
- Core gameplay event:
- Presentation subscriber:
- Suggested files:
- Pooling / cleanup:

### Performance and Accessibility
- Overdraw risk:
- Mobile risk:
- Reduced motion / reduced shake:
- Readability risk:

### Acceptance Criteria
- Effect communicates gameplay state:
- Effect does not block input:
- Effect does not hide hazards:
- Effect performs under worst-case spawn count:
- No console/runtime errors:
```
