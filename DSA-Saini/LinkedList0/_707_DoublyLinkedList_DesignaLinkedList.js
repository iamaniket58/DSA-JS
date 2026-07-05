class Node {
    constructor(val = 0) {
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
            curr = curr.next;
        }
    }
    else {
        curr = this.tail;
        for (let i = this.size - 1; i > index; i--) {
            curr = curr.prev;
        }
    }
    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let node = new Node(val);
    if (this.size == 0) {
        this.head = node;
        this.tail = node;
        this.size++;
        return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let node = new Node(val);
    if (this.size == 0) {
        this.addAtHead(val);
        return;
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) return;
    if (index == 0) {
        this.addAtHead(val);
        return;
    }
    if (index == this.size) {
        this.addAtTail(val);
        return;
    }
    let node = new Node(val);
    let curr;
    if (index < this.size / 2) {
        curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }

    }
    else {
        curr = this.tail;
        for (let i = this.size - 1; i >= index; i--) {
            curr = curr.prev;
        }
    }
    console.log(node, curr);
    node.next = curr.next;
    node.prev = curr;
    curr.next.prev = node;
    curr.next = node;
    this.size++;



};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return;
    if (this.size == 1) {
        this.head = null;
        this.tail = null;
        this.size--;
        return;
    }
    if (index == 0) {
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
        return;
    }
    if (index == this.size - 1) {
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.size--;
        return;
    }
    let curr;
    if (index < this.size / 2) {
        curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
    }
    else {
        curr = this.tail;
        for (let i = this.size - 1; i >= index; i--) {
            curr = curr.prev;
        }
    }
    curr.next = curr.next.next;
    curr.next.prev = curr;
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




//Chat GPT

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
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

    // Optimize traversal
    if (index < this.size / 2) {
        curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
    } else {
        curr = this.tail;
        for (let i = this.size - 1; i > index; i--) {
            curr = curr.prev;
        }
    }

    return curr.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const node = new Node(val);

    if (this.size === 0) {
        this.head = this.tail = node;
    } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const node = new Node(val);

    if (this.size === 0) {
        this.head = this.tail = node;
    } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) return;

    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    if (index === this.size) {
        this.addAtTail(val);
        return;
    }

    let curr;

    if (index < this.size / 2) {
        curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
    } else {
        curr = this.tail;
        for (let i = this.size - 1; i >= index; i--) {
            curr = curr.prev;
        }
    }

    const node = new Node(val);

    const prevNode = curr.prev;

    prevNode.next = node;
    node.prev = prevNode;

    node.next = curr;
    curr.prev = node;

    this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return;

    // Only one node
    if (this.size === 1) {
        this.head = null;
        this.tail = null;
        this.size--;
        return;
    }

    // Delete head
    if (index === 0) {
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
        return;
    }

    // Delete tail
    if (index === this.size - 1) {
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.size--;
        return;
    }

    let curr;

    if (index < this.size / 2) {
        curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
    } else {
        curr = this.tail;
        for (let i = this.size - 1; i > index; i--) {
            curr = curr.prev;
        }
    }

    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;

    this.size--;
};
