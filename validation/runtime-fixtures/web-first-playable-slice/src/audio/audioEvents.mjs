export const audioEventMap = {
  'game-started': 'ui.confirm.start',
  'player-attack': 'combat.player.attack',
  'enemy-hit': 'combat.enemy.hit',
  'player-hit': 'combat.player.hit',
  'enemy-defeated': 'result.victory',
  'player-defeated': 'result.defeat'
};

export function mapEventsToAudio(events) {
  return events.map((event) => audioEventMap[event.type]).filter(Boolean);
}
