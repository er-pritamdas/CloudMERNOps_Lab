let MyString = "This is in Double Quotes"
let SingleQ = 'This is in Single Quotes'


// Double inside Single or Vice Versa
let DoubQ = "Double inside 'Single' "
let SinQ = 'Single inside "Double"'


//Template Strings
let TempStg = `This string written in backticks "Can use double quotes", 'as well as Single Quotes'`


//String as Objects 
let MyObjString = new String("This is my string")
console.log(MyObjString)
console.log(typeof MyObjString) // This is an Object 


// String as String
let MyStr = "This is my String"
console.log(MyStr)
console.log(typeof MyStr)


//Escape Characters







// Object vs String
// is my object string is === Normal String
console.log(MyObjString === MyStr) // False
// Comparing two Objects in JS always return False
let x = "This"
let y = "This"
console.log(typeof x);
console.log(typeof y);
console.log(x === y); // As they borth are string, the return value is True
let NObj1 = new Object("String")
let NObj2 = new Object("String")
console.log(typeof NObj1)
console.log(typeof NObj2)
console.log(NObj1 === NObj2); // Both are object so false 



// String Methods ------------------------------------------------------------------------------------
// All String methods Return a new String, they donot modify the actual string, as they are immutable

// Length
let LengthString = "ABCDEFGHIJKLMNOPQRSTUVWWXYZ"
console.log(LengthString.length) // Prints the Length of the String : 27


// Extracting String Character 
let Random = "Hello World"
console.log(Random)
// charAt()
console.log(Random.charAt(0)) // Returns a String from the position 
console.log(Random.charAt(1)) // Returns a String from the position 
console.log(Random.charAt(2)) // Returns a String from the position 
console.log(Random.charAt(3)) // Returns a String from the position 
console.log(Random.charAt(-1)) // Doesnt Allow Negative Indexing
// charCodeAt()
console.log(Random.charCodeAt(0)) // Returns the Code of the Character of the position mentioned
console.log(Random.charCodeAt(1)) // Returns the Code of the Character of the position mentioned
console.log(Random.charCodeAt(2)) // Returns the Code of the Character of the position mentioned
console.log(Random.charCodeAt(3)) // Returns the Code of the Character of the position mentioned
// at()
console.log(Random.at(0)) // Returns a String from the position 
console.log(Random.at(1)) // Returns a String from the position 
console.log(Random.at(2)) // Returns a String from the position 
console.log(Random.at(3)) // Returns a String from the position 
console.log(Random.at(-1)) // Allow negative Indexes 
// Accessing by []
console.log(Random[0])
console.log(Random[1])
console.log(Random[2])
console.log(Random[3])
console.log(Random[4])
console.log(Random[5])


//Extracting String Parts
// slice()
let text = "Apple, banana, Kiwi"
console.log(text) // Counts starts from 0 
console.log(text.slice(7,13)) // Extracting the String Start position to End Position
console.log(text.slice(-12)) // last to -12 Postion 
console.log(text.slice(-12. -6)) //  from -12 to -6 
// substring()
console.log(text) // Counts starts from 0 
console.log(text.substring(7,13)) // doesnot support negative indexing (<0 = 0)
console.log(text.substring(-12,-6)) // doesnot support negative indexing (<0 = 0)
//substr()
console.log(text.substr(7,6)) // prints the 6 characters from 7th position
console.log(text.substr(-2,6)) // prints the 6 characters from last 2nd position


// Converting Uppercase, Lowercase
let upper = "Hello World"
console.log(upper)
//toUpperCase()
console.log(upper.toUpperCase());
//toLowerCase()
console.log(upper.toLowerCase());


//String Concat
let part1 = "Hello";
let part2 = "World"
console.log(part1.concat(" ", part2))


// Removing Side Whitespaces
let white = "    Hello This is  me    "
console.log(white.trim()) //Remove Space from the both end
console.log(white.trimStart()) //Remove space from start
console.log(white.trimEnd()) //Remove space from end

// String Padding
let pad = "Me"
console.log(pad)
console.log(pad.padStart(4,"+")) // it will insert 4 + in start
console.log(pad.padEnd(4,"+")) // it will insert 4 + in end

//String Repeat
let rep = "Pritam"
console.log(rep)
console.log(rep.repeat(2)) //Pritnt Two Times

//String Replace
let replace = "This is s very long text... is, Iam writing is, so that many is will come in this is okay"
console.log(replace.replace("is", "Microsoft")) // Replace only first occurance 
console.log(replace.replace("THIS", "Microsoft")) // Replace only first occurance , It is Case Sensitive also
console.log(replace.replace(/THIS/i, "Hello")) // This make the search insensitive, Regular expression are written without Quotes 
console.log(replace.replace(/is/ig, "AMAZON")) // Replace all is, IS
console.log(replace.replaceAll("is", "TATA")) //This will replcae all is 
console.log(replace.replaceAll(/is/ig, "TATA")) //if wanted to use the regex in replaceall, must use g 


//String Split
console.log(replace)
console.log(replace.split(" ")); // returns a array
let SplitText = "This+is+me+"
console.log(SplitText.split("+"));

// String Search ------------------------------------------------------------------------------------







