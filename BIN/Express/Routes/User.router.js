import express from 'express';
import { Router } from 'express';
import path from 'path';



let router = Router();

// Midlleware 
router.route("/").get(
    (req, res, next) => {
        console.log(Date.now())
        next()
    },
    (req, res, next) => {
        console.log("TimeLogged")
        next()
    },
    (req, res) => {
        res.send("TimeLogged2")
    },
)

// One way to define routes
router.get("/username", (req, res) => {
    res.send("This is userName !!")
})

// anotherways to define routes
router.route("/register").get( (req, res)=>{
    res.send(`${req.cookies.username} registered successfully !!! `)
} )

// Deleting cookie
router.route('/Delete').get(
    (req, res, next) => {
        res.clearCookie('username')
        res.clearCookie('email')
        res.clearCookie('password')
        res.redirect(`/user/registrationform`)
    }
)
// URL Binding: taking variables from URL
router.route("/userdetails/:id/:name").get(
    (req, res) =>{
        res.send(`user ${req.params.id}: ${req.params.name} registered Successfully !!`)
    }
)

// Rendering Pug in specific route
router.route("/registrationform").get(
    (re, res, next) => {
        res.render("RegisterForm.pug", 
            // Variables used in the pug files
            {
                username: "Pritam Das",
                email: "er.pritamdas22@gmail.com",
                password: "!q@#WEUu*()_"
            })
    }
    
)

// Handle Form Data
router.route("/registeruser").post(
    (req, res, next) => {
        console.log(req.body.username)
        res.cookie("username", req.body.username)
        res.cookie("email", req.body.email)
        res.cookie("password", req.body.password)
        res.send("Recieved your Request !")
    }
    
)


//Serving static files 
router.route("/userImage").get(
    (req,res,next) => {
        console.log(process.cwd())
        res.sendFile(path.resolve(process.cwd(), 'public', 'index.html'));
        // res.sendFile(path.resolve(process.cwd(), 'public', 'image.jpg'));
    }
)

// Saving cookie



// If above routes are not present, this will execute, here * means all except above 
router.route("*").get(
    (req, res) => {
        res.send("Invalid Url !!!")
    }
)
export default router