import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"


import Home from "./pages/Home"
import Historia from "./pages/Historia"
import Galeria from "./pages/Galeria"
import Biblioteca from "./pages/Biblioteca"
import Noticias from "./pages/Noticias"
import Tienda from "./pages/Tienda"

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/tienda" element={<Tienda />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}


export default App
