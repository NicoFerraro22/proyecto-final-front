
// Ropa y accesorios
import remera from '../assets/remera.webp'
import buzo from '../assets/d-generation-buzo.webp'
import manga from '../assets/manga-larga.webp'
import colgante from '../assets/colgante.webp'

// Vinilos
import vinilAmo from '../assets/vinil_amo_bmth.jpg'
import vinilHell from '../assets/vinil_hell_bmth.jpg'
import vinilNexgen from '../assets/vinil_nextgen-bmth.webp'
import vinilSempiternal from '../assets/vinil_sempiternal_bmth.webp'
import vinilSpirit from '../assets/vinil_spirit_bmth.jpg'
import vinilSuicide from '../assets/vinil_suicide_bmth.jpg'

// CDs
import cdAmo from '../assets/cd_amo_bmth.webp'
import cdNextgen from '../assets/cd_nextgen_bmth.webp'
import cdSempiternal from '../assets/cd_sempiternal_bmth.webp'
import cdSpirit from '../assets/cd_spirit_bmth.jpg'

// ------- LISTA DE PRODUCTOS -------
export const products = [
  // -------- ROPA --------
  { id: '1', name: 'Remera Oversize', price: 19999, img: remera, category: 'Ropa',
    desc: 'Remera oversize de corte holgado en negro desgastado con arte de POST HUMAN: NeX GEn.' },
  { id: '2', name: 'Buzo D Generation', price: 32999, img: buzo, category: 'Ropa',
    desc: 'Buzo cómodo con diseño D Generation. Ideal para invierno.' },
  { id: '3', name: 'Remera Manga Larga', price: 28999, img: manga, category: 'Ropa',
    desc: 'Remera de manga larga oversize en negro desgastado con arte de BMTH.' },
  { id: '4', name: 'Colgante Hex', price: 15999, img: colgante, category: 'Accesorios',
    desc: 'Collar con dije hexagonal sólido (5 cm).' },

  // -------- VINILOS --------
  { id: 'v1', name: 'Vinilo — POST HUMAN: NeX GEn', price: 54999, img: vinilNexgen, category: 'Vinilos',
    desc: 'Edición en vinilo del álbum POST HUMAN: NeX GEn.' },
  { id: 'v2', name: 'Vinilo — amo', price: 51999, img: vinilAmo, category: 'Vinilos',
    desc: 'Edición en vinilo del álbum amo.' },
  { id: 'v3', name: 'Vinilo — That’s The Spirit', price: 49999, img: vinilSpirit, category: 'Vinilos',
    desc: 'Vinilo del clásico That’s The Spirit.' },
  { id: 'v4', name: 'Vinilo — Sempiternal', price: 49999, img: vinilSempiternal, category: 'Vinilos',
    desc: 'Vinilo de Sempiternal, edición estándar.' },
  { id: 'v5', name: 'Vinilo — Suicide Season', price: 46999, img: vinilSuicide, category: 'Vinilos',
    desc: 'Vinilo de Suicide Season para coleccionistas.' },
  { id: 'v6', name: 'Vinilo — There Is a Hell…', price: 47999, img: vinilHell, category: 'Vinilos',
    desc: 'Vinilo de “There Is a Hell Believe Me I’ve Seen It…”.' },

  // -------- CDs --------
  { id: 'c1', name: 'CD — POST HUMAN: NeX GEn', price: 24999, img: cdNextgen, category: 'CDs',
    desc: 'CD de POST HUMAN: NeX GEn.' },
  { id: 'c2', name: 'CD — amo', price: 22999, img: cdAmo, category: 'CDs',
    desc: 'CD del álbum amo.' },
  { id: 'c3', name: 'CD — That’s The Spirit', price: 21999, img: cdSpirit, category: 'CDs',
    desc: 'CD de That’s The Spirit.' },
  { id: 'c4', name: 'CD — Sempiternal', price: 21999, img: cdSempiternal, category: 'CDs',
    desc: 'CD de Sempiternal.' },
]
