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
var oddEvenList = function(head) {
    if(head==null || head.next==null)return head
    let head2=head.next;
    let prev=head;
    let curr=head.next;
    while(prev.next &&curr.next){
        prev.next=prev.next.next;
        curr.next=curr.next.next;
        prev=prev.next;
        curr=curr.next;
    }
    prev.next=head2
    return head;
};

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

let head1 = createLinkedList([1,2,3,4,5]);
console.log(oddEvenList(head1)); // Expected: true