import { useParams } from 'react-router-dom'
import { useProduct } from '../hooks/useProduct'
import { useEffect } from 'react'

export default function ProductDetail({ onAdd }) {
  const { id } = useParams()
  const { data: product, isLoading, isError } = useProduct(id)

  useEffect(() => {
    if (product) document.title = `${product.name} | Mi Tienda`
  }, [product])

  if (isLoading) return <section className="p-6">Cargando producto…</section>;
  if (isError || !product) return <div className="max-w-6xl mx-auto px-4 py-10">Producto no encontrado.</div>

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
      <img src={product.image_url || product.img} alt={product.name} className="w-full rounded-2xl border" />
      <div>
        <h2 className="text-3xl font-semibold">{product.name}</h2>
        {product.desc && <p className="text-gray-600 mt-2 whitespace-pre-line italic">{product.desc}</p>}
        <p className="text-xl mt-4">$ {product.price.toLocaleString('es-AR')}</p>
        <button
          onClick={() => onAdd(product)}
          className="mt-6 rounded-xl border border-pink-500 px-4 py-2 hover:bg-pink-200 hover:text-black"
        >
          Agregar al carrito
        </button>
      </div>
    </section>
  )
}
