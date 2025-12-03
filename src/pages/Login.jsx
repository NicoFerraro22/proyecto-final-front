
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('admin')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()
  const { login } = useAuth()

  async function onSubmit(e) {
    e.preventDefault()
    setError(null); setLoading(true)
    try {
      await login(username, password)
      nav('/cart')
    } catch (err) {
      setError('Credenciales inválidas')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm space-y-4 border p-6 rounded-xl">
        <h1 className="text-2xl font-bold">Iniciar sesión</h1>
        <div className="space-y-1">
          <label className="block text-sm">Usuario</label>
          <input value={username} onChange={e=>setUsername(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="space-y-1">
          <label className="block text-sm">Contraseña</label>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button disabled={loading} className="w-full rounded bg-black text-white py-2">{loading ? 'Ingresando...' : 'Ingresar'}</button>
        <p className="text-xs text-gray-500">Tip: usuario admin / contraseña admin</p>
      </form>
    </div>
  )
}
