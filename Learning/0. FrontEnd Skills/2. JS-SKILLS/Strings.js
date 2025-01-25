"use strict";
// ----------------------------------------------------------------------------------------------------
//                                                  STRINGS
// ----------------------------------------------------------------------------------------------------

// name = "Pritam"
// Wife = 'Jyotsna'
// textOne = "We can use 'single' inside DOuble Quote or Vice Versa"
// backticks = `We can use backticks to use "" and '' inside ` // Template strings 

// console.log(`Length of the Line is : ${backticks.length}`)

// backslash = "use this\" backslash to use quotes inside quotes \" "

// console.log(`Type of String is : ${typeof backticks}`)

// String can also be defined using new Keywaord, but this string is of type object
// newString = new String("THis is a new string")
// console.log(`Type of String is : ${typeof newString} \n length : ${newString.length}`)


// Strings Methods
// -------------------------------

console.log("-----------------------------------------STRING METHODS---------------------------")
let text = "ABCDEFGHIJKLAMNOPQRSTUVWXYZ"

// finding the length
console.log(`Length : ${text}`)
console.log(`Length : ${text.length}`)

// Extracting String Characters
console.log(`extracted String is : ${text.charAt(0)}`) //doesnt support -ve Indexing
console.log(`extracted String is : ${text.charCodeAt(0)}`) // Return the charCode of the character eg W = 87
console.log(`extracted String is : ${text.at(0)}`) // support -ve Indexing
console.log(`extracted String is : ${text[0]}\n`)


// Extracting String Parts 
console.log(`String part is : ${text.slice(0,5)}`) //start and end, supports -ve indexing
console.log(`String part is : ${text.substring(0,5)}`) // start and end, but doesnt suport -ve indexing
console.log(`String part is : ${text.substr(0,12)}`) // start and length, support -ve indexing 

// Change Cases
console.log(`Changing is : ${text.toUpperCase()}`) // to upercase
console.log(`Changing is : ${text.toLowerCase()}`) // to lowercase 

// String trim
let desi = "        this is    blah blav    jsjjs       "
console.log(`trim is : ${desi}`) // trimming
console.log(`trim is : ${desi.trim()}`) // trimming
console.log(`trim is : ${desi.trimStart()}`) // trimming
console.log(`trim is : ${desi.trimEnd()}`) // trimming

// padding 
let change = 5
console.log(`trim is : ${change}`) // trimming
// console.log(`trim is : ${change.padStart(10,"x")}`) // trimming
// console.log(`trim is : ${change.padEnd(5,"g")}`) // trimming\

// Repeat()

// replace()

// replaceAll()

// split()



