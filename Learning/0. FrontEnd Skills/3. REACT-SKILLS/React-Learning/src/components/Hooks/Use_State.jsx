import { useState } from 'react'
// Important Thing to remember is that CSS used here will be overwritten to index.css



// Hooks :  Use State 
function Use_state() {
  let [count, setCount] = useState(10) // used seState ()
  function Addcount() {
    count = count + 1
    setCount(count)
  }
  function Subcount() {
    count = count - 1
    setCount(count)
  }
  return (
    <>
      <hr />
      <br />
      <h1>Hooks: {count}</h1>
      <hr />
      <button onClick={Addcount}>count + + </button>
      <button onClick={Subcount}>count - -</button>
      <br />
      <br />
      <Demo />
    </>
  )

}
function Demo() {
  let [car, setCar] = useState({
    brand: "BMW",
    color: "Red",
    Year: "1992"
  })
  // setCar({color:"red"})
  // console.log(car)
  function ChangeColor() {
    setCar((previousState) => {
      return { ...previousState, color: "Blue" }
    })
  }

  // I we donot keep the SetCar inside function :
  // What happens here:

  // setCar is called on every render of the Demo component.
  // That triggers a state update → causes a re-render → React calls setCar again → infinite loop.
  // Your app will either crash or React will throw a warning about too many renders.

  return (
    <>
      <div>I have {car.brand}, Which is {car.color} in color</div>
      <button onClick={ChangeColor}>Change Color</button>
      <div>I have {car.brand}, Which is {car.color} in color</div>
    </>
  )
}

export default Use_state
