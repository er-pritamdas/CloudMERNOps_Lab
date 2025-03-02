| **Property**              | **Possible Values**                             | **Description**                                    |
| ------------------------- | ----------------------------------------------- | -------------------------------------------------- |
| **background-color**      | `color-name`, `#hex`, `rgb()`, `rgba()`         | Sets the background color of an element.           |
|                           | `hsl()`, `hsla()`, `transparent`                | Supports solid colors or transparency.             |
| **background-image**      | `url('path')`                                   | Adds one or more background images.                |
|                           | `none`                                          | Removes any background image.                      |
|                           | `linear-gradient()`                             | Creates a linear gradient background.              |
|                           | `radial-gradient()`                             | Creates a radial gradient background.              |
|                           | `repeating-linear-gradient()`                   | Repeats linear gradient patterns.                  |
|                           | `repeating-radial-gradient()`                   | Repeats radial gradient patterns.                  |
| **background-size**       | `auto`                                          | Default size, maintains original dimensions.       |
|                           | `cover`                                         | Scales image to cover entire container.            |
|                           | `contain`                                       | Scales image to fit inside container.              |
|                           | `[width] [height]`                              | Specifies custom dimensions (e.g., `50px 100px`).  |
|                           | `percentage`                                    | Sets size relative to container size.              |
| **background-repeat**     | `repeat`                                        | Repeats background both horizontally & vertically. |
|                           | `no-repeat`                                     | Prevents repetition of the background image.       |
|                           | `repeat-x`                                      | Repeats horizontally only.                         |
|                           | `repeat-y`                                      | Repeats vertically only.                           |
|                           | `space`                                         | Repeats without clipping, equal spacing.           |
|                           | `round`                                         | Scales image so it fits container evenly.          |
| **background-position**   | `top`, `bottom`, `left`, `right`, `center`      | Aligns background image to a specific position.    |
|                           | `[x%] [y%]`                                     | Specifies position in percentages.                 |
|                           | `[x px] [y px]`                                 | Specifies position in pixels.                      |
| **background-attachment** | `scroll`                                        | Background scrolls with the page.                  |
|                           | `fixed`                                         | Background remains fixed while scrolling.          |
|                           | `local`                                         | Background scrolls with the element's content.     |
| **background-clip**       | `border-box`                                    | Background extends to the border.                  |
|                           | `padding-box`                                   | Background stops at the padding edge.              |
|                           | `content-box`                                   | Background stops at the content box.               |
|                           | `text`                                          | Applies background to text only.                   |
| **background-origin**     | `border-box`                                    | Background starts from the border box.             |
|                           | `padding-box`                                   | Background starts from the padding box.            |
|                           | `content-box`                                   | Background starts from the content box.            |
| **background-blend-mode** | `normal`                                        | Default blend mode, no blending.                   |
|                           | `multiply`                                      | Multiplies colors of background layers.            |
|                           | `screen`                                        | Lightens overlapping background layers.            |
|                           | `overlay`                                       | Combines multiply & screen modes.                  |
|                           | `darken`                                        | Displays the darker color.                         |
|                           | `lighten`                                       | Displays the lighter color.                        |
|                           | `color-dodge`                                   | Brightens the base color.                          |
|                           | `color-burn`                                    | Darkens the base color.                            |
|                           | `hard-light`                                    | Applies hard light effect.                         |
|                           | `soft-light`                                    | Applies soft light effect.                         |
|                           | `difference`                                    | Subtracts colors to show differences.              |
|                           | `exclusion`                                     | Similar to difference but lower contrast.          |
| **background**            | `[background-color]` `[background-image]`       | Shorthand property for all background values.      |
|                           | `[background-repeat]` `[background-attachment]` | Combines multiple background properties.           |
|                           | `[background-position]` `/ [background-size]`   | Sets position and size together.                   |

