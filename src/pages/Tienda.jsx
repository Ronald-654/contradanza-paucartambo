import { motion } from "framer-motion"

const products = [
  {
    name: "Polo de Contradanza Edición Limitada",
    price: "Consultar precio",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1svNlVRiv1K2ErOsbSmz831mHgL8afd7qA&s",
  },
  {
    name: "Careta de Contradanza Tradicional",
    price: "Consultar precio",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf6x38XEZLQRvJbg2QJiePhOz4fYqQYlB6rQ&s",
  },
  {
    name: "Foto con los Contras :v",
    price: "Consultar precio",
    image:
      "https://i.ytimg.com/vi/3fHTXXej0b4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAKzqWSb-XKyKpglTVUZVP2m15V3g",
  },
]

function Tienda() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Título */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-14 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tienda
      </motion.h1>

      {/* Grid de productos */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-2">
                {product.price}
              </p>

              <a
                href="https://wa.me/51979308332"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Tienda
