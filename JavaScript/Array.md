# Array Methods

| Method / Property          | Description                                                                   | Example Code                                     | Changes Original?    |
| -------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| **`length`**       | Returns the number of elements in the array.                                  | `let arr = [1,2,3]; arr.length // 3`           | ❌ Returns number    |
| **`toString()`**   | Converts the array to a comma-separated string.                               | `[1,2,3].toString() // "1,2,3"`                | ❌ Returns string    |
| **`at()`**         | Returns element at given index (supports negative indexing).                  | `[1,2,3].at(-1) // 3`                          | ❌ Returns value     |
| **`join()`**       | Joins array elements into a string with a separator.                          | `[1,2,3].join("-") // "1-2-3"`                 | ❌ Returns string    |
| **`pop()`**        | Removes the last element and returns it.                                      | `let a=[1,2,3]; a.pop() // 3`                  | ✅ Modifies array    |
| **`push()`**       | Adds element(s) to the end, returns new length.                               | `let a=[1,2]; a.push(3) // 3`                  | ✅ Modifies array    |
| **`shift()`**      | Removes first element and returns it.                                         | `let a=[1,2,3]; a.shift() // 1`                | ✅ Modifies array    |
| **`unshift()`**    | Adds element(s) to start, returns new length.                                 | `let a=[2,3]; a.unshift(1) // 3`               | ✅ Modifies array    |
| **`delete`**       | Removes element at index but leaves empty slot.                               | `let a=[1,2,3]; delete a[1]; a // [1,empty,3]` | ✅ Modifies array    |
| **`concat()`**     | Joins two or more arrays into a new one.                                      | `[1,2].concat([3,4]) // [1,2,3,4]`             | ❌ Returns new array |
| **`copyWithin()`** | Copies part of the array to another position in the same array.               | `[1,2,3,4].copyWithin(0, 2) // [3,4,3,4]`      | ✅ Modifies array    |
| **`flat()`**       | Flattens nested arrays to a given depth.                                      | `[1,[2,[3]]].flat(2) // [1,2,3]`               | ❌ Returns new array |
| **`slice()`**      | Returns part of an array into a new one.                                      | `[1,2,3,4].slice(1,3) // [2,3]`                | ❌ Returns new array |
| **`splice()`**     | Adds/removes/replaces elements at any index.                                  | `let a=[1,2,3]; a.splice(1,1) // [2]`          | ✅ Modifies array    |
| **`toSpliced()`**  | Returns a new array with splicing changes applied (does not modify original). | `let a=[1,2,3]; a.toSpliced(1,1) // [1,3]`     | ❌ Returns new array |

# Search Methods

| Method                    | Description                                                                                 | Changes Original Array? | Returns                      |
| ------------------------- | ------------------------------------------------------------------------------------------- | ----------------------- | ---------------------------- |
| **indexOf()**       | Returns the first index where a given element is found, or `-1`if not found.              | ❌ No                   | Number (index)               |
| **lastIndexOf()**   | Returns the last index where a given element is found, or `-1`if not found.               | ❌ No                   | Number (index)               |
| **includes()**      | Checks if an array contains a given element.                                                | ❌ No                   | Boolean (`true`/`false`) |
| **find()**          | Returns the first element that satisfies the given testing function, or `undefined`.      | ❌ No                   | Element (or `undefined`)   |
| **findIndex()**     | Returns the index of the first element that satisfies the testing function, or `-1`.      | ❌ No                   | Number (index)               |
| **findLast()**      | Returns the last element that satisfies the given testing function, or `undefined`.       | ❌ No                   | Element (or `undefined`)   |
| **findLastIndex()** | Returns the index of the last element that satisfies the given testing function, or `-1`. | ❌ No                   | Number (index)               |

# Sort Methods

