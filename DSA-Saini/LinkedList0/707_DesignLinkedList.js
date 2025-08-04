function Node(val) {
  this.value = val;
  this.next = null;
}
var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let current = this.head;
  let i = 0;
  while (i < index) {
    current = current.next;
    i++;
  }
  return current.value;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
    this.size++;
    return;
  }
  newNode.next = this.head;
  this.head = newNode;
  this.size++

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
    this.size++;
    return;
  }
  let current = this.head;
  while (current.next != null) {
    current = current.next;
  }
  current.next = newNode;
  this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const newNode = new Node(val);
  if (index < 0 || index > this.size) return;
  if (index == 0) {
    this.addAtHead(val);
    return; 
  }
  let current = this.head;
  let i = 0;
  while (i < index - 1) {
    current = current.next;
    i += 1;
  }
  newNode.next = current.next;
  current.next = newNode;
  this.size++;

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  if (index == 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }
  //The next case will handle it eventually
  // if(index==size-1){
  //     let curr=this.head.next;
  //     let prev=this.head;
  //     while(curr!=null){
  //         curr=curr.next;
  //         prev=prev.next
  //     }
  //     prev.next=null
  // }
  let i = 0;
  let current = this.head
  while (i < index - 1) {
    current = current.next;
    i++;
  }
  current.next = current.next.next;
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


//Converted to Modern JS syntax
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  get(index) {
    if (index < 0 || index >= this.size) return -1;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  addAtHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addAtTail(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    const newNode = new Node(val);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
    }

    this.size--;
  }
}


const list = new MyLinkedList();
list.addAtHead(10);
list.addAtTail(20);
list.addAtIndex(1, 15); // 10 -> 15 -> 20
console.log(list.get(1)); // Output: 15
list.deleteAtIndex(1); // 10 -> 20
console.log(list.get(1)); // Output: 20