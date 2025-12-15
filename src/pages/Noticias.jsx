import { motion } from "framer-motion"

const news = [
  {
    title: "Ensayo General 2025",
    date: "10 de junio de 2025",
    content:
      "Se convoca a todos los integrantes a participar del ensayo general previo a las festividades.",
  },
  {
    title: "Participación en la Festividad",
    date: "15 de julio de 2025",
    content:
      "La Contradanza de Paucartambo participará oficialmente en las celebraciones tradicionales.",
  },
  {
    title: "Convocatoria a Aspirantes",
    date: "01 de agosto de 2025",
    content:
      "Se abre la convocatoria para nuevos aspirantes que deseen formar parte de la danza.",
  },
]

function Noticias() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      {/* Título */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-14 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Noticias
      </motion.h1>

      {/* Lista */}
      <div className="space-y-8">
        {news.map((item, index) => (
          <motion.article
            key={index}
            className="bg-white rounded-xl shadow p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              {item.title}
            </h2>
            <span className="text-sm text-gray-500">
              {item.date}
            </span>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {item.content}
            </p>
          </motion.article>
        ))}
      </div>

    </section>
  )
}

export default Noticias
