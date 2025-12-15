import { motion } from "framer-motion"

const images = [
  "https://i.pinimg.com/736x/b7/61/dc/b761dc7b9e07a4f74395eef57eed774f.jpg",
  "https://i.ytimg.com/vi/KLAQZ_XPiOU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC1AM8Dvp-njvrLAQNgrgiJiUp0hw",
  "https://i.ytimg.com/vi/6-VZ3FqKVbs/maxresdefault.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXuFwQmFbMDz1zSvj6W4d3ymFAmBHLyJyPQ&s",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3ebyqnV8eH-iFKxV2L34lW2AFwMo5SzRZy_T0bdR37KEPfieRTiWnS0zTvqTYPtpsEaV7CXrYJQHce1Z-oiUk5C4xItORhKmAqx94HD6W1CSvlueMebdcYIIEdFZ51nFJBfH-e2ediA/s1600/4976392.jpg",
  "https://i.pinimg.com/736x/4e/78/b6/4e78b6614403927ca619fa6c47e151ea.jpg",
]

function Galeria() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Título */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-14 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Galería
      </motion.h1>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={img}
              alt={`Galería ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}

export default Galeria
