class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null

    }
    insertAtBegining(data) {
        const newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;

    }

    //InsertAt the End
    Insert(data) {
        const newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        }
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }

    deleteFirst() {
        if (this.head == null) {
            console.log("Linked List is empty");
            return;
        }
        if (this.head.next == null) {
            this.head = null;
            return;
        }
        this.head = this.head.next;
    }

    deleteLast() {
        if (this.head == null) {
            console.log("Linked List is empty");
            return;
        }
        if (this.head.next == null) {
            this.head = null;
            return;
        }
        let last = this.head.next;
        let secLast = this.head;
        while (last.next != null) {
            last = last.next;
            secLast = secLast.next;
        }
        secLast.next = null;

    }

    disply() {
        if(this.head==null){
            console.log("No Elements to Display");
            return;
        }
        let curr=this.head;
        let result ='';
        while(curr !=null){
           // console.log(curr.data +"-> ");
           result=result +curr.data +"->"
            curr=curr.next;
        }
         result += "null";
         console.log(result)
    }
}

const ll=new LinkedList();
ll.insertAtBegining("Love");
ll.insertAtBegining("I");
ll.Insert("Awesome");
ll.Insert("Aniket");
ll.disply();