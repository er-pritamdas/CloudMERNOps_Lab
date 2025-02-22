import { useState, useEffect } from 'react'

function Use_effect() {

    let [Number, setNumber] = useState(1)
    let [Arr, setArr] = useState([])
    useEffect(() => {
        // let arr = [] // THis wont Work as it is local 
        let NewArr = []
        for (let i = 1; i <= 10; i++) {
            NewArr.push(
                <p key={i}>{Number} * {i} = {Number * i}</p> // This key is not much important, we will understad later 
            )
            setArr(NewArr)
        }
    }, [Number])

    function ChangeNumber(){
        setNumber(Number + 1)
    }
    return (
        <>
        <h1>Use Effect {Number}</h1>
        <hr />
        <button onClick={ChangeNumber}>Change Number</button>
        <div>{Arr}</div>
        </>
    )
}

export default Use_effect