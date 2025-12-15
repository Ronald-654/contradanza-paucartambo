import { motion } from "framer-motion"

function Home() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://i.ytimg.com/vi/oxDTdpyly4o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCQqGeekMD518xYaUT4cTPD7O_XUg')",
        }}
      />

      {/* Contenido animado */}
      <motion.div
        className="relative z-10 text-center text-white px-6 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Contradanza de Paucartambo
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Tradición, historia y devoción que se expresan en danza,
          música y fe a través de generaciones.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-lg font-semibold">
            Conocer la Historia
          </button>

          <button className="bg-white text-gray-900 hover:bg-gray-200 transition px-8 py-3 rounded-lg font-semibold">
            Ver Galería
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Home
