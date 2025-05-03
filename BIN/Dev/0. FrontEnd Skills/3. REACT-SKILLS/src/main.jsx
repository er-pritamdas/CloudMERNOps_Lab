import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Props from './components/Basics/Props.jsx'
import Use_state from './components/Hooks/Use_State.jsx'
import Use_effect from './components/Hooks/Use_Effect.jsx'
import Use_context from "./components/Hooks/Use_Context.jsx"
import BGChanger from './Projects/bgChanger/BGChanger.jsx'
import PassGen from './Projects/PasswordGenerator/PassGen.jsx'
import CurrencyConv from './Projects/CurrencyConvertor.jsx/CurrencyConv.jsx'
import BackEnd from './components/BackEnd/BackEnd.jsx'

let firstName = "Pritam"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Props Name = {firstName} lastName = "Das" />
    <Use_state />
    <Use_effect />
    <Use_context />
    <BGChanger />
    <PassGen />
    <CurrencyConv /> */}
    <BackEnd/>
  </StrictMode>,
)
/*
prop = {
  count: [a,b]
}
*/