import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCart.jsx'
import { useProducts, useCategories } from '../hooks/useProducts'

export default function Products({ onAdd }) {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('')

  const { data: items = [], isLoading, isError } = useProducts()
  const { data: categoriesData = [] } = useCategories()


  const categories = useMemo(() => {
    if (categoriesData && categoriesData.length > 0) return categoriesData

    const names = Array.from(
      new Set(items.map(p => p.category?.name).filter(Boolean))
    )

    return names.map(name => ({
      id: name,
      name,
      slug: name,
    }))
  }, [categoriesData, items])

  const filtered = useMemo(() => {
    const text = q.trim().toLowerCase()

    return items.filter(p => {
      const name = p.name || ''
      const desc = p.desc || ''

      const byText =
        !text ||
        name.toLowerCase().includes(text) ||
        desc.toLowerCase().includes(text)

      const byCat =
        !cat ||
        !p.category ||
        p.category.slug === cat ||
        p.category.name === cat

      return byText && byCat
    })
  }, [items, q, cat])

  if (isLoading) {
    return <section className="p-6">Cargando productos…</section>
  }

  if (isError) {
    return (
      <section className="p-6 text-red-600">
        Error al cargar productos.
      </section>
    )
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold">Productos</h1>

        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Buscar por nombre o descripción…"
            value={q}
            onChange={e => setQ(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full md:w-64"
          />

          <select
            value={cat}
            onChange={e => setCat(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full md:w-52"
          >
            <option value="">Todas las categorías</option>
            {categories.map(c => (
              <option key={c.id || c.slug || c.name} value={c.slug || c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </header>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(p => (
          <ProductCard
            key={p.id}
            p={{ ...p, img: p.image_url || p.img }}
            onAdd={onAdd}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-6 text-gray-600">No se encontraron productos.</p>
      )}
    </section>
  )
}
