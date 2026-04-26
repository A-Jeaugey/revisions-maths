export function initCursor() {
  if (window.matchMedia('(max-width: 900px)').matches) return;
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
  });

  // Ring lerp
  const tick = () => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
    requestAnimationFrame(tick);
  };
  tick();

  // Hover state on interactive elements
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, input, .chapter-card, .qa-card, .formula-card, .reflex-item, .annale-card, .quiz-choice, .flashcard')) {
      ring.classList.add('hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, input, .chapter-card, .qa-card, .formula-card, .reflex-item, .annale-card, .quiz-choice, .flashcard')) {
      ring.classList.remove('hover');
    }
  });
}
