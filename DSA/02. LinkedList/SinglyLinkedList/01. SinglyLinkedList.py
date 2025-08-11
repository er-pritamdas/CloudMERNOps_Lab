class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


def InsertAtEnd(head, data):
    newNode = Node(data)
    if(!head):
       head = newNode
       

if __name__ == "__main__":
    head = None
    n = int(input("Enter the Option :"))
    print("0. Exit")
    print("1. Insert at the End")
    print("2. Insert from the front")
    print("3. Display linked List ")

    while(n != 0):
        if(n==1):
            data = int(input("Enter the number you want to insert : "))
            InsertAtEnd(head, data)

