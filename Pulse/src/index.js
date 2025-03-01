// require('dotenv').config({path:"./env"}); // This make my code little bit incosistent.
// Like we are importing all the files and fo;ders but for .env file we are using require.
// So, we will use import dotenv from 'dotenv'; instead of require('dotenv').config({path:"./env"});
import dotenv from 'dotenv';
// but here we have configure one more line to make it work.
dotenv.config({path:"./env"});

import express from 'express';
import connectDB from './db/index.js';


connectDB();




// This is First Approach to connect to database
/*
const app = express();

// As Databases are in the another continent or very far from the server, it takes time to connect to the database. So, we need to wait for the connection to be established before we start the server. So, we need to use async-await here.
// I want to connect to database when my server starts. So, I will use IIFE here.
( async () => {
    try {
        await mongoose.connect(`${proccess.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log(`Error: ${error.message}`);
        });

        app.listen(process.env.PORT, ()=>{
            console.log("Server is running on port 3000");
        });


    } catch (error) {
        console.log(`Error: ${error.message}`);
        throw error; // What is this ?
        // This will stop the server from starting if there is an error in the database connection.
    }
})();
*/