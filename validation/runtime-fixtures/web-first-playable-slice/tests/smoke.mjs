import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import assert from 'node:assert/strict';
import { createGameState } from '../src/core/state.mjs';
import { attack, setInput, startGame, tickGame } from '../src/gameplay/systems.mjs';
import { applyGameplayEventsToEffects } from '../src/render/vfx/effects.mjs';
import { mapEventsToAudio } from '../src/audio/audioEvents.mjs';

const fixtureRoot = resolve(import.meta.dirname, '..');

function fixturePath(...parts) {
  return join(fixtureRoot, ...parts);
}

for (const requiredFile of [
  'index.html',
  'src/core/state.mjs',
  'src/gameplay/systems.mjs',
  'src/render/canvasRenderer.mjs',
  'src/render/vfx/effects.mjs',
  'src/ui/uiController.mjs',
  'src/ui/visual/theme.css',
  'src/audio/audioEvents.mjs',
  'src/data/config.mjs'
]) {
  assert.equal(existsSync(fixturePath(requiredFile)), true, `Missing fixture file: ${requiredFile}`);
}

const html = readFileSync(fixturePath('index.html'), 'utf8');
const css = readFileSync(fixturePath('src/ui/visual/theme.css'), 'utf8');
const renderer = readFileSync(fixturePath('src/render/canvasRenderer.mjs'), 'utf8');

assert.match(html, /<canvas id="game-canvas"/, 'Canvas gameplay renderer is present');
assert.match(html, /hud-panel/, 'DOM HUD is present outside the canvas');
assert.match(css, /font-family:/, 'UI defines typography');
assert.match(css, /button:hover/, 'UI defines button state feedback');
assert.match(css, /prefers-reduced-motion/, 'UI defines reduced-motion fallback');
assert.doesNotMatch(renderer, /querySelector|addEventListener/, 'Renderer does not own DOM UI behavior');

const state = createGameState();
assert.equal(state.phase, 'menu');
startGame(state);
assert.equal(state.phase, 'playing');

setInput(state, { x: 1, y: 0 });
tickGame(state, 0.2);
assert.ok(state.player.x > 150, 'Player moves through gameplay system');
setInput(state, { x: 0, y: 0 });

state.player.x = state.enemy.x - 20;
state.player.y = state.enemy.y;

let audioEvents = [];
for (let i = 0; i < 8 && state.phase === 'playing'; i += 1) {
  attack(state);
  audioEvents = audioEvents.concat(mapEventsToAudio(state.events));
  applyGameplayEventsToEffects(state, state.events);
  state.events = [];
  tickGame(state, 0.35);
}

assert.equal(state.phase, 'result', 'Combat reaches result phase');
assert.equal(state.result, 'victory', 'Player can defeat enemy');
assert.ok(state.effects.some((effect) => effect.type === 'spark' || effect.type === 'burst'), 'VFX reacts to gameplay events');
assert.ok(audioEvents.includes('combat.enemy.hit'), 'Audio event mapping reacts to combat');

console.log('web-first-playable-slice smoke: passed');
