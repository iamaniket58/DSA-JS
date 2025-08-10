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
//This is my Method
var deleteDuplicates = function (head) {

    //First Remove all the dupliactes- and store the value which we deleted in Set
    if (head == null) return null;
    let prev = head;
    let curr = head.next;
    let set = new Set();
    while (curr) {
        if (curr.val == prev.val) {
            prev.next = curr.next;
            set.add(prev.val)
            curr = prev.next
        }
        else {
            prev = prev.next;
            curr = curr.next;
        }
    }

    //Now delete the single duplicate Node
    prev = head;
    curr = head.next;
    while (curr) {
        if (set.has(curr.val)) {
            prev.next = prev.next.next;
            curr = prev.next
        }
        else {
            prev = prev.next;
            curr = curr.next
        }
    }
    if (set.has(head.val)) return head.next
    return head;
};

//Optimzed One
var deleteDuplicates = function (head) {
    let sentinel = new ListNode(0, head);
    let prev = sentinel;
    while (head != null) {
        if (head.next && head.val == head.next.val) {
            // Skip all duplicates
            while (head.next && head.val == head.next.val) {
                head = head.next
            }
            // Remove all occurrences
            head = head.next;
            prev.next = head
        }
        else {
            prev = prev.next;
            head = head.next;
        }
    }
    return sentinel.next
};