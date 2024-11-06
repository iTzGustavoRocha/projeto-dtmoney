import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DTMoney from './DTMoney'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DTMoney />
  </StrictMode>,
)
