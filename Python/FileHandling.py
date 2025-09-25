import os

## Delete a File:
# ------------------
# Check if the file exixts :
if os.path.exists("/workspaces/CloudMERNOps_Lab/Python/Created.txt"):
   os.remove("/workspaces/CloudMERNOps_Lab/Python/Created.txt")
   print("File Deleted")
else:
   print("File doesnt Exist")


# Reading a File:
# --------------------------
f = open("/workspaces/CloudMERNOps_Lab/Python/file.txt","rt")
print(f) #This will print (Returns a file object) : _io.TextIOWrapper name='/workspaces/CloudMERNOps_Lab/Python/file.txt' mode='rt' encoding='UTF-8'>
print(f"Reading a file : {f.read()}") # This Object has a method read ()
f.close()

# Reading a file using With (As it handles the closing of the file automatically)
with open("/workspaces/CloudMERNOps_Lab/Python/file.txt","rt") as f :
    print(f"Reading a file using \"with\" : {f.read()}")
    f.seek(0)  # reset file pointer to beginning
    # Print only some chracters:
    print(f"Reading only few Words : {f.read(10)}")
    f.seek(0)  # reset file pointer to beginning
    # Print only first line :
    print(f"Print only the first line : {f.readline()}")
    f.seek(0)  # reset file pointer to beginning

# Print lines usig for loop
with open("/workspaces/CloudMERNOps_Lab/Python/file.txt","rt") as f :
  for x in f:
    print(f"Line : {x}")


# Write to a Existing File :
# ----------------------------
# 1. Append
with open("/workspaces/CloudMERNOps_Lab/Python/file.txt", "a") as f:
   f.write("I Love You")
with open("/workspaces/CloudMERNOps_Lab/Python/file.txt", "rt") as f:
   print(f"After Appending : {f.read()}")
   
# 2. Overwrite
with open("/workspaces/CloudMERNOps_Lab/Python/file.txt", "w") as f:
   f.write("I Love You")
with open("/workspaces/CloudMERNOps_Lab/Python/file.txt", "rt") as f:
   print(f"After Overwritting : {f.read()}")

## Create New File:
# --------------------
with open("/workspaces/CloudMERNOps_Lab/Python/Created.txt", "x") as f:
   f.write("Newly Created File")

with open("/workspaces/CloudMERNOps_Lab/Python/Created.txt", "rt") as f:
   print(f"Reading after creation of file : {f.read()}")


