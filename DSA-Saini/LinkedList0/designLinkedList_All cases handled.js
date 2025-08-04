class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class LinkedLists {
    constructor() {
        this.head = null;
    }

    addAtbegining(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    addAtTheEnd(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = newNode;
    }

    addAtIndex(index, val) {
        if (index === 0) {
            this.addAtbegining(val);
            return;
        }
        let newNode = new Node(val);
        let curr = this.head;
        for (let i = 0; i < index - 1 && curr !== null; i++) {
            curr = curr.next;
        }
        if (curr === null) {
            console.log("Index out of bounds");
            return;
        }
        newNode.next = curr.next;
        curr.next = newNode;
    }

    getIndex(val) {
        let curr = this.head;
        let i = 0;
        while (curr !== null) {
            if (curr.data === val) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1; // More conventional than returning string
    }

    deleteAtIndex(index) {
        if (index === 0) {
            this.head = this.head?.next || null;
            return;
        }

        let curr = this.head;
        for (let i = 0; i < index - 1 && curr !== null; i++) {
            curr = curr.next;
        }

        if (curr === null || curr.next === null) {
            console.log("Index out of bounds");
            return;
        }

        curr.next = curr.next.next;
    }

    display() {
        let curr = this.head;
        let result = "";
        while (curr !== null) {
            result += curr.data + " -> ";
            curr = curr.next;
        }
        console.log(result + "null");
    }
}

// Example usage
let obj = new LinkedLists();
obj.addAtTheEnd("22");
obj.addAtTheEnd("44");
obj.addAtTheEnd("66");
obj.display(); // 22 -> 44 -> 66 -> null

obj.addAtIndex(1, "33");
obj.display(); // 22 -> 33 -> 44 -> 66 -> null

obj.deleteAtIndex(2);
obj.display(); // 22 -> 33 -> 66 -> null

console.log(obj.getIndex("66")); // Output: 2
