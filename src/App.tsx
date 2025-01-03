import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './assets/comonents/Footer.tsx'
import Guide from './assets/Pages/Guide.tsx'
import Innteksgrense from './assets/Pages/Innteksgrense.tsx';
import Formuegrense from './assets/Pages/Formuegrense.tsx';
import Fond from './assets/Pages/Fond.tsx';
import Bsubesparing from './assets/Pages/Bsusparing.tsx';
import GenerelleTips from './assets/Pages/GenerelleTips.tsx';
import Nettoformue from './assets/Pages/Nettoformue.tsx';
import Reisefradrag from './assets/Pages/Reisefradrag.tsx';
import Rentefradrag from './assets/Pages/Rentefradrag.tsx';
import SkattefrittAskjer from './assets/Pages/SkattefrittAksjer.tsx';
import Utgiftsfradrag from './assets/Pages/Utgiftsfradrag.tsx';
import Welcome from './assets/Welcome.tsx';
import Navbar from './assets/comonents/Navbar.tsx';
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Router>
        <div className="container flex-grow-1">
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/inntektsgrense" element={<Innteksgrense />} />
            <Route path="/formuegrense" element={<Formuegrense />} />
            <Route path="/fond" element={<Fond />} />
            <Route path="/bsusparing" element={<Bsubesparing />} />
            <Route path="/generelle-tips" element={<GenerelleTips />} />
            <Route path="/nettoformue" element={<Nettoformue />} />
            <Route path="/reise-fradrag" element={<Reisefradrag />} />
            <Route path="/rente-fradrag" element={<Rentefradrag />} />
            <Route path="/skattefritt-aksjer" element={<SkattefrittAskjer />} />
            <Route path="/utgiftsfradrag" element={<Utgiftsfradrag />} />
          </Routes>
        </div>
      </Router>
      <Analytics />
      <Footer />
    </div>
  )
}

export default App
