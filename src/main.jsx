import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Probes from './pages/Probes'
import App from './pages/App'
import BackgroundChanger from './pages/BackgroundChanger'
import BackgroundChanger2 from './pages/BackgroundChanger2'
import PasswordGenerator from './pages/PasswordGenerator'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <Probes/> */}
    {/* <BackgroundChanger/> */}
    {/* <BackgroundChanger2/> */}
    <PasswordGenerator/>
  </StrictMode>,
)
