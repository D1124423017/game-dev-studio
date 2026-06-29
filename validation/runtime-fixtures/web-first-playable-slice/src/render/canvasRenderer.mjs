import { arenaConfig } from '../data/config.mjs';

function circle(ctx, x, y, radius, fill, stroke = null) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = fill;
  ctx.fill();
  if (stroke) {
    ctx.lineWidth = 3;
    ctx.strokeStyle = stroke;
    ctx.stroke();
  }
}

function drawEffects(ctx, effects) {
  for (const effect of effects) {
    const progress = effect.age / effect.life;
    const alpha = Math.max(0, 1 - progress);
    const radius = 10 + progress * 34;
    ctx.save();
    ctx.globalAlpha = alpha;
    if (effect.type === 'spark') {
      circle(ctx, effect.x, effect.y, radius, 'rgba(255, 209, 102, 0.22)', '#ffd166');
    } else if (effect.type === 'danger') {
      circle(ctx, effect.x, effect.y, radius, 'rgba(255, 111, 97, 0.2)', '#ff6f61');
    } else {
      circle(ctx, effect.x, effect.y, radius, 'rgba(66, 217, 255, 0.18)', '#42d9ff');
    }
    ctx.restore();
  }
}

export function createCanvasRenderer(canvas) {
  const ctx = canvas.getContext('2d');

  return {
    render(state) {
      ctx.clearRect(0, 0, arenaConfig.width, arenaConfig.height);
      ctx.fillStyle = '#080c12';
      ctx.fillRect(0, 0, arenaConfig.width, arenaConfig.height);

      ctx.strokeStyle = 'rgba(66, 217, 255, 0.18)';
      ctx.lineWidth = 1;
      for (let x = 40; x < arenaConfig.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, arenaConfig.height);
        ctx.stroke();
      }
      for (let y = 40; y < arenaConfig.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(arenaConfig.width, y);
        ctx.stroke();
      }

      drawEffects(ctx, state.effects);
      circle(ctx, state.enemy.x, state.enemy.y, state.enemy.radius, '#ff6f61', '#ffd1cc');
      circle(ctx, state.player.x, state.player.y, state.player.radius, '#42d9ff', '#d6f7ff');
    }
  };
}
