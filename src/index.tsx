import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/custom.css'
import "@fontsource/outfit";  // You can also specify the weight and style, e.g. @fontsource/outfit/400.css for normal weight

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
