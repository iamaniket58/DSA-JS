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
var hasCycle = function(head) {
    let visited = new Set();
    let current=head;
    while(current!=null){
        if (visited.has(current)){
            return true;
        }
        visited.add(current);
        current=current.next;
    }
    return false;
};

//Test cases

function createLinkedList(values) {
    if (values.length === 0) return null;
    let head = new ListNode(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }
    return head;
}
function ListNode(val){
    this.val=val;
    this.next=null;
}
function printLinkedList(head) {
    console.log('Print Triggered')
    if (!head) {
        console.log("Empty list");
        return;
    }
    
    let current = head;
    let result = [];
    
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    
    console.log(result.join(" -> ") + " -> null");
}
function printLL(head){
    let curr=head;
    while(curr){
        console.log(curr.val,"-> ")
        curr=curr.next
    }
    console.log(null)
}
let head5 = createLinkedList([1, 2, 3, 4, 5]);
printLinkedList(head5)
head5.next.next.next.next.next = head5; // tail points to head
printLL(head5)
console.log(hasCycle(head5));