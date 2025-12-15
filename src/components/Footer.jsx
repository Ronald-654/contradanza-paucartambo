function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">

        {/* Marca */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Contradanza de Paucartambo
          </h2>
          <p className="text-sm leading-relaxed">
            Expresión cultural, historia y tradición viva que se mantiene
            a través del tiempo y la devoción del pueblo.
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Enlaces
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Inicio</li>
            <li>Historia</li>
            <li>Galería</li>
            <li>Biblioteca</li>
            <li>Noticias</li>
            <li>Tienda</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contacto
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Paucartambo – Cusco</li>
            <li>📞 +51 999 999 999</li>
            <li>✉️ contradanza@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Contradanza de Paucartambo. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
