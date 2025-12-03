export default function Footer() {
  return (
    <footer className="bg-pink-200 border-t">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-black">
        © {new Date().getFullYear()} Tienda BMTH hecha con react y TailwindCSS Nicolas Ferraro.
      </div>
    </footer>
  )
}