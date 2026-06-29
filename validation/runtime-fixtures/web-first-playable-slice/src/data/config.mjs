export const arenaConfig = {
  width: 640,
  height: 360,
  playerSpeed: 180,
  attackRange: 58,
  attackDamage: 20,
  attackCooldown: 0.28,
  enemyContactDamage: 10,
  enemyAttackCooldown: 0.72
};

export const entityConfig = {
  player: {
    radius: 16,
    maxHealth: 100,
    startX: 150,
    startY: 180
  },
  enemy: {
    radius: 18,
    maxHealth: 60,
    startX: 460,
    startY: 180
  }
};
