import React from 'react'
import {useState, useCallback, useEffect, useRef} from 'react'

function PassGen() {
    let [length, SetLength] = useState(8)
    let [number, SetNumber] = useState(false)
    let [char, setChar] = useState(false)
    let [password, setPassword] = useState("")

    //useRef Hook
    let myInputPass = useRef(null)

    let PassGen = useCallback(()=>{
        let pass = ""
        let str = "ABCDEFGTHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(number) str += "0123456789"
        if(char) str += "!@#$%^&*()_+{}[]::<>?/~"

        for (let i = 0; i <= length; i++) {
            let x = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(x)
        }
        setPassword(pass)
    }, [length, number, char])

    useEffect(
        ()=>PassGen(), [length, number, char] 
    )

    function CopyPassword(){
        myInputPass.current.select()
        window.navigator.clipboard.writeText(password)
    }
  return (
    <>
      <h1>Password Generator</h1>
      <input type="text" value={password} placeholder='Password' readOnly ref={myInputPass}/>
      <button
      onClick={CopyPassword}>Copy</button>
      <br />

      <label>Length: {length}</label>
      <input 
      type="range" 
      min={6} 
      max ={100} 
      value={length}
      onChange={(e)=>{SetLength(e.target.value)}}/> <br /><br />

      <input id= "NumberInput" type="checkbox" defaultChecked={number} 
      onChange={()=>{
        SetNumber( (prev) => !prev)
      }}/>
      <label for= "Numberinput" >Number : {number}</label>

      <input id= "CharInput" type="checkbox" defaultChecked={char}
      onChange={()=>{
        setChar((prev)=> !prev)
      }}/>
      <label for= "Charinput" >Special Character : {char}</label>

    </>
  )
}

export default PassGen
