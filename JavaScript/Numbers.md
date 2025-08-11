
# Number Methods

| Method / Property                    | Description                                                                    | Example Code                                       | Changes Original?  |
| ------------------------------------ | ------------------------------------------------------------------------------ | -------------------------------------------------- | ------------------ |
| **`toString()`**             | Returns a string representation of the number.                                 | `(123).toString() // "123"`                      | ❌ Returns string  |
| **`toExponential()`**        | Returns a string in exponential notation.                                      | `(12345).toExponential(2) // "1.23e+4"`          | ❌ Returns string  |
| **`toFixed()`**              | Returns a string with a fixed number of decimals.                              | `(3.14159).toFixed(2) // "3.14"`                 | ❌ Returns string  |
| **`toPrecision()`**          | Returns a string with a specified precision.                                   | `(3.14159).toPrecision(3) // "3.14"`             | ❌ Returns string  |
| **`valueOf()`**              | Returns the primitive value of a Number object.                                | `(123).valueOf() // 123`                         | ❌ Returns number  |
| **`Number.isFinite()`**      | Checks if a value is a finite number.                                          | `Number.isFinite(123) // true`                   | ❌ Returns boolean |
| **`Number.isInteger()`**     | Checks if a value is an integer.                                               | `Number.isInteger(123.0) // true`                | ❌ Returns boolean |
| **`Number.isNaN()`**         | Checks if a value is `NaN`(Not a Number).                                    | `Number.isNaN(NaN) // true`                      | ❌ Returns boolean |
| **`Number.isSafeInteger()`** | Checks if a value is a safe integer (within `-(2^53 - 1)`to `(2^53 - 1)`). | `Number.isSafeInteger(9007199254740991) // true` | ❌ Returns boolean |
| **`Number.parseInt()`**      | Parses a string into an integer.                                               | `Number.parseInt("42") // 42`                    | ❌ Returns number  |
| **`Number.parseFloat()`**    | Parses a string into a floating-point number.                                  | `Number.parseFloat("3.14") // 3.14`              | ❌ Returns number  |

# Number Properties

| Constant                               | Description                                                                | Example Code                                     | Changes Original? |
| -------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------ | ----------------- |
| **`Number.EPSILON`**           | The smallest difference between two representable numbers in JavaScript.   | `Number.EPSILON // 2.220446049250313e-16`      | ❌ Returns number |
| **`Number.MAX_VALUE`**         | The largest positive number JavaScript can represent.                      | `Number.MAX_VALUE // 1.7976931348623157e+308`  | ❌ Returns number |
| **`Number.MIN_VALUE`**         | The smallest positive number greater than 0 that JavaScript can represent. | `Number.MIN_VALUE // 5e-324`                   | ❌ Returns number |
| **`Number.MAX_SAFE_INTEGER`**  | The maximum safe integer (`2^53 - 1`).                                   | `Number.MAX_SAFE_INTEGER // 9007199254740991`  | ❌ Returns number |
| **`Number.MIN_SAFE_INTEGER`**  | The minimum safe integer (`-(2^53 - 1)`).                                | `Number.MIN_SAFE_INTEGER // -9007199254740991` | ❌ Returns number |
| **`Number.POSITIVE_INFINITY`** | Represents positive infinity.                                              | `Number.POSITIVE_INFINITY // Infinity`         | ❌ Returns number |
| **`Number.NEGATIVE_INFINITY`** | Represents negative infinity.                                              | `Number.NEGATIVE_INFINITY // -Infinity`        | ❌ Returns number |
| **`Number.NaN`**               | Represents "Not-a-Number".                                                 | `Number.NaN // NaN`                            | ❌ Returns number |
