
// ----------------------------------------------------------------------------------------------------
//                                                  STRINGS
// ----------------------------------------------------------------------------------------------------

name = "Pritam"
Wife = 'Jyotsna'
textOne = "We can use 'single' inside DOuble Quote or Vice Versa"
backticks = `We can use backticks to use "" and '' inside ` // Template strings 

console.log(`Length of the Line is : ${backticks.length}`)

backslash = "use this\" backslash to use quotes inside quotes \" "

console.log(`Type of String is : ${typeof backticks}`)

// String can also be defined using new Keywaord, but this string is of type object
newString = new String("THis is a new string")
console.log(`Type of String is : ${typeof newString} \n length : ${newString.length}`)


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
let string = "Hello World, This is is my is name is pritam is Das is "
console.log(`repeted texts : ${string.repeat(2)}`);

// replace()
console.log(`repeted texts : ${string.replace("is","my")}`); // match the first occurance
console.log(`repeted texts : ${string.replace("IS","my")}`); // Case sensisitve, wot change anything
console.log(`repeted texts : ${string.replace(/IS/i,"my")}`); // Case insensitive 
console.log(`repeted texts : ${string.replace(/is/g,"my")}`); // all Matches 
console.log(`repeted texts : ${string.replaceAll("is","my")}`); // Replace all, if wanted to use regex then must use "g"

// split() -> this return an array 
splitText = "thi, is , a , split, text"
console.log(`this is a split text${splitText}`)
console.log(`splitted into array : ${splitText.split(",")}`)


//-------------------------------------------------String Search --------------------------------

// IndexOf
StringSearch = "pleasse find locate where locate occurs, and please locate it "
console.log(`First index Index : ${StringSearch.indexOf("locate")}`) //  return the index of first "locate"
console.log(`last Index : ${StringSearch.lastIndexOf("locate")}`) //  return the index of last "locate"
// both return -1 if text is not found
// both function accepts from where to start the search
console.log(`Last Index : ${StringSearch.lastIndexOf("locate", 20)}`) //  return the index of last "locate"


// search
console.log(`search Index : ${StringSearch.search("locate")}`) //  return the index 
// Search and indexOf is different
// Search can have regex
// indexOf can have second argument


// Match
console.log(`match index : ${StringSearch.match("ate")}`) //  Can support RegEx, written the string
console.log(`match index : ${StringSearch.match(/ate/g)}, length: ${StringSearch.match(/ate/g).length}`) //  Can support RegEx, written the string
console.log(`match index : ${StringSearch.matchAll("ate")}, ${Array.from(StringSearch.matchAll("ate"))} ,length: ${StringSearch.match(/ate/g).length}`) //  Can support RegEx, written the string if wanted to use regex then must use "g"


// includes
console.log(`match index : ${StringSearch.includes("ate")}`) //  Return True or False function accepts from where to start the search

//startswith endswith
// both support second parameter, from where to start the search
// Return true or False 
console.log(`match index : ${StringSearch.startsWith("locate")}`) //False
console.log(`match index : ${StringSearch.endsWith("it ")}`) // True