| **Property**                   | **Possible Values**                           | **Description**                               |
| ------------------------------ | --------------------------------------------- | --------------------------------------------- |
| **border**                     | `[width] [style] [color]`                     | Shorthand for setting all border properties.  |
|                                | Example: `1px solid black`                    | Sets border width, style, and color.          |
| **border-width**               | `thin`, `medium`, `thick`                     | Predefined border widths.                     |
|                                | `[length]`                                    | Custom width in units (e.g., `1px`, `0.5em`). |
| **border-style**               | `none`                                        | No border.                                    |
|                                | `solid`                                       | Solid border line.                            |
|                                | `dotted`                                      | Dotted border line.                           |
|                                | `dashed`                                      | Dashed border line.                           |
|                                | `double`                                      | Double border line.                           |
|                                | `groove`                                      | 3D groove effect.                             |
|                                | `ridge`                                       | 3D ridge effect.                              |
|                                | `inset`                                       | 3D inset effect.                              |
|                                | `outset`                                      | 3D outset effect.                             |
|                                | `hidden`                                      | Same as `none`, but resolves table conflicts. |
| **border-color**               | `color-name`, `#hex`, `rgb()`, `rgba()`       | Sets border color.                            |
|                                | `transparent`                                 | Transparent border.                           |
| **border-top**                 | `[width] [style] [color]`                     | Sets properties for top border.               |
| **border-right**               | `[width] [style] [color]`                     | Sets properties for right border.             |
| **border-bottom**              | `[width] [style] [color]`                     | Sets properties for bottom border.            |
| **border-left**                | `[width] [style] [color]`                     | Sets properties for left border.              |
| **border-radius**              | `[length]`                                    | Rounds corners of the border.                 |
|                                | `50%`                                         | Creates circular shapes on square elements.   |
|                                | `[length] [length] [length] [length]`         | Controls each corner individually.            |
| **border-top-left-radius**     | `[length]`                                    | Rounds the top-left corner.                   |
| **border-top-right-radius**    | `[length]`                                    | Rounds the top-right corner.                  |
| **border-bottom-left-radius**  | `[length]`                                    | Rounds the bottom-left corner.                |
| **border-bottom-right-radius** | `[length]`                                    | Rounds the bottom-right corner.               |
| **border-collapse**            | `collapse`                                    | Borders of table cells collapse into one.     |
|                                | `separate`                                    | Borders of table cells remain separate.       |
| **border-spacing**             | `[length]`                                    | Sets spacing between table cell borders.      |
|                                | `[horizontal] [vertical]`                     | Custom spacing horizontally and vertically.   |
| **outline**                    | `[width] [style] [color]`                     | Sets the outline around an element.           |
|                                | Example: `2px dashed red`                     | Outline does not affect layout.               |
| **outline-width**              | `thin`, `medium`, `thick`, `[length]`         | Sets the width of the outline.                |
| **outline-style**              | `none`, `solid`, `dotted`, `dashed`, `double` | Sets the style of the outline.                |
| **outline-color**              | `color-name`, `#hex`, `rgb()`, `rgba()`       | Sets the color of the outline.                |
| **outline-offset**             | `[length]`                                    | Distance between the border and outline.      |

| **Property**              | **Possible Values**                                               | **Description**                                            |
| ------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------- |
| **color**                 | `color-name`, `#hex`, `rgb()`, `rgba()`                           | Sets the text color.                                       |
| **text-align**            | `left`, `right`, `center`, `justify`, `start`, `end`              | Aligns text horizontally.                                  |
| **text-decoration**       | `none`, `underline`, `overline`, `line-through`, `blink`          | Adds decoration to text.                                   |
| **text-decoration-color** | `color-name`, `#hex`, `rgb()`, `rgba()`                           | Sets color of the text decoration.                         |
| **text-decoration-style** | `solid`, `double`, `dotted`, `dashed`, `wavy`                     | Sets style of text decoration.                             |
| **text-decoration-line**  | `none`, `underline`, `overline`, `line-through`                   | Specifies type of text decoration line.                    |
| **text-indent**           | `[length]`, `[percentage]`                                        | Indents the first line of text.                            |
| **text-overflow**         | `clip`, `ellipsis`                                                | Specifies how text overflows a box.                        |
| **text-shadow**           | `[x-offset] [y-offset] [blur-radius] [color]`                     | Adds shadow to text.                                       |
|                           | Example: `2px 2px 5px gray`                                       | Specifies horizontal, vertical, blur, and color.           |
| **text-transform**        | `none`, `capitalize`, `uppercase`, `lowercase`                    | Transforms text case.                                      |
| **letter-spacing**        | `[normal]`, `[length]`                                            | Adjusts spacing between letters.                           |
| **line-height**           | `[normal]`, `[number]`, `[length]`, `[percentage]`                | Sets space between lines of text.                          |
| **word-spacing**          | `[normal]`, `[length]`                                            | Adjusts space between words.                               |
| **white-space**           | `normal`, `nowrap`, `pre`, `pre-wrap`, `pre-line`                 | Controls how whitespace is handled.                        |
| **direction**             | `ltr`, `rtl`                                                      | Specifies text direction (left-to-right or right-to-left). |
| **unicode-bidi**          | `normal`, `embed`, `bidi-override`                                | Controls bidirectional text embedding.                     |
| **vertical-align**        | `baseline`, `sub`, `super`, `top`, `middle`, `bottom`, `[length]` | Aligns text vertically in an element.                      |
| **font-family**           | `[font-name]`, `serif`, `sans-serif`, `monospace`, `cursive`      | Specifies the font family.                                 |
| **font-size**             | `[length]`, `[percentage]`, `small`, `medium`, `large`, `x-large` | Sets the size of the text.                                 |
| **font-style**            | `normal`, `italic`, `oblique`                                     | Sets the style of the text.                                |
| **font-variant**          | `normal`, `small-caps`                                            | Controls small caps text transformation.                   |
| **font-weight**           | `normal`, `bold`, `bolder`, `lighter`, `100-900`                  | Sets text thickness.                                       |

