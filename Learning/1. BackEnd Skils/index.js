// This server donot do hot reloading. So, we have to restart the server to see the changes.
// To run the server, type "node index.js" in the terminal.
const express = require('express'); //  this is common js
// import express from 'express'; // This is module js 
require('dotenv').config(); // This is used to use the environment variable.
// This is used to use the environment variable. We have to create a file named ".env" in the root directory. And we have to write the environment variable in that file.
const app = express();

// you shouldnot directly use the port number. You should use the environment variable.
// const port = process.env.PORT || 3000; // This is the way to use the environment variable.
// const port = 3000;
const port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send("Hello World")
})
app.get("/pritam",(req, res)=>{
    res.send("Hello Pritam")
})
app.get("/login",(req,res)=>{
    res.send("<h1>Hello Baby</h1>")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})