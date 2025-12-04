
const API_URL = import.meta.env.VITE_API_URL
const USE_MOCK = !API_URL || import.meta.env.VITE_USE_MOCK === 'true'

// =======================
// HTTP helpers
// =======================
async function http(url, opts = {}) {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(opts.headers || {}),
    },
    ...opts,
  })

  if (!res.ok) {
    const err = new Error(`HTTP ${res.status}`)
    err.status = res.status
    try {
      err.data = await res.json()
    } catch {
      err.data = null
    }
    throw err
  }

  return res.json()
}

// =======================
// API pública (sin auth)
// =======================
export const api = {
  listProducts: () =>
    USE_MOCK
      ? http('/mock/products.json')
      : http(`${API_URL}/products/`),

  getProduct: (id) =>
    USE_MOCK
      ? http('/mock/products.json').then(list => list.find(p => p.id === id))
      : http(`${API_URL}/products/${id}/`),

  listCategories: () =>
    USE_MOCK
      ? http('/mock/categories.json')
      : http(`${API_URL}/categories/`),
}

// =======================
// Manejo de tokens
// =======================
const TOKEN_KEY = 'bmth_token'
const REFRESH_KEY = 'bmth_refresh'

export function setTokens({ access, refresh }) {
  if (access) localStorage.setItem(TOKEN_KEY, access)
  if (refresh) localStorage.setItem(REFRESH_KEY, refresh)
}

export function getAccessToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function clearTokens() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(REFRESH_KEY)
}

// =======================
// Fetch autenticado
// =======================
async function authFetch(url, opts = {}) {
  const token = getAccessToken()
  const headers = {
    'Content-Type': 'application/json',
    ...(opts.headers || {}),
  }

  if (token) headers['Authorization'] = `Bearer ${token}`

  const res = await fetch(url, { ...opts, headers })

  if (res.status === 401) {
    const refresh = localStorage.getItem(REFRESH_KEY)

    if (refresh) {
      const r = await fetch(`${API_URL}/token/refresh/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh }),
      })

      if (r.ok) {
        const data = await r.json()
        if (data.access) {
          setTokens({ access: data.access })
          
          return authFetch(url, opts)
        }
      }

      
      clearTokens()
    }
  }

  if (!res.ok) {
    const err = new Error(`HTTP ${res.status}`)
    err.status = res.status
    try {
      err.data = await res.json()
    } catch {
      err.data = null
    }
    throw err
  }

  return res.json()
}

// =======================
// Auth endpoints
// =======================
export const auth = {
  login: (username, password) =>
    http(`${API_URL}/token/`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    }),

  me: () => authFetch(`${API_URL}/me/`),
}

// =======================
// API protegida (con token)
// =======================
export const apiProtected = {
  me: () => authFetch(`${API_URL}/me/`),
}

