export function initCursor() {
  if (window.matchMedia('(max-width: 900px)').matches) return;
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  document.addEventListener('mousemove', (e) => {
    const t = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
    dot.style.transform = t;
    ring.style.transform = t;
  });

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
