import { motion } from "framer-motion"

function Historia() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      {/* Título */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Historia de la Contradanza
      </motion.h1>

      {/* Contenido principal */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-700 text-lg leading-relaxed"
        >
          <p>
            La Contradanza de Paucartambo es una expresión cultural que
            combina historia, tradición y devoción. Sus orígenes se
            remontan a épocas coloniales, donde influencias europeas
            fueron reinterpretadas por las comunidades andinas.
          </p>

          <p>
            A lo largo del tiempo, esta danza fue adquiriendo identidad
            propia, convirtiéndose en símbolo de organización, elegancia
            y disciplina dentro de las festividades del pueblo.
          </p>

          <p>
            Hoy en día, la Contradanza no solo representa un baile,
            sino un compromiso con la memoria, el respeto y la fe
            transmitida de generación en generación.
          </p>
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-80 rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="https://i.ytimg.com/vi/ypCKTQZggDI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA4y6CjF0GqS1llS-_aWhoU1y9K8w"
            alt="Historia de la Contradanza"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Historia