| Method / Topic               | Description                                                                        | Example                             | Changes Original? |
| ---------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------- | ----------------- |
| **Alphabetic Sort**    | Default `sort()`method sorts elements as strings alphabetically (Unicode order). | `arr.sort()`                      | ✅ Yes            |
| **Array sort()**       | Sorts array in place based on Unicode values.                                      | `[3,1,4].sort()`→`[1,3,4]`     | ✅ Yes            |
| **Array reverse()**    | Reverses array in place.                                                           | `[1,2,3].reverse()`→`[3,2,1]`  | ✅ Yes            |
| **Array toSorted()**   | Returns a**new array**sorted (does not modify original).                     | `[3,1,4].toSorted()`              | ❌ No             |
| **Array toReversed()** | Returns a**new array**reversed (does not modify original).                   | `[1,2,3].toReversed()`            | ❌ No             |
| **Sorting Objects**    | Sort objects using a custom compare function.                                      | `arr.sort((a,b)=>a.age-b.age)`    | ✅ Yes            |
| **Numeric Sort**       | Sort numbers in ascending order using compare function.                            | `[10,2].sort((a,b)=>a-b)`         | ✅ Yes            |
| **Random Sort**        | Sort randomly using `Math.random() - 0.5`(not perfectly random).                 | `arr.sort(()=>Math.random()-0.5)` | ✅ Yes            |
| **Math.min()**         | Returns smallest number from arguments.                                            | `Math.min(1,5,3)`→`1`          | ❌ No             |
| **Math.max()**         | Returns largest number from arguments.                                             | `Math.max(1,5,3)`→`5`          | ❌ No             |
| **Home made Min()**    | Use `reduce()`to find smallest element.                                          | `arr.reduce((a,b)=>a<b?a:b)`      | ❌ No             |
| **Home made Max()**    | Use `reduce()`to find largest element.                                           | `arr.reduce((a,b)=>a>b?a:b)`      | ❌ No             |


# JavaScript Array Iteration Methods

## 1. `forEach()`

**Description:**
Executes a provided function once for each array element.

**Example:**

```javascript
const arr = [1, 2, 3];
arr.forEach(num => console.log(num)); // 1 2 3
```

## 2. `map()`

**Description:**
Creates a new array with the results of calling a provided function on every element.

**Example:**

```javascript
const arr = [1, 2, 3];
const doubled = arr.map(num => num * 2); // [2, 4, 6]
```

## 3. `flatMap()`

**Description:**
Maps each element using a function, then flattens the result into a new array.

**Example:**

```javascript
const arr = [1, 2, 3];
const result = arr.flatMap(num => [num, num * 2]); // [1, 2, 2, 4, 3, 6]
```

## 4. `filter()`

**Description:**
Creates a new array with all elements that pass the test implemented by the provided function.

**Example:**

```javascript
const arr = [1, 2, 3, 4];
const even = arr.filter(num => num % 2 === 0); // [2, 4]
```

## 5. `reduce()`

**Description:**
Executes a reducer function on each element, resulting in a single output value.

**Example:**

```javascript
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, curr) => acc + curr, 0); // 10
```

## 6. `reduceRight()`

**Description:**
Same as `reduce()`, but processes elements from right to left.

**Example:**

```javascript
const arr = ['a', 'b', 'c'];
const reversed = arr.reduceRight((acc, curr) => acc + curr, ''); // 'cba'
```

## 7. `every()`

**Description:**
Checks if all elements pass the test implemented by the provided function.

**Example:**

```javascript
const arr = [2, 4, 6];
const allEven = arr.every(num => num % 2 === 0); // true
```

## 8. `some()`

**Description:**
Checks if at least one element passes the test implemented by the provided function.

**Example:**

```javascript
const arr = [1, 2, 3];
const hasEven = arr.some(num => num % 2 === 0); // true
```

## 9. `from()`

**Description:**
Creates a new array from an array-like or iterable object.

**Example:**

```javascript
const str = 'hello';
const arr = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
```

## 10. `keys()`

**Description:**
Returns a new Array Iterator object that contains the keys (indexes) for each element.

**Example:**

```javascript
const arr = ['a', 'b', 'c'];
const keys = Array.from(arr.keys()); // [0, 1, 2]
```

## 11. `entries()`

**Description:**
Returns a new Array Iterator object that contains key/value pairs for each index.

**Example:**

```javascript
const arr = ['a', 'b', 'c'];
for (const [index, value] of arr.entries()) {
  console.log(index, value); // 0 'a', 1 'b', 2 'c'
}
```

## 12. `with()`

**Description:**
Returns a new array with the element at the given index replaced with a new value (does not mutate original).

**Example:**

```javascript
const arr = [1, 2, 3];
const newArr = arr.with(1, 99); // [1, 99, 3]
```

## 13. Spread (`...`)

**Description:**
Expands elements of an array or object.

**Example:**

```javascript
const arr = [1, 2, 3];
const copy = [...arr]; // [1, 2, 3]
const merged = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
```

## 14. Rest (`...`)

**Description:**
Collects remaining elements into an array.

**Example:**

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
sum(1, 2, 3); // 6
```
