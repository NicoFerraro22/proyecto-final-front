import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import banner from '../assets/banner_Bringme.png'

export default function Home() {
  useEffect(() => {
    console.log('Home montado')
    return () => console.log('Home desmontado')
  }, [])

  return (
    <section className="bg-gray-50 border-b">
      <div className="max-w-6xl mx-auto px-4">

        <div className="mt-6 mb-10 flex justify-center">
          <img
          src={banner}
        alt="Banner Tienda BMTH"
        className="w-full max-w-3xl h-64 object-cover rounded-2xl shadow-lg"
     />
      </div>

        <div className="py-10">
          <h1 className="text-4xl font-bold">Tienda BMTH</h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Bienvenido a la tienda oficial de Bring Me The Horizon. Aquí encontrarás una selección
            exclusiva de productos relacionados con la banda, desde ropa hasta accesorios y música.
            Explora nuestra colección y encontrá el artículo perfecto para mostrar tu amor por BMTH.
          </p>
          <div className="mt-6">
            <Link
              to="/productos"
              className="inline-block rounded-xl border px-4 py-2 hover:bg-black hover:text-pink-200 transition"
            >
              Ver productos
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

