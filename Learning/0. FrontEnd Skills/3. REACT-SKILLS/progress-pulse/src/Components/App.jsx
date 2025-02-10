import Spline from '@splinetool/react-spline';
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Spline scene="https://prod.spline.design/BNTvYP6AkhQhT8Cx/scene.splinecode" />
      <div id="navbar">
        <a href="#">Home</a>
      </div>
    </>
  )
}

export default App
