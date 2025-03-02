// This js file will explain how to connect the front end with the back end.

// const express = require("express"); //  this is common js
import express from 'express'; // This is module js
// Above line work asynchronusly. 
// to use this line, we have to use the "type": "module" in the package.json file.


const app = express();
const port = process.env.PORT || 3000;

// app.get("/",(req,res)=>{
//     res.send("Server is ready ")
// });


// get a list of 5 jokes
app.get("/api/jokes", (req,res)=>{
    const jokes = [
        {
            id: 1,
            question: "Why did the chicken cross the road?",
            answer: "To get to the other side"
        },
        {
            id: 2,
            question: "What do you call a fish with no eyes?",
            answer: "Fsh"
        },
        {
            id: 3,
            question: "What do you call a bear with no teeth?",
            answer: "A gummy bear"
        },
        {
            id: 4,
            question: "Why did the tomato turn red?",
            answer: "Because it saw the salad dressing"
        },
        {
            id: 5,
            question: "What do you call a pile of cats?",
            answer: "A meowtain"
        }
    ]
    res.send(jokes);
});
// Above code is used to get the list of jokes.
// which need to be displayed in the frontend.

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});