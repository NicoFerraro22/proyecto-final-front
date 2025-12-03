import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'
export default function Cart({ cart, add, removeOne, removeAll, clear }) {
  const { user, loading } = useAuth()
  if (!loading && !user) return <Navigate to="/login" replace />
  const items = Object.values(cart) // [{ product, qty }]
  const total = items.reduce((acc, it) => acc + it.product.price * it.qty, 0)

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Carrito</h2>

      {items.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío 🛒</p>
      ) : (
        <div className="space-y-4">
          {items.map(({ product, qty }) => (
            <div key={product.id} className="flex items-center justify-between gap-4 border rounded-xl p-3">
              <div className="flex items-center gap-3 min-w-0">
                <img src={product.img} alt={product.name} className="w-12 h-12 rounded object-cover border" />
                <div className="truncate">
                  <div className="font-medium truncate">{product.name}</div>
                  <div className="text-sm text-gray-600">$ {product.price.toLocaleString('es-AR')}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeOne(product.id)}
                  className="rounded-lg px-3 py-1.5 bg-gray-200 hover:bg-pink-200 hover:text-black text-sm"
                  title="Quitar uno"
                >
                  –
                </button>
                <span className="min-w-8 text-center">{qty}</span>
                <button
                  onClick={() => add(product)}
                  className="rounded-lg px-3 py-1.5 bg-gray-200 hover:bg-pink-200 hover:text-black text-sm"
                  title="Sumar uno"
                >
                  +
                </button>

                <button
                  onClick={() => removeAll(product.id)}
                  className="ml-3 rounded-lg px-3 py-1.5 bg-gray-200 hover:bg-pink-200 hover:text-black text-sm"
                  title="Eliminar producto"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <div className="border-t pt-4 text-right font-semibold">
            Total: $ {total.toLocaleString('es-AR')}
          </div>

          <div className="text-right">
            <button
              onClick={clear}
              className="mt-4 rounded-xl px-4 py-2 bg-gray-200 hover:bg-pink-200 hover:text-black"
            >
              Vaciar carrito
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
