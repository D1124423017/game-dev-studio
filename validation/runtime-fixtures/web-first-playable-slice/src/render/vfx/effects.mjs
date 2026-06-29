export function applyGameplayEventsToEffects(state, events) {
  for (const event of events) {
    if (event.type === 'enemy-hit') {
      state.effects.push({ type: 'spark', x: event.payload.x, y: event.payload.y, age: 0, life: 0.34 });
    }
    if (event.type === 'player-hit') {
      state.effects.push({ type: 'danger', x: event.payload.x, y: event.payload.y, age: 0, life: 0.28 });
    }
    if (event.type === 'enemy-defeated') {
      state.effects.push({ type: 'burst', x: state.enemy.x, y: state.enemy.y, age: 0, life: 0.7 });
    }
  }
}

export function tickEffects(state, deltaSeconds) {
  for (const effect of state.effects) {
    effect.age += deltaSeconds;
  }
  state.effects = state.effects.filter((effect) => effect.age < effect.life);
}
