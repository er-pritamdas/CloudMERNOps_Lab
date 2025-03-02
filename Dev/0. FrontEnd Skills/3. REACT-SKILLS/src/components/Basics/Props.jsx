import { useState } from 'react'
// Important Thing to remember is that CSS used here will be overwritten to index.css
import "./Props.css"

// Using normal props
function Props(props) {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1>Props: Properties</h1>
    <hr />
    <div>{props.Name} | {props.lastName}</div>
    <PropsTwo wife="Jassi" WifeFilleName = "Jyotsna Bharti" />
    </>
  )

  // Destructuring of Object: Props
  function PropsTwo({wife, WifeFilleName}){
    return (
    <>
    <div>{props.wife}</div>
    <div>{props.WifeFilleName}</div>

    <div>{wife}</div>
    <div>{WifeFilleName}</div>
    </>
    
    )
  }
}
// Props is an Object
export default Props
