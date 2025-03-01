// why .modals.js? because it's a modal file that contains all the modals for the Habit
// and it's a good practice to separate the modals from the main file
// It is still a javascript file, but for our convinent, we named it as .modals.js
// This file contains all the modals for the Habit

import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
    running:{
        type:String,
    },
    swimming:{
        type:String,
    },
    cycling:{
        type:String,
    },
    reading:{
        type:String,
    },
    writing:{
        type:String,
    },
    coding:{
        type:String,
    },
    CreatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    

},{})

export const Habit = mongoose.model("Habit", habitSchema) //this will ceate amodel from the HabitsSchema and export it as Habits 
// Habit in Database will changed to Habits (lowecase with s) and it will be pluralized
// Habit -> habits
