# This is a Comment
""" This is a multi-line comment
   It can span multiple lines. """

# ---------------------------------------------------

# Variables
print("\n - Variables - ")
x = 5
y = "john"
print(x)
print(y)

# ---------------------------------------------------

print("\n - Type -")
x = 3
y = "Pritam"
print(type(x))
print(type(y))

# ---------------------------------------------------


print("\n - Casting -")
x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0
print(f"{x} = {type(x)}")
print(f"{y} = {type(y)}")
print(f"{z} = {type(z)}")

# ---------------------------------------------------

print("\n - Variable Names -")
x = "thisIsCamelCase"
y = "ThisIsPascalCase"
z = "this_is_snake_case"
print(x)
print(y)
print(z)

# ---------------------------------------------------

print("\n - Assigning -")
x,y,z = "Banana", "Mango", "Apple"
print(x)
print(y)
print(z)

# ---------------------------------------------------

print("\n - Unpacking a Collections -")
fruits = ["apple", "Mango", "Banana"]
x,y,z = fruits
print(x)
print(y)
print(z)

