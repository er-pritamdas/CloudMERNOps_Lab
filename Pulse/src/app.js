import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();


// This line is used to allow the request from the frontend to the backend.
// We are using the environment variable to allow the request from the frontend to the backend.
app.use(cors({
    origin: process.env.CORS_ORIGIN, // This is the URL of the frontend. * means allow from all the URL.
    credentials: true, // This is used to allow the credentials from the frontend.
}));

app.use(express.json(
    {limit: "16kb"}
)); // This is used to parse the incoming request with JSON payloads.

app.use(express.urlencoded(
    {extended: true, limit: "16kb"}
)); // This is used to parse the incoming request with URL-encoded payloads.

app.use(express.static("public")); // This is used to serve the static files like images, CSS, and JavaScript files.

app.use(cookieParser()); // This is used to parse the incoming cookies from the request.


app.get('/',(err,req,res,next)=>{
    res.send("Hello World");
})

export default app;
// This is the first file that will be executed when we start the server. So, we will write all the code related to the server here.

