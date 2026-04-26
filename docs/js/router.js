// Hash-based router with simple :param matching
let _routes = {};
let _container = null;
let _notFound = null;

export function initRouter(routes, container, notFound) {
  _routes = routes;
  _container = container;
  _notFound = notFound;
  window.addEventListener('hashchange', resolve);
  resolve();
}

export function navigate(path) {
  if (location.hash !== '#' + path) {
    location.hash = path;
  } else {
    resolve();
  }
}

function resolve() {
  const path = location.hash.slice(1) || '/';
  let match = null;
  let params = {};

  for (const pattern in _routes) {
    const m = matchRoute(pattern, path);
    if (m) {
      match = _routes[pattern];
      params = m.params;
      break;
    }
  }

  // Smooth scroll to top on view change
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Clear container with fade
  _container.classList.add('fading');
  setTimeout(async () => {
    _container.innerHTML = '';
    _container.classList.remove('fading');
    try {
      const renderer = match || _notFound;
      await renderer({ container: _container, params, path });
      window.dispatchEvent(new CustomEvent('routechange', { detail: { path, params } }));
    } catch (err) {
      console.error('Route render error', err);
      _container.innerHTML = `<div class="container"><div class="empty"><h3>Oups</h3><p>${err.message}</p></div></div>`;
    }
  }, 50);
}

function matchRoute(pattern, path) {
  const pParts = pattern.split('/').filter(Boolean);
  const aParts = path.split('/').filter(Boolean);
  if (pParts.length !== aParts.length) return null;
  const params = {};
  for (let i = 0; i < pParts.length; i++) {
    if (pParts[i].startsWith(':')) {
      params[pParts[i].slice(1)] = decodeURIComponent(aParts[i]);
    } else if (pParts[i] !== aParts[i]) {
      return null;
    }
  }
  return { params };
}

// Intercept clicks on data-link anchors to use hash routing properly
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-link]');
  if (a) {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      // let the browser handle the hash change naturally
    }
  }
});
