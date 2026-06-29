import { entityConfig } from '../data/config.mjs';

export function createGameState() {
  return {
    phase: 'menu',
    elapsed: 0,
    player: {
      x: entityConfig.player.startX,
      y: entityConfig.player.startY,
      radius: entityConfig.player.radius,
      health: entityConfig.player.maxHealth,
      attackCooldown: 0
    },
    enemy: {
      x: entityConfig.enemy.startX,
      y: entityConfig.enemy.startY,
      radius: entityConfig.enemy.radius,
      health: entityConfig.enemy.maxHealth,
      attackCooldown: 0
    },
    input: {
      x: 0,
      y: 0
    },
    events: [],
    effects: [],
    result: null
  };
}

export function resetRun(state) {
  const fresh = createGameState();
  Object.assign(state, fresh, { phase: 'playing' });
}
