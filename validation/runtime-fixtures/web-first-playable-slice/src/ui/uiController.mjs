export function createUiController(documentRef, handlers) {
  const refs = {
    menu: documentRef.querySelector('#menu-panel'),
    result: documentRef.querySelector('#result-panel'),
    resultTitle: documentRef.querySelector('#result-title'),
    resultCopy: documentRef.querySelector('#result-copy'),
    playerHealth: documentRef.querySelector('#player-health'),
    enemyHealth: documentRef.querySelector('#enemy-health'),
    objective: documentRef.querySelector('#objective-text'),
    start: documentRef.querySelector('#start-button'),
    attack: documentRef.querySelector('#attack-button'),
    restart: documentRef.querySelector('#restart-button')
  };

  refs.start.addEventListener('click', handlers.onStart);
  refs.attack.addEventListener('click', handlers.onAttack);
  refs.restart.addEventListener('click', handlers.onRestart);

  return {
    update(state) {
      refs.playerHealth.textContent = String(state.player.health);
      refs.enemyHealth.textContent = String(state.enemy.health);
      refs.objective.textContent = state.phase === 'playing' ? 'Defeat the drone' : 'Press start';
      refs.menu.classList.toggle('is-hidden', state.phase !== 'menu');
      refs.result.classList.toggle('is-hidden', state.phase !== 'result');
      if (state.phase === 'result') {
        refs.resultTitle.textContent = state.result === 'victory' ? 'Victory' : 'Defeat';
        refs.resultCopy.textContent = state.result === 'victory'
          ? 'The first playable slice reached its win condition.'
          : 'The drone won this run. Restart and close distance carefully.';
      }
    }
  };
}
