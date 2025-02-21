import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Props from './components/Props/Props.jsx'
import Use_state from './components/Hooks/Use_State.jsx'

let firstName = "Pritam"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Props Name = {firstName} lastName = "Das" />
    <Use_state />
  </StrictMode>,
)
