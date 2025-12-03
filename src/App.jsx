import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import { useAuth, AuthProvider } from './contexts/AuthContext'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Cart from './pages/Cart.jsx'
import NotFound from './pages/NotFound.jsx'

/** Estructura del carrito: { [id]: { product, qty } } */
export default function App() {
  const [cart, setCart] = useState({})

  // Cargar carrito guardado
  useEffect(() => {
    const saved = localStorage.getItem('cart_v1')
    if (saved) setCart(JSON.parse(saved))
  }, [])

  // Guardar al cambiar
  useEffect(() => {
    localStorage.setItem('cart_v1', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart(prev => {
      const curr = prev[product.id]
      return {
        ...prev,
        [product.id]: { product, qty: curr ? curr.qty + 1 : 1 }
      }
    })
  }

  const removeOne = (id) => {
    setCart(prev => {
      const curr = prev[id]
      if (!curr) return prev
      if (curr.qty > 1) return { ...prev, [id]: { ...curr, qty: curr.qty - 1 } }
      const copy = { ...prev }
      delete copy[id]
      return copy
    })
  }

  const removeAll = (id) => {
    setCart(prev => {
      const copy = { ...prev }
      delete copy[id]
      return copy
    })
  }

  const clearCart = () => setCart({})

  const cartCount = Object.values(cart).reduce((acc, it) => acc + it.qty, 0)

  return (
    <Routes>
      <Route element={<Layout cartCount={cartCount} />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products onAdd={addToCart} />} />
        <Route path="/productos/:id" element={<ProductDetail onAdd={addToCart} />} />
        <Route
          path="/carrito"
          element={
            <Cart
              cart={cart}
              add={addToCart}
              removeOne={removeOne}
              removeAll={removeAll}
              clear={clearCart}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login/>} />
</Routes>
  )
}
