import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Header({ cartCount }) {
  const { user, logout } = useAuth()

  const link = ({ isActive }) =>
    'text-sm px-2 py-1 rounded ' + (isActive ? 'font-semibold underline' : '')

  return (
    <header className="sticky top-0 z-10 bg-black text-pink-200 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Tienda BMTH
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-3">

          <NavLink to="/" className={link}>Inicio</NavLink>
          <NavLink to="/productos" className={link}>Productos</NavLink>
          <NavLink to="/carrito" className={link}>Carrito</NavLink>

          <Link to="/carrito" className="relative px-3 py-1 rounded-full border">
            🛒
            <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full px-1.5">
              {cartCount}
            </span>
          </Link>

          {/* --- NUEVO --- */}
          {user && (
            <div className="flex items-center gap-2 ml-4">
              <span className="text-sm text-pink-400">
                Hola, <strong>{user.username}</strong>
              </span>
              
              <button
                onClick={logout}
                className="text-xs px-2 py-1 rounded bg-pink-700 hover:bg-pink-600"
              >
                Salir
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
