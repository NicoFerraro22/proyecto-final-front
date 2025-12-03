import { Link } from 'react-router-dom'

export default function ProductCard({ p, onAdd }) {
  return (
    <div className="border rounded-2xl overflow-hidden hover:shadow-md transition bg-black">
      <Link to={`/productos/${p.id}`}>
        <img src={p.img} alt={p.name} className="w-full aspect-square object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-white">{p.name}</h3>
        <p className="text-sm text-white mb-1">$ {p.price.toLocaleString('es-AR')}</p>
        {p.desc && <p className="text-sm italic text-gray-200 mb-3">{p.desc}</p>}
        <div className="flex gap-2">
          <Link
            to={`/productos/${p.id}`}
            className="flex-1 rounded-xl border border-white bg-black px-3 py-2 text-sm text-pink-200 
               hover:bg-pink-200 hover:text-black transition"
          >
            Ver
          </Link>
          <button
            onClick={() => onAdd(p)}
            className="flex-1 rounded-xl border border-white bg-black px-3 py-2 text-sm text-pink-200 
               hover:bg-pink-200 hover:text-black transition"
          >
            Agregar
          </button> 
        </div>
      </div>
    </div>
  )
}
