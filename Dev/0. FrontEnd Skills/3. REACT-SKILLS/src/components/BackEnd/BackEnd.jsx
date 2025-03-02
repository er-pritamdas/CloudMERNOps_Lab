import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


function BackEnd() {
    const [jokes, setJokes] = useState([])
    // There are many ways to send API request from the frontend to the backend.
    // One of the most common way is to use the fetch API.
    // There are many ways like axios, superagent, react-query, etc.
    // we are using axios here.
    // axios is a promise based HTTP client for the browser and node.js.
    // axios is used to make HTTP requests from the browser.

    // useEffect is used to run the code only once when reload the page, as I wont be using any dependency.
    useEffect(()=>{
        axios.get("/api/jokes")
        .then((response)=>{
            setJokes(response.data)
        })
        .catch((err)=>{
            console.log(`Error in fetching data: ${err}`)
        })
    })
    // The above fethcing will throw error : CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    // This is because the backend is running on a different port than the frontend.
    // CORS is a security feature implemented in the browser that restricts the frontend from making requests to a different domain.
    // To fix this error, we need to enable CORS in the backend.

    // to fix this we used proxy in the vite.config.js file.
    // Proxy is used to forward the request from the frontend to the backend.
    // proxy will make our frontend think that the backend is running on the same domain.
    // This will fix the CORS error.

  return (
    <>
      <h1>This will show Jokes from BackEnd</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((value, index)=>{
            return (
                <>
                <p key={value.id}>
                    <h1>Joke: {index+1}</h1>
                    <h3>Question: {value.question}</h3>
                    <h4>Answer: {value.answer}</h4>
                </p>
                <hr />
                </>
            )
        })
      }
    </>
  )
}

export default BackEnd


// Bad Practices:
// 1. After building the broject by using the command "npm run build", the build folder will be created.
//    This build folder will contain the optimized version of the project.
//    This build folder can be pasted to the server to deploy the project.
//    This build folder will contain the optimized version of the project.
