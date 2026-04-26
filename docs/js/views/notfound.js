export function renderNotFound({ container }) {
  const view = document.createElement('div');
  view.className = 'view';
  view.innerHTML = `
    <section class="container" style="padding:120px 32px;text-align:center">
      <h1 class="display" style="font-size:clamp(80px,15vw,200px)">404.</h1>
      <p class="subtitle" style="margin:24px auto 32px">
        Cette page n'existe pas dans le programme du bac.
      </p>
      <a class="btn-pill accent" href="#/" data-link>Retour à l'accueil →</a>
    </section>
  `;
  container.appendChild(view);
}