| **Property**                | **Possible Values**                                                                 | **Description**                               |
| --------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------- |
| **font-family**             | `[font-name]`, `serif`, `sans-serif`, `monospace`, `cursive`, `fantasy`             | Specifies the font family.                    |
| **font-size**               | `[length]`, `[percentage]`, `small`, `medium`, `large`, `x-large`                   | Sets the size of the text.                    |
| **font-size-adjust**        | `none`, `[number]`                                                                  | Adjusts font size for better legibility.      |
| **font-stretch**            | `normal`, `condensed`, `expanded`, `ultra-condensed`, `ultra-expanded`              | Stretches or condenses the font face.         |
| **font-style**              | `normal`, `italic`, `oblique`                                                       | Sets the style of the text.                   |
| **font-variant**            | `normal`, `small-caps`                                                              | Displays text in small-caps format.           |
| **font-variant-ligatures**  | `normal`, `none`, `common-ligatures`, `no-common-ligatures`                         | Controls ligatures and contextual alternates. |
| **font-variant-caps**       | `normal`, `small-caps`, `all-small-caps`, `petite-caps`                             | Controls uppercase and lowercase styling.     |
| **font-variant-numeric**    | `normal`, `lining-nums`, `oldstyle-nums`, `proportional-nums`                       | Controls number styling.                      |
| **font-weight**             | `normal`, `bold`, `bolder`, `lighter`, `100-900`                                    | Specifies the weight (thickness) of the font. |
| **font-kerning**            | `auto`, `normal`, `none`                                                            | Controls spacing between letters.             |
| **font-variant-position**   | `normal`, `sub`, `super`                                                            | Controls subscript and superscript text.      |
| **font-feature-settings**   | `[string]`                                                                          | Enables advanced typography features.         |
| **font-variation-settings** | `[string]`                                                                          | Adjusts font-specific variable axis values.   |
| **line-height**             | `[number]`, `[length]`, `[percentage]`, `normal`                                    | Sets spacing between lines of text.           |
| **font**                    | `[font-style] [font-variant] [font-weight] [font-size]/[line-height] [font-family]` | Shorthand for font properties.                |

| **Property**            | **Possible Values**                                                                                 | **Description**                                     |
| ----------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **list-style**          | `[list-style-type] [list-style-position] [list-style-image]`                                        | Shorthand for setting list styles.                  |
| **list-style-type**     | `disc`, `circle`, `square`, `decimal`, `decimal-leading-zero`, `lower-roman`, `upper-roman`, `none` | Defines the type of list marker.                    |
| **list-style-type**     | `lower-alpha`, `upper-alpha`, `lower-greek`, `armenian`, `georgian`, `hebrew`, `cjk-ideographic`    | Additional marker types.                            |
| **list-style-image**    | `url(image.png)`, `none`                                                                            | Specifies an image as the list marker.              |
| **list-style-position** | `inside`, `outside`                                                                                 | Defines marker placement relative to content.       |
| **marker-offset**       | `[length]`, `auto`                                                                                  | (Deprecated) Adjusts space between marker and text. |
