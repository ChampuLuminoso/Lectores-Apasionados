/* ============================================================
   navigation.js — Cambio de páginas y sidebar
   ============================================================ */

/**
 * Muestra la página indicada y oculta las demás.
 * @param {string}      id      - 'home' | 'catalogo' | 'nosotros'
 * @param {HTMLElement} linkEl  - enlace de la navbar (para marcar activo)
 */
function showPage(id, linkEl) {
  // Ocultar todas las páginas
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Mostrar la página seleccionada
  document.getElementById('page-' + id).classList.add('active');

  // Actualizar enlace activo en la navbar
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  if (linkEl) linkEl.classList.add('active');

  // Scroll arriba
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Si es el catálogo, renderizarlo
  if (id === 'catalogo') buildFullCatalog();
}

/** Abre o cierra el panel lateral. */
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}
