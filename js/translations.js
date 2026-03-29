/* ============================================================
   translations.js — Textos en Español e Inglés
   Para editar textos de la página, modifica este archivo.
   ============================================================ */

let currentLang = 'es';

const TRANSLATIONS = {
  es: {
    'h-eyebrow':  '✦ Por Ana María Montes ✦',
    'h-title':    'Lectores<br>Apasionados',
    'h-subtitle': '✦ Una página de lectores para lectores ✦',
    'h-tagline':  'Donde cada caja literaria esconde un mundo por descubrir.<br>Entre páginas, magia y estrellas — bienvenida, lectora.',
    'h-cta1':     '✨ Ver Cajas Literarias',
    'h-cta2':     'Nuestra Historia',
    'mc-title':   'Cajas Destacadas',
    'mc-sub':     'Un pequeño abrebocas de nuestra colección mágica',
    'ab-title':   'Sobre la Creadora',
    'ab-p1':      'Soy una chica lectora buscando escribir <em>una nueva historia</em>. Este espacio nació del amor profundo por los libros, las noches estrelladas y la magia que vive entre las páginas.',
    'ab-p2':      'Lectores Apasionados es mi forma de compartir ese amor con el mundo — curada caja por caja, con todo el corazón.',
    'ab-btn':     'Conoce más →',
    'f-tag':      '✦ Una página de lectores para lectores ✦',
    'f-copy':     '© 2025 Lectores Apasionados · Por Ana María Montes · Todos los derechos reservados',
    'cat-title':  '📚 Catálogo Completo',
    'cat-sub':    'Explora todas nuestras cajas literarias mágicas',
    'f-all':      'Todas',
    'f-mag':      'Brujas & Magia',
    'f-fan':      'Alta Fantasía',
    'f-rom':      'Romance Oscuro',
    'f-av':       'Acción',
    'nos-title':  'Sobre Nosotras',
    'nos-sub':    'Las almas detrás de cada caja mágica',
    'nc-role1':   '✦ Fundadora & Lectora Apasionada ✦',
    'nc-bio1':    'Soy una chica lectora buscando escribir una nueva historia. Nací entre libros y magia, y desde pequeña soñé con crear un espacio donde las lectoras pudieran encontrar algo especial. Cada caja literaria que curé lleva un pedazo de mi corazón.<br><br><em>@daydreaming · @anamaria.montes</em>',
    'nc-role2':   '✦ Nuestra Historia ✦',
    'nc-bio2':    'Este proyecto nació de una idea sencilla pero poderosa: que cada libro merece llegar de forma mágica a manos de quien lo ama. Nuestras cajas literarias son experiencias completas — libros, señaladores, velas, sorpresas y amor en cada detalle.<br><br>Somos una comunidad. Somos lectores para lectores.',
    's-menu':     '✦ Menú',
    's-inicio':   'Inicio',
    's-catalogo': 'Catálogo Completo',
    's-nosotros': 'Nosotros',
    's-cajas':    '✦ Cajas Literarias',
    's-brujas':   'Brujas & Magia',
    's-fantasia': 'Alta Fantasía',
    's-romance':  'Romance Oscuro',
    's-accion':   'Acción & Aventura',
    's-redes':    '✦ Redes',
    't-inicio':   'Inicio',
    't-catalogo': 'Catálogo',
    't-nosotros': 'Nosotros',
    'lang-label': 'EN',
    'f-tag2':     '✦ Una página de lectores para lectores ✦',
    'f-copy2':    '© 2025 Lectores Apasionados · Por Ana María Montes',
  },
  en: {
    'h-eyebrow':  '✦ By Ana María Montes ✦',
    'h-title':    'Passionate<br>Readers',
    'h-subtitle': '✦ A readers page for readers ✦',
    'h-tagline':  'Where every literary box hides a world to discover.<br>Between pages, magic and stars — welcome, reader.',
    'h-cta1':     '✨ See Literary Boxes',
    'h-cta2':     'Our Story',
    'mc-title':   'Featured Boxes',
    'mc-sub':     'A little taste of our magical collection',
    'ab-title':   'About the Creator',
    'ab-p1':      'I am a reader girl looking to write <em>a new story</em>. This space was born from a deep love for books, starry nights and the magic that lives between pages.',
    'ab-p2':      "Passionate Readers is my way of sharing that love with the world — curated box by box, with all my heart.",
    'ab-btn':     'Learn more →',
    'f-tag':      '✦ A readers page for readers ✦',
    'f-copy':     '© 2025 Lectores Apasionados · By Ana María Montes · All rights reserved',
    'cat-title':  '📚 Full Catalog',
    'cat-sub':    'Explore all our magical literary boxes',
    'f-all':      'All',
    'f-mag':      'Witches & Magic',
    'f-fan':      'High Fantasy',
    'f-rom':      'Dark Romance',
    'f-av':       'Action',
    'nos-title':  'About Us',
    'nos-sub':    'The souls behind each magical box',
    'nc-role1':   '✦ Founder & Passionate Reader ✦',
    'nc-bio1':    'I am a reader girl looking to write a new story. I was born among books and magic, and since childhood I dreamed of creating a space where readers could find something special. Each literary box I curated carries a piece of my heart.<br><br><em>@daydreaming · @anamaria.montes</em>',
    'nc-role2':   '✦ Our Story ✦',
    'nc-bio2':    "This project was born from a simple but powerful idea: that every book deserves to arrive magically in the hands of someone who loves it. Our literary boxes are complete experiences — books, bookmarks, candles, surprises and love in every detail.<br><br>We are a community. We are readers for readers.",
    's-menu':     '✦ Menu',
    's-inicio':   'Home',
    's-catalogo': 'Full Catalog',
    's-nosotros': 'About Us',
    's-cajas':    '✦ Literary Boxes',
    's-brujas':   'Witches & Magic',
    's-fantasia': 'High Fantasy',
    's-romance':  'Dark Romance',
    's-accion':   'Action & Adventure',
    's-redes':    '✦ Social',
    't-inicio':   'Home',
    't-catalogo': 'Catalog',
    't-nosotros': 'About Us',
    'lang-label': 'ES',
    'f-tag2':     '✦ A readers page for readers ✦',
    'f-copy2':    '© 2025 Lectores Apasionados · By Ana María Montes',
  }
};

function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  const t = TRANSLATIONS[currentLang];
  for (const [id, val] of Object.entries(t)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = val;
  }
  buildHomeCatalog();
  buildFullCatalog();
}
