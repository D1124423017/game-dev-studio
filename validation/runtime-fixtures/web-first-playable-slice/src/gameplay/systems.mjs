import { arenaConfig } from '../data/config.mjs';

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function pushEvent(state, type, payload = {}) {
  state.events.push({ type, payload });
}

export function startGame(state) {
  state.phase = 'playing';
  state.result = null;
  pushEvent(state, 'game-started');
}

export function setInput(state, input) {
  state.input.x = clamp(input.x ?? 0, -1, 1);
  state.input.y = clamp(input.y ?? 0, -1, 1);
}

export function attack(state) {
  if (state.phase !== 'playing' || state.player.attackCooldown > 0) {
    return false;
  }

  state.player.attackCooldown = arenaConfig.attackCooldown;
  pushEvent(state, 'player-attack', { x: state.player.x, y: state.player.y });

  if (distance(state.player, state.enemy) <= arenaConfig.attackRange + state.enemy.radius) {
    state.enemy.health = Math.max(0, state.enemy.health - arenaConfig.attackDamage);
    pushEvent(state, 'enemy-hit', { x: state.enemy.x, y: state.enemy.y, health: state.enemy.health });
    if (state.enemy.health === 0) {
      state.phase = 'result';
      state.result = 'victory';
      pushEvent(state, 'enemy-defeated');
    }
  }

  return true;
}

export function tickGame(state, deltaSeconds) {
  if (state.phase !== 'playing') {
    return;
  }

  state.elapsed += deltaSeconds;
  state.player.attackCooldown = Math.max(0, state.player.attackCooldown - deltaSeconds);
  state.enemy.attackCooldown = Math.max(0, state.enemy.attackCooldown - deltaSeconds);

  const length = Math.hypot(state.input.x, state.input.y) || 1;
  state.player.x = clamp(
    state.player.x + (state.input.x / length) * arenaConfig.playerSpeed * deltaSeconds,
    state.player.radius,
    arenaConfig.width - state.player.radius
  );
  state.player.y = clamp(
    state.player.y + (state.input.y / length) * arenaConfig.playerSpeed * deltaSeconds,
    state.player.radius,
    arenaConfig.height - state.player.radius
  );

  if (distance(state.player, state.enemy) <= state.player.radius + state.enemy.radius + 4 && state.enemy.attackCooldown === 0) {
    state.enemy.attackCooldown = arenaConfig.enemyAttackCooldown;
    state.player.health = Math.max(0, state.player.health - arenaConfig.enemyContactDamage);
    pushEvent(state, 'player-hit', { x: state.player.x, y: state.player.y, health: state.player.health });
    if (state.player.health === 0) {
      state.phase = 'result';
      state.result = 'defeat';
      pushEvent(state, 'player-defeated');
    }
  }
}

export function consumeEvents(state) {
  const events = state.events;
  state.events = [];
  return events;
}
