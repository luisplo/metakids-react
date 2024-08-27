import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GuestLayout from './layouts/GuestLayout.jsx'
import Activity from './pages/Activity.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GuestLayout>
      <Activity />
    </GuestLayout>
  </StrictMode>,
)
