import React from 'react'
import { useState } from 'react'
import "./BGChanger.css"

function BGChanger() {
    let [color, Setcolor] = useState("red")
  return (
    <div>
        <div style={{backgroundColor: color, width:"20vw",height:"20vw" }}></div>
        <button id = "One" onClick={()=>Setcolor("red")}>Red</button>
        <button id = "Two" onClick={()=>Setcolor("Blue")}>Blue</button>
        <button id = "Three" onClick={()=>Setcolor("green")}>Green</button>
    </div>
  )
}

export default BGChanger
