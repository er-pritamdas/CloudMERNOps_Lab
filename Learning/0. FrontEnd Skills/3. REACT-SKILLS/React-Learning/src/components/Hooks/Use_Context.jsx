//First we have to create the context
import {createContext} from 'react'
const GlobalObject = createContext() // This will help my state to make into gloabl variable, so that instead of passing the state as argument, I can use it GLobally 
// Above 2 Steps are first Steps: Which will create the CreateContext()
import {useState, useEffect, useContext} from 'react'

// function Compopnent1(){

//     let [Count, SetCount] = useState(1)
//     return(
//         <>
//         <div>This is {Count}st Div</div>
//         <Component2 count={[Count, SetCount]}/>
//         </>
//     )
// }

// function Component2(prop){
    
//     return(
//         <>
//         <div>This is {prop.count[1](2)} {prop.count[0]}nd Div</div>
//         {/* Upper Line is Very Intersting 
//         Froim This we understiood that though we can use UseSState function into another function, what if there is prop drilling, we can not pass on the state everytime Right*/}
//         </>
//     )
// }

function Component3(){
   
    let [Count, SetCount] = useState(1)

    return(
        <>
            {/* This will create the value as global */}
            <GlobalObject.Provider value={[Count, SetCount]}>
                {/* This Tag will return the gloabl Object as count
                So That I can use the Count Variable anywhere */}
                <div>The Value of Count is {Count} || 1st Component</div>
                <Component4 />
            </GlobalObject.Provider>
        </>
    )
}

function Component4(){
    
    const Count = useContext(GlobalObject)
    return(
        <>
        {/* How to use the {Count} Variable */}
        {Count[1](2)} 
        {/* We can now able to access the Count without Using */}
        <div>The Value of Count is {Count} || 1st Component</div>
        </>
    )
}




function Use_context (){

    return(
        <>
        <h1>Use Context</h1>
        <hr></hr>
        <Component3 />
        </>
    )
}

export default Use_context