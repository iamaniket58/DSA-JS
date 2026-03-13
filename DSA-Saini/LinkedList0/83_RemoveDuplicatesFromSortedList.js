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
var deleteDuplicates = function(head) {
    let prev=head;
    let curr=head?.next;
    while(curr){
        if(prev.val==curr.val){
            prev.next=curr.next;
            curr=curr.next;
        }
        else{
            prev=prev.next;
            curr=curr.next;
        }
    }
    return head;
};

//using 2 variables
var deleteDuplicates = function (head) {
    if (head == null) return head;
    let prev = head;
    let curr = head.next;
    while (curr) {
        if (prev.val == curr.val) {
            curr = curr.next;
            prev.next = prev.next.next;
        }
        else {
            prev = prev.next;
            curr = curr.next
        }
    }
    return head
};


//Using 1 Variable

var deleteDuplicates = function (head) {
    if (head == null) return head;
    let curr = head;
    while (current.next!=null) {
        if (curr.val == curr.next.val) {
            curr.next = curr.next.next;
        }
        else {
            curr = curr.next;
        }

    }
    return head;
};