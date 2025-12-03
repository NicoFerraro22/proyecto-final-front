
import { createContext, useContext, useEffect, useState } from 'react'
import { auth, setTokens, clearTokens, getAccessToken } from '../lib/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = getAccessToken()
    if (!token) { setLoading(false); return }
    auth.me().then(setUser).catch(() => clearTokens()).finally(() => setLoading(false))
  }, [])

  async function login(username, password) {
    const tokens = await auth.login(username, password)
    setTokens(tokens)
    const me = await auth.me()
    setUser(me)
    return me
  }

  function logout() {
    clearTokens()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
