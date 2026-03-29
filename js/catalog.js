/* ============================================================
   catalog.js — Renderizado y filtrado del catálogo
   ============================================================ */

let currentFilter = 'all';

/**
 * Genera el HTML de una tarjeta de caja literaria.
 * @param {Object} book  - Objeto del array BOOKS en data.js
 * @param {string} lang  - 'es' | 'en'
 */
function renderCard(book, lang) {
  const name   = lang === 'es' ? book.name   : book.nameEN;
  const desc   = lang === 'es' ? book.desc   : book.descEN;
  const addTxt = lang === 'es' ? 'Agregar'   : 'Add';

  return `
    <div class="book-card" data-cat="${book.cat}">
      <div class="book-placeholder" style="background:${book.gradient}">
        <span style="font-size:3.5rem;z-index:1;position:relative">${book.emoji}</span>
        <span style="position:absolute;inset:0;background:radial-gradient(ellipse at center,transparent 30%,rgba(0,0,0,0.6))"></span>
      </div>
      <div class="book-info">
        <p class="book-tag">${book.tag}</p>
        <p class="book-name">${name}</p>
        <p class="book-desc">${desc}</p>
        <span class="book-price">${book.price}</span>
        <a class="book-btn" onclick="addToCart('${name}')">${addTxt} ✨</a>
      </div>
    </div>`;
}

/** Dibuja las primeras 4 cajas en la sección abrebocas del inicio. */
function buildHomeCatalog() {
  const el = document.getElementById('home-catalog');
  if (!el) return;
  el.innerHTML = BOOKS.slice(0, 4).map(b => renderCard(b, currentLang)).join('');
}

/** Dibuja el catálogo completo, aplicando el filtro activo. */
function buildFullCatalog() {
  const el = document.getElementById('full-catalog');
  if (!el) return;
  const filtered = currentFilter === 'all'
    ? BOOKS
    : BOOKS.filter(b => b.cat === currentFilter);
  el.innerHTML = filtered.map(b => renderCard(b, currentLang)).join('');
}

/**
 * Filtra el catálogo por categoría.
 * @param {string} cat  - 'all' | 'magia' | 'fantasia' | 'romance' | 'accion'
 * @param {HTMLElement} btn - botón clickeado (para marcar como activo)
 */
function filterCatalog(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  buildFullCatalog();
}

/** Simula agregar una caja al carrito y muestra notificación. */
function addToCart(name) {
  const msg = currentLang === 'es'
    ? `¡"${name}" añadida! 🔮`
    : `"${name}" added! 🔮`;
  showToast(msg);
}
