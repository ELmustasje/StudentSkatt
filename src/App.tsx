import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './assets/Footer'
import Guide from './assets/Pages/Guide'
import Innteksgrense from './assets/Pages/Innteksgrense';
import Formuegrense from './assets/Pages/Formuegrense';
import Fond from './assets/Pages/Fond';
import Bsubesparing from './assets/Pages/Bsusparing';
import GenerelleTips from './assets/Pages/GenerelleTips';
import Nettoformue from './assets/Pages/Nettoformue';
import Reisefradrag from './assets/Pages/Reisefradrag';
import Rentefradrag from './assets/Pages/Rentefradrag';
import SkattefrittAskjer from './assets/Pages/SkattefrittAksjer';
import Utgiftsfradrag from './assets/Pages/Utgiftsfradrag';
import Welcome from './assets/Welcome';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <div className="container flex-grow-1">
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/inntektsgrense" element={<Innteksgrense />} />
            <Route path="/formuegrense" element={<Formuegrense />} />
            <Route path="/fond" element={<Fond />} />
            <Route path="/bsubesparing" element={<Bsubesparing />} />
            <Route path="/generelle-tips" element={<GenerelleTips />} />
            <Route path="/nettoformue" element={<Nettoformue />} />
            <Route path="/reise-fradrag" element={<Reisefradrag />} />
            <Route path="/rente-fradrag" element={<Rentefradrag />} />
            <Route path="/skattefritt-aksjer" element={<SkattefrittAskjer />} />
            <Route path="/utgiftsfradrag" element={<Utgiftsfradrag />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App
