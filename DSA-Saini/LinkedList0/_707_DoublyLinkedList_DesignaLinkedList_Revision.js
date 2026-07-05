

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
var MyLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;
    let curr;
    if (index < this.size / 2) {
        curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next
        }
    }
    else {
        curr = this.tail;
        while (index < this.size - 1) {
            curr = curr.prev;
            index++
        }
    }
    return curr.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new ListNode(val);
    if (!this.head) {
        this.tail = newNode;
    }
    else if (this.head) {
        newNode.next = this.head;
        this.head.prev = newNode;
    }
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    if (!this.head) {
        this.addAtHead(val);
    }
    else {
        let newNode = new ListNode(val);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) return;
    // console.log(this.size)
    // console.log(this.head)
    if (index == 0) {
        this.addAtHead(val);
    }
    else if (index == this.size) {
        this.addAtTail(val);
    }
    else {
        let curr;
        if (index < this.size / 2) {
            curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
        }
        else {
            curr = this.tail;
            for (let i = index; i < this.size; i++) {
                curr = curr.prev;
            }
        }
        let newNode = new ListNode(val);
        newNode.next = curr.next;
        curr.next.prev = newNode;
        newNode.prev = curr;
        curr.next = newNode;
        this.size++;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return;
    if (index == 0) {
        this.head = this.head.next;
        if (this.head) this.head.prev = null;

    }
    else if (index == this.size - 1) {
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
    else {
        let curr;
        if (index < this.size / 2) {
            curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
        }
        else {
            curr = this.tail;
            for (let i = index; i < this.size; i++) {
                curr = curr.prev;
            }
        }
        curr.next = curr.next.next;
        if (curr.next) curr.next.prev = curr;

    }
    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

//Optimized

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

var MyLinkedList = function () {
    this.head = new ListNode(-1); // Dummy Head
    this.tail = new ListNode(-1); // Dummy Tail

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.size = 0;
};

/**
 * Returns the node at the given index.
 * Assumes index is valid.
 */
MyLinkedList.prototype.getNode = function (index) {
    let curr;

    // Traverse from head
    if (index < this.size / 2) {
        curr = this.head.next;

        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
    }
    // Traverse from tail
    else {
        curr = this.tail.prev;

        for (let i = this.size - 1; i > index; i--) {
            curr = curr.prev;
        }
    }

    return curr;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size)
        return -1;

    return this.getNode(index).val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    this.addAtIndex(0, val);
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    this.addAtIndex(this.size, val);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {

    if (index < 0 || index > this.size)
        return;

    let nextNode;

    if (index === this.size)
        nextNode = this.tail;
    else
        nextNode = this.getNode(index);

    let prevNode = nextNode.prev;

    let newNode = new ListNode(val);

    newNode.prev = prevNode;
    newNode.next = nextNode;

    prevNode.next = newNode;
    nextNode.prev = newNode;

    this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {

    if (index < 0 || index >= this.size)
        return;

    let node = this.getNode(index);

    node.prev.next = node.next;
    node.next.prev = node.prev;

    this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */