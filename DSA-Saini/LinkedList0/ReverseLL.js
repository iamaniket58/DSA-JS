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
var reverseList = function(head) {
    let prev=null;
    let current=head;
   // let next=current.next;
    while(current !=null){
        temp=current.next;
        current.next=prev;
        prev=current;
        current=temp;
        //next=current.next;
    }
    return head=prev;
};

//This is completely my solution--temp is getting handled outside loop
var reverseList = function(head) {
    if(head==null)return null
    let prev=null
    let curr=head;
    let temp=curr.next
    while(curr!=null){
       curr.next=prev;
       prev=curr;
       curr=temp;
       temp=curr?.next
    }
    return prev
};




//Test cases
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let reversed = reverseList(head);

function printList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

printList(reversed);