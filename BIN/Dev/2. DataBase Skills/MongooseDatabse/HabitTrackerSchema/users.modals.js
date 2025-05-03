// why .modals.js? because it's a modal file that contains all the modals for the Users
// and it's a good practice to separate the modals from the main file
// It is still a javascript file, but for our convinent, we named it as .modals.js
// This file contains all the modals for the Users

import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    // username:String,
    // email:String,
    // password:String,
    // Above code is for the schema of the Users
    //It is not a good way of defining schema, below is the best practice
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:[true, "Password is required"], // the value of required must be true, but we can also pass an array with a message

    },
    userImages:{
        type:String,
    },
    // We can store images in database as well, but it is not a good practice
    // We should store images in a folder and store the path of the image in database
    // thats why we defined the type as string

    
},{timestamps:true}) //timestamps will automatically create a field for created at and updated at

export const User = mongoose.model("User", UsersSchema) //this will ceate amodel from the UserssSchema and export it as users
// Users in Database will changed to Userss (lowecase with s) and it will be pluralized
// Users -> users
