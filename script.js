// Header scroll state
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive:true });

// Scroll reveal
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');
if (reduceMotion) {
  revealEls.forEach(el => el.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
}

// Astrolabe tick marks
const ticksGroup = document.getElementById('ticks1');
if (ticksGroup) {
  const cx = 500, cy = 500, r1 = 440, r2 = 425;
  let ticks = '';
  for (let i = 0; i < 72; i++) {
    const angle = (i / 72) * Math.PI * 2;
    const x1 = cx + r1 * Math.cos(angle), y1 = cy + r1 * Math.sin(angle);
    const x2 = cx + r2 * Math.cos(angle), y2 = cy + r2 * Math.sin(angle);
    ticks += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" />`;
  }
  ticksGroup.innerHTML = ticks;
}

// Starfield canvas
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];
function resize() {
  canvas.width = canvas.offsetWidth * devicePixelRatio;
  canvas.height = canvas.offsetHeight * devicePixelRatio;
  ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
  const count = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 9000);
  stars = Array.from({length: count}, () => ({
    x: Math.random() * canvas.offsetWidth,
    y: Math.random() * canvas.offsetHeight,
    r: Math.random() * 1.2 + 0.2,
    a: Math.random(),
    speed: Math.random() * 0.015 + 0.003
  }));
}
function draw() {
  ctx.clearRect(0,0,canvas.offsetWidth, canvas.offsetHeight);
  stars.forEach(s => {
    s.a += s.speed;
    const op = (Math.sin(s.a) + 1) / 2 * 0.7 + 0.15;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(230,200,119,${op.toFixed(2)})`;
    ctx.fill();
  });
  if (!reduceMotion) requestAnimationFrame(draw);
}
window.addEventListener('resize', resize, { passive:true });
resize();
draw();
