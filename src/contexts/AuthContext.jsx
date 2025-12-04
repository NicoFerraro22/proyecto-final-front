
import { createContext, useContext, useEffect, useState } from 'react'
import {
  auth,
  apiProtected,
  setTokens,
  clearTokens,
  getAccessToken,
} from '../lib/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Cargar usuario si ya hay token guardado 
  useEffect(() => {
    async function loadUser() {
      try {
        const token = getAccessToken()
        if (!token) {
          setLoading(false)
          return
        }

        
        const me = await apiProtected.me()
        setUser(me)
      } catch (err) {
        console.error('Error cargando usuario:', err)
        clearTokens()
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  // LOGIN
  async function login(username, password) {
    
    const tokens = await auth.login(username, password)
    setTokens(tokens)

    
    try {
      const me = await apiProtected.me()
      setUser(me)
    } catch (err) {
      console.warn('No se pudo obtener /me/, pero login fue correcto:', err)
      
      setUser({ username })
    }

    return true
  }

  function logout() {
    clearTokens()
    setUser(null)
  }

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth debe usarse dentro de <AuthProvider>')
  }
  return ctx
}
