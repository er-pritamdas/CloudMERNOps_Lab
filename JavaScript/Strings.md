# **String Methods**

| Method                                  | Description                                                             | Example Code                                      | Changes Original?     |
| --------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------- | --------------------- |
| **`length`**                    | Returns the number of characters in a string.                           | `"Hello".length // 5`                           | ❌ Returns value      |
| **`charAt()`**                  | Returns the character at a specified index.                             | `"Hello".charAt(1) // "e"`                      | ❌ Returns value      |
| **`charCodeAt()`**              | Returns the UTF-16 code of the character at a given index.              | `"A".charCodeAt(0) // 65`                       | ❌ Returns value      |
| **`codePointAt()`**             | Returns the Unicode code point of a character at a given index.         | `"😊".codePointAt(0) // 128522`                 | ❌ Returns value      |
| **`concat()`**                  | Joins two or more strings.                                              | `"Hello".concat(" ", "World") // "Hello World"` | ❌ Returns new string |
| **`at()`**                      | Returns the character at a given position (supports negative indexing). | `"Hello".at(-1) // "o"`                         | ❌ Returns value      |
| **`[ ]`**                       | Accesses a character like an array index.                               | `"Hello"[0] // "H"`                             | ❌ Returns value      |
| **`slice()`**                   | Extracts a section of a string (supports negative indices).             | `"Hello".slice(1, 4) // "ell"`                  | ❌ Returns new string |
| **`substring()`**               | Extracts characters between two indices (no negative values).           | `"Hello".substring(1, 4) // "ell"`              | ❌ Returns new string |
| **`substr()`** *(deprecated)* | Extracts part of a string starting at an index with a given length.     | `"Hello".substr(1, 3) // "ell"`                 | ❌ Returns new string |
| **`toUpperCase()`**             | Converts the string to uppercase.                                       | `"hello".toUpperCase() // "HELLO"`              | ❌ Returns new string |
| **`toLowerCase()`**             | Converts the string to lowercase.                                       | `"HELLO".toLowerCase() // "hello"`              | ❌ Returns new string |
| **`isWellFormed()`**            | Checks if the string contains only well-formed Unicode characters.      | `"abc".isWellFormed() // true`                  | ❌ Returns boolean    |
| **`toWellFormed()`**            | Returns a well-formed string by replacing invalid Unicode sequences.    | `"\uD800".toWellFormed() // "�"`               | ❌ Returns new string |
| **`trim()`**                    | Removes whitespace from both ends of a string.                          | `"  hello  ".trim() // "hello"`                 | ❌ Returns new string |
| **`trimStart()`**               | Removes whitespace from the start of a string.                          | `"  hello".trimStart() // "hello"`              | ❌ Returns new string |
| **`trimEnd()`**                 | Removes whitespace from the end of a string.                            | `"hello  ".trimEnd() // "hello"`                | ❌ Returns new string |
| **`padStart()`**                | Pads the start of a string to a certain length with another string.     | `"5".padStart(3, "0") // "005"`                 | ❌ Returns new string |
| **`padEnd()`**                  | Pads the end of a string to a certain length with another string.       | `"5".padEnd(3, "0") // "500"`                   | ❌ Returns new string |
| **`repeat()`**                  | Repeats a string a specified number of times.                           | `"ha".repeat(3) // "hahaha"`                    | ❌ Returns new string |
| **`replace()`**                 | Replaces the first match of a substring or pattern.                     | `"hello".replace("l", "x") // "hexlo"`          | ❌ Returns new string |
| **`replaceAll()`**              | Replaces all matches of a substring or pattern.                         | `"hello".replaceAll("l", "x") // "hexxo"`       | ❌ Returns new string |
| **`split()`**                   | Splits a string into an array based on a separator.                     | `"a,b,c".split(",") // ["a","b","c"]`           | ❌ Returns array      |

# String Search Methods

| Method                      | Description                                                                                                    | Example Code                                            | Changes Original?        |
| --------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------ |
| **`indexOf()`**     | Returns the first index of the given substring, or `-1`if not found.                                         | `"Hello World".indexOf("o") // 4`                     | ❌ Returns number        |
| **`lastIndexOf()`** | Returns the last index of the given substring, or `-1`if not found.                                          | `"Hello World".lastIndexOf("o") // 7`                 | ❌ Returns number        |
| **`search()`**      | Searches for a match using a string or RegExp and returns the index of the first match, or `-1`if not found. | `"Hello World".search(/o/) // 4`                      | ❌ Returns number        |
| **`match()`**       | Returns an array with matches for a string or RegExp, or `null`if no match is found.                         | `"Hello".match(/l/g) // ["l","l"]`                    | ❌ Returns array or null |
| **`matchAll()`**    | Returns an iterator with all matches of a RegExp (must have global flag).                                      | `Array.from("Hello".matchAll(/l/g)) // [["l"],["l"]]` | ❌ Returns iterator      |
| **`includes()`**    | Checks if a string contains a given substring.                                                                 | `"Hello".includes("ell") // true`                     | ❌ Returns boolean       |
| **`startsWith()`**  | Checks if a string starts with a given substring.                                                              | `"Hello".startsWith("He") // true`                    | ❌ Returns boolean       |
| **`endsWith()`**    | Checks if a string ends with a given substring.                                                                | `"Hello".endsWith("lo") // true`                      | ❌ Returns boolean       |
