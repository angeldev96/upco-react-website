import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Payments from './pages/Payments'
import Contact from './pages/Contact'
import CalculoConsumo from './pages/CalculoConsumo'
import Gallery from './pages/Gallery'
import Tarifas from './pages/Tarifas'
import Oficinas from './pages/Oficinas'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/tarifas" element={<Tarifas />} />
          <Route path="/oficinas" element={<Oficinas />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/calculo-consumo" element={<CalculoConsumo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
