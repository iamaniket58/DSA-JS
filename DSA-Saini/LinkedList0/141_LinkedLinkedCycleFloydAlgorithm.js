/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast){
            return true;
        }
    }
    return false;
};


//Lengthy solution
var hasCycle1=function(head){
    let slow=head;
    let fast=head;
    if(head==null){
        return false;
    }
    while(fast!=slow){
        if(fast==null || fast.next==null){
            return false;
        }
        slow=slow.next;
        fast=fast.next.next;
       
    }
    return true;

};

// Object Comparison in JavaScript
// When you compare objects:

// obj1 === obj2
// JavaScript does reference comparison, not value comparison.

// Example:

// let a = {val:1};
// let b = {val:1};

// console.log(a === b); // false

// Even though values are same, they are different objects in memory.