import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'rc-slider/assets/index.css'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </StrictMode>
)

// BrowseRouter to allow App using Route and Routes
