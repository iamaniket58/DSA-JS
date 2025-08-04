/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//using fast and slow pointer
var middleNode = function(head) {
    let slow=head,fast=head; //slow
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
};

//converting into an array
var middleNode1=function(head){
    let nodes=[];
    let current=head;
    let i=0;
    while(current!=null){
        nodes.push(current);
        current=current.next;
    }
    let mid=Math.floor(nodes.length/2);
    return nodes[mid];
}

//same as above- just using i insetad of push
var middleNode2=function(head){
    let nodes=[];
    let current=head;
    let i=0;
    while(current!=null){
        nodes[i]=current; 
        current=current.next;
        i++; 
    }
    let mid=Math.floor(nodes.length/2);
    return nodes[mid];
}


//Test cases Below


//To run the Test Cases here
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Create a test linked list: 1 → 2 → 3 → 4 → 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Run the function
let middle = middleNode(head);
console.log("Middle Node Value:", middle.val);