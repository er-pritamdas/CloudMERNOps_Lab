
print("\n - Basic Class -")
class className:
    x = 9

c1 = className()
print(c1.x)

# ---------------------------------------------------

print("\n - Constructor -")
class secondClass:
    def __init__(self, name, age):
        self.name = name
        self.age = age

s1 = secondClass("Pritam",12)
print(s1) #<__main__.secondClass object at 0x000001C510DAAE70>
print(f"My name is {s1.name} and my age is {s1.age}")

# ---------------------------------------------------

print("\n - String Class -")
class secondClass:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
         return f"{self.name}({self.age})"

s1 = secondClass("Pritam",12)
print(s1) #"{self.name}({self.age})"
print(f"My name is {s1.name} and my age is {s1.age}")
s1.age = 34
print(f"My name is {s1.name} and my age is {s1.age}")
del s1.age
# print(f"My name is {s1.name} and my age is {s1.age}") # will throw error



# ---------------------------------------------------

