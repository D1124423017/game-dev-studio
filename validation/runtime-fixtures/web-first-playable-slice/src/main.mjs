import { createGameState, resetRun } from './core/state.mjs';
import { attack, consumeEvents, setInput, startGame, tickGame } from './gameplay/systems.mjs';
import { createCanvasRenderer } from './render/canvasRenderer.mjs';
import { applyGameplayEventsToEffects, tickEffects } from './render/vfx/effects.mjs';
import { mapEventsToAudio } from './audio/audioEvents.mjs';
import { createUiController } from './ui/uiController.mjs';

const state = createGameState();
const renderer = createCanvasRenderer(document.querySelector('#game-canvas'));
const keys = new Set();

function refreshInput() {
  setInput(state, {
    x: (keys.has('ArrowRight') || keys.has('KeyD') ? 1 : 0) - (keys.has('ArrowLeft') || keys.has('KeyA') ? 1 : 0),
    y: (keys.has('ArrowDown') || keys.has('KeyS') ? 1 : 0) - (keys.has('ArrowUp') || keys.has('KeyW') ? 1 : 0)
  });
}

const ui = createUiController(document, {
  onStart() {
    startGame(state);
  },
  onAttack() {
    attack(state);
  },
  onRestart() {
    resetRun(state);
  }
});

document.addEventListener('keydown', (event) => {
  keys.add(event.code);
  if (event.code === 'Space') {
    attack(state);
  }
  refreshInput();
});

document.addEventListener('keyup', (event) => {
  keys.delete(event.code);
  refreshInput();
});

let previous = performance.now();

function frame(now) {
  const delta = Math.min(0.05, (now - previous) / 1000);
  previous = now;
  tickGame(state, delta);
  const events = consumeEvents(state);
  applyGameplayEventsToEffects(state, events);
  mapEventsToAudio(events);
  tickEffects(state, delta);
  renderer.render(state);
  ui.update(state);
  requestAnimationFrame(frame);
}

renderer.render(state);
ui.update(state);
requestAnimationFrame(frame);
