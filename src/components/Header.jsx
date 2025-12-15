import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Contradanza
        </Link>

        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-red-600">Inicio</Link></li>
          <li><Link to="/historia" className="hover:text-red-600">Historia</Link></li>
          <li><Link to="/galeria" className="hover:text-red-600">Galería</Link></li>
          <li><Link to="/biblioteca" className="hover:text-red-600">Biblioteca</Link></li>
          <li><Link to="/noticias" className="hover:text-red-600">Noticias</Link></li>
          <li><Link to="/tienda" className="hover:text-red-600">Tienda</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
