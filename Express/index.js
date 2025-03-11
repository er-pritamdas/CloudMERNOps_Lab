import express from 'express';
import UserNameRouter from './Routes/User.router.js';
import bodyParser from 'body-parser';
import multer from 'multer';
import cookieParser from 'cookie-parser';


let upload = multer()
const app = express();

// --------------------- Setting Dependencies -------------------
// Setting Pug as default option for res.render()
app.set('view engine', 'pug')
// By default express look into views folder for pug files, 
// here we can change it to ./PugFiles
app.set('views', './PugFiles')
// by default does not allow you to serve static files. You need to enable it using the following built-in middleware.
app.use(express.static('public'))
// For parsing application/json
app.use(bodyParser.json())
// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}))
// for parsing multipart/form-data
app.use(upload.array());
// For cookies operation 
app.use(cookieParser());


// for default route
app.get("/", (req,res)=>{
    res.send("Hello From Express")
    console.log(req.ip)
    // console.log(res)
})

// Routes seperated from here
app.use("/user", UserNameRouter)


const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Server Started at", PORT)
})