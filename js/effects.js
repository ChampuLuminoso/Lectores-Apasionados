/* ============================================================
   effects.js — Efectos visuales: estrellas, partículas, chispas y toast
   ============================================================ */

/* ── Cielo estrellado en canvas ── */
function initStars() {
  const canvas = document.getElementById('stars-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, stars = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function mkStar() {
    return {
      x:     Math.random() * W,
      y:     Math.random() * H,
      r:     Math.random() * 1.8 + 0.3,
      a:     Math.random(),
      da:    (Math.random() - 0.5) * 0.008,
      color: Math.random() > 0.7 ? '#d4a8ff'
           : Math.random() > 0.5 ? '#c9a84c'
           : '#f5f0ff'
    };
  }

  resize();
  for (let i = 0; i < 220; i++) stars.push(mkStar());
  window.addEventListener('resize', resize);

  function draw() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.a += s.da;
      if (s.a <= 0 || s.a >= 1) s.da *= -1;

      ctx.globalAlpha = s.a;
      ctx.fillStyle   = s.color;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();

      // Cruz de destello para estrellas grandes
      if (s.r > 1.4) {
        ctx.globalAlpha  = s.a * 0.4;
        ctx.strokeStyle  = s.color;
        ctx.lineWidth    = 0.5;
        ctx.beginPath();
        ctx.moveTo(s.x - s.r * 3, s.y); ctx.lineTo(s.x + s.r * 3, s.y);
        ctx.moveTo(s.x, s.y - s.r * 3); ctx.lineTo(s.x, s.y + s.r * 3);
        ctx.stroke();
      }
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  draw();
}

/* ── Partículas flotantes ── */
function initParticles() {
  const container = document.getElementById('particles');
  const colors = ['#7b3fa0', '#b56ee0', '#d4a8ff', '#c9a84c', '#f5f0ff'];

  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left:               ${Math.random() * 100}%;
      width:              ${Math.random() * 4 + 2}px;
      height:             ${Math.random() * 4 + 2}px;
      background:         ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 20 + 15}s;
      animation-delay:    ${Math.random() * 15}s;
      box-shadow:         0 0 ${Math.random() * 8 + 4}px currentColor;
    `;
    container.appendChild(p);
  }
}

/* ── Chispas al mover el cursor ── */
function initCursorSparkles() {
  let lastSparkle = 0;
  const colors = ['#b56ee0', '#d4a8ff', '#c9a84c', '#f5f0ff'];

  document.addEventListener('mousemove', e => {
    const now = Date.now();
    if (now - lastSparkle < 60) return;
    lastSparkle = now;

    const sp = document.createElement('div');
    sp.className = 'sparkle';
    sp.style.cssText = `
      left:       ${e.clientX}px;
      top:        ${e.clientY}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
    `;
    document.body.appendChild(sp);
    setTimeout(() => sp.remove(), 700);
  });
}

/* ── Notificación toast ── */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}
