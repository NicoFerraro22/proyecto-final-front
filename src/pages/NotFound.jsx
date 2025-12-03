import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="max-w-xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold">404</h2>
      <p className="text-gray-600 mt-2">La página que buscás no existe.</p>
      <Link className="inline-block mt-6 rounded-xl border px-4 py-2 hover:bg-black hover:text-white" to="/">
        Volver al inicio
      </Link>
    </section>
  )
}