import { motion } from "framer-motion"

const documents = [
  {
    title: "Historia de la Contradanza",
    description: "Documento histórico sobre el origen y evolución de la danza.",
    link: "https://drive.google.com/file/d/XXXXXXXX/view",
  },
  {
    title: "Reglamento Interno",
    description: "Normas, organización y disciplina de la danza.",
    link: "https://drive.google.com/file/d/XXXXXXXX/view",
  },
  {
    title: "Vestimenta Tradicional",
    description: "Descripción de trajes, colores y simbolismo.",
    link: "https://drive.google.com/file/d/XXXXXXXX/view",
  },
]

function Biblioteca() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      {/* Título */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-14 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Biblioteca Digital
      </motion.h1>

      {/* Lista de documentos */}
      <div className="grid md:grid-cols-2 gap-8">
        {documents.map((doc, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow p-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {doc.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {doc.description}
              </p>
            </div>

            <a
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Ver documento
            </a>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Biblioteca
