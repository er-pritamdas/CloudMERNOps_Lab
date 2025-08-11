# Math Methods

| Name                            | Description                                            | Example Code                                 | Changes Original? |
| ------------------------------- | ------------------------------------------------------ | -------------------------------------------- | ----------------- |
| **`Math.abs(x)`**       | Returns the absolute value of `x`.                   | `Math.abs(-5) // 5`                        | ❌ Returns number |
| **`Math.acos(x)`**      | Returns the arccosine of `x`in radians.              | `Math.acos(1) // 0`                        | ❌ Returns number |
| **`Math.acosh(x)`**     | Returns the hyperbolic arccosine of `x`.             | `Math.acosh(1) // 0`                       | ❌ Returns number |
| **`Math.asin(x)`**      | Returns the arcsine of `x`in radians.                | `Math.asin(1) // 1.5708`                   | ❌ Returns number |
| **`Math.asinh(x)`**     | Returns the hyperbolic arcsine of `x`.               | `Math.asinh(1) // 0.88137`                 | ❌ Returns number |
| **`Math.atan(x)`**      | Returns the arctangent of `x`in radians.             | `Math.atan(1) // 0.7854`                   | ❌ Returns number |
| **`Math.atan2(y, x)`**  | Returns the arctangent of `y/x`in radians.           | `Math.atan2(1, 1) // 0.7854`               | ❌ Returns number |
| **`Math.atanh(x)`**     | Returns the hyperbolic arctangent of `x`.            | `Math.atanh(0.5) // 0.5493`                | ❌ Returns number |
| **`Math.cbrt(x)`**      | Returns the cubic root of `x`.                       | `Math.cbrt(27) // 3`                       | ❌ Returns number |
| **`Math.ceil(x)`**      | Rounds `x`upwards to nearest integer.                | `Math.ceil(4.2) // 5`                      | ❌ Returns number |
| **`Math.clz32(x)`**     | Returns leading zeros in 32-bit binary representation. | `Math.clz32(1) // 31`                      | ❌ Returns number |
| **`Math.cos(x)`**       | Returns cosine of `x`(radians).                      | `Math.cos(Math.PI) // -1`                  | ❌ Returns number |
| **`Math.cosh(x)`**      | Returns hyperbolic cosine of `x`.                    | `Math.cosh(0) // 1`                        | ❌ Returns number |
| **`Math.E`**            | Euler’s number (~2.718).                              | `Math.E`                                   | ❌ Returns number |
| **`Math.exp(x)`**       | Returns E to the power of `x`.                       | `Math.exp(1) // 2.718`                     | ❌ Returns number |
| **`Math.expm1(x)`**     | Returns E^x minus 1.                                   | `Math.expm1(1) // 1.718`                   | ❌ Returns number |
| **`Math.f16round(x)`**  | Rounds to nearest 16-bit float representation.         | `Math.f16round(1.337) // 1.3359375`        | ❌ Returns number |
| **`Math.floor(x)`**     | Rounds `x`downwards.                                 | `Math.floor(4.9) // 4`                     | ❌ Returns number |
| **`Math.fround(x)`**    | Returns nearest 32-bit float representation.           | `Math.fround(1.337) // 1.3370000123977661` | ❌ Returns number |
| **`Math.LN2`**          | Natural log of 2 (~0.693).                             | `Math.LN2`                                 | ❌ Returns number |
| **`Math.LN10`**         | Natural log of 10 (~2.302).                            | `Math.LN10`                                | ❌ Returns number |
| **`Math.log(x)`**       | Natural log of `x`.                                  | `Math.log(Math.E) // 1`                    | ❌ Returns number |
| **`Math.log10(x)`**     | Base-10 log of `x`.                                  | `Math.log10(100) // 2`                     | ❌ Returns number |
| **`Math.LOG10E`**       | Base-10 log of E (~0.434).                             | `Math.LOG10E`                              | ❌ Returns number |
| **`Math.log1p(x)`**     | Natural log of 1 +`x`.                               | `Math.log1p(1) // 0.693`                   | ❌ Returns number |
| **`Math.log2(x)`**      | Base-2 log of `x`.                                   | `Math.log2(8) // 3`                        | ❌ Returns number |
| **`Math.LOG2E`**        | Base-2 log of E (~1.442).                              | `Math.LOG2E`                               | ❌ Returns number |
| **`Math.max(a,b,...)`** | Highest value among inputs.                            | `Math.max(1, 3, 2) // 3`                   | ❌ Returns number |
| **`Math.min(a,b,...)`** | Lowest value among inputs.                             | `Math.min(1, 3, 2) // 1`                   | ❌ Returns number |
| **`Math.PI`**           | PI (~3.1416).                                          | `Math.PI`                                  | ❌ Returns number |
| **`Math.pow(x, y)`**    | `x`to the power `y`.                               | `Math.pow(2, 3) // 8`                      | ❌ Returns number |
| **`Math.random()`**     | Random number between 0 and 1.                         | `Math.random()`                            | ❌ Returns number |
| **`Math.round(x)`**     | Rounds to nearest integer.                             | `Math.round(4.5) // 5`                     | ❌ Returns number |
| **`Math.sign(x)`**      | Sign of number (-1, 0, 1).                             | `Math.sign(-5) // -1`                      | ❌ Returns number |
| **`Math.sin(x)`**       | Sine of `x`(radians).                                | `Math.sin(Math.PI / 2) // 1`               | ❌ Returns number |
| **`Math.sinh(x)`**      | Hyperbolic sine of `x`.                              | `Math.sinh(0) // 0`                        | ❌ Returns number |
| **`Math.sqrt(x)`**      | Square root of `x`.                                  | `Math.sqrt(9) // 3`                        | ❌ Returns number |
| **`Math.SQRT1_2`**      | √(1/2) (~0.707).                                      | `Math.SQRT1_2`                             | ❌ Returns number |
| **`Math.SQRT2`**        | √2 (~1.414).                                          | `Math.SQRT2`                               | ❌ Returns number |
| **`Math.tan(x)`**       | Tangent of `x`(radians).                             | `Math.tan(Math.PI / 4) // 1`               | ❌ Returns number |
| **`Math.tanh(x)`**      | Hyperbolic tangent of `x`.                           | `Math.tanh(0) // 0`                        | ❌ Returns number |
| **`Math.trunc(x)`**     | Integer part of `x`.                                 | `Math.trunc(4.9) // 4`                     | ❌ Returns number |
