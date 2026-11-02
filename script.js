
// Draw Pen — needs GSAP core.
// The whole page is a drawing pad. Draw with the mouse, a finger or a pen:
// the line is smoothed, gets thinner the faster you go (or follows a pen's
// pressure), wobbles a little like a felt tip, and in rainbow mode runs
// through the colours as it goes. The page's words and buttons sit on top:
// a line can start anywhere, even on the words, and passes underneath them,
// and the buttons keep working.
const pad = document.getElementById('pad');
const tip = document.getElementById('tip');
const ctx = pad.getContext('2d');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const MIN = 2;  // the thinnest line, px (drawing fast)
const MAX = 14; // the thickest (drawing slowly)
let ink = 'rainbow';
let hue = 330; // rainbow mode's colour right now, in degrees

// ---- Size: sharp on high-density screens, and a resize keeps the drawing ----
function fit() {
  const dpr = Math.min(2, devicePixelRatio);
  const w = Math.round(pad.clientWidth * dpr);
  const h = Math.round(pad.clientHeight * dpr);
  if (w === pad.width && h === pad.height) return;
  const old = document.createElement('canvas'); // resizing a canvas wipes it: keep a copy
  old.width = pad.width;
  old.height = pad.height;
  old.getContext('2d').drawImage(pad, 0, 0);
  pad.width = w;
  pad.height = h;
  ctx.drawImage(old, 0, 0);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // from here on, draw in CSS px
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
}
fit();
new ResizeObserver(fit).observe(pad);

// ---- Drawing a line -----------------------------------------------------------
function colour(distance) {
  if (ink !== 'rainbow') return ink;
  hue = (hue + distance * 0.35) % 360; // the colour moves on as the pen does
  return `hsl(${hue} 85% 55%)`;
}

function begin(x, y, time) {
  ctx.beginPath();
  ctx.arc(x, y, MAX / 4, 0, Math.PI * 2); // a dot, so a tap leaves a mark
  ctx.fillStyle = colour(0);
  ctx.fill();
  return { x, y, midX: x, midY: y, width: (MIN + MAX) / 2, travelled: 0, time };
}

function extend(line, x, y, time, pressure) {
  const distance = Math.hypot(x - line.x, y - line.y);
  if (distance < 0.5) return;
  const speed = distance / Math.max(1, time - line.time); // px per ms
  const target = pressure ? MIN + (MAX - MIN) * pressure : gsap.utils.clamp(MIN, MAX, MAX - speed * 6);
  line.width += (target - line.width) * 0.35; // ease towards it, so the width never jumps
  line.travelled += distance;
  const wobble = 1 + Math.sin(line.travelled * 0.07) * 0.18; // the felt-tip wobble

  // Draw to the midpoint of the last two points, bending through the last
  // point: joined up, the pieces make one smooth curve instead of corners.
  const midX = (line.x + x) / 2;
  const midY = (line.y + y) / 2;
  ctx.beginPath();
  ctx.moveTo(line.midX, line.midY);
  ctx.quadraticCurveTo(line.x, line.y, midX, midY);
  ctx.lineWidth = line.width * wobble;
  ctx.strokeStyle = colour(distance);
  ctx.stroke();
  Object.assign(line, { x, y, midX, midY, time });
  if (ink === 'rainbow') tip.style.backgroundColor = ctx.strokeStyle;
}

// ---- The pointer: mouse, finger or pen --------------------------------------
let line = null;

pad.addEventListener('pointerdown', (e) => {
  if (e.button !== 0) return;
  pad.setPointerCapture(e.pointerId); // keep drawing even over the words and buttons
  line = begin(e.clientX, e.clientY, e.timeStamp);
  gsap.to(tip, { scale: 1.6, duration: 0.2, ease: 'power3.out' });
});

pad.addEventListener('pointermove', (e) => {
  if (e.pointerType === 'mouse') { tipX(e.clientX); tipY(e.clientY); }
  if (!line) return;
  // Fast moves arrive as several points in one event: use them all, for a smooth line.
  const points = e.getCoalescedEvents ? e.getCoalescedEvents() : [];
  for (const p of points.length ? points : [e]) {
    extend(line, p.clientX, p.clientY, p.timeStamp, e.pointerType === 'pen' ? p.pressure : 0);
  }
});

const lift = () => {
  line = null;
  gsap.to(tip, { scale: 1, duration: 0.2, ease: 'power3.out' });
};
pad.addEventListener('pointerup', lift);
pad.addEventListener('pointercancel', lift);

// ---- The pen tip that stands in for the mouse cursor ----------------------------
gsap.set(tip, { xPercent: -50, yPercent: -50 });
const follow = { duration: reduced ? 0.01 : 0.12, ease: 'power3' };
const tipX = gsap.quickTo(tip, 'x', follow);
const tipY = gsap.quickTo(tip, 'y', follow);
pad.addEventListener('pointerenter', (e) => {
  if (e.pointerType !== 'mouse') return;
  tipX(e.clientX, e.clientX); // start right at the pointer
  tipY(e.clientY, e.clientY);
  gsap.set(tip, { autoAlpha: 1 });
});
pad.addEventListener('pointerleave', () => gsap.set(tip, { autoAlpha: 0 }));

// ---- The pens and Clear ----------------------------------------------------------
const swatches = document.querySelectorAll('.swatch');
swatches.forEach((button) => button.addEventListener('click', () => {
  ink = button.dataset.ink;
  swatches.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
  tip.style.backgroundColor = ink === 'rainbow' ? `hsl(${hue} 85% 55%)` : ink;
}));

document.getElementById('clear').addEventListener('click', () => {
  gsap.to(pad, {
    opacity: 0,
    duration: reduced ? 0 : 0.35,
    ease: 'power2.in',
    onComplete: () => {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, pad.width, pad.height);
      ctx.restore();
      gsap.set(pad, { opacity: 1 });
    },
  });
});

// Demo only: a squiggle draws itself under the title as the page opens, to
// show there's something to do. Delete this part.
if (!reduced) {
  const box = document.getElementById('title').getBoundingClientRect();
  const at = (t) => [box.left + t * box.width, box.bottom + Math.sin(t * Math.PI * 6) * 7];
  const pen = { t: 0 };
  let squiggle = null;
  gsap.to(pen, {
    t: 1,
    duration: 1.4,
    delay: 0.4,
    ease: 'power1.inOut',
    onUpdate: () => {
      squiggle ??= begin(...at(0), performance.now()); // the first update starts the line
      extend(squiggle, ...at(pen.t), performance.now(), 0);
    },
  });
}
