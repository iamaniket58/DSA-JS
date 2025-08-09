/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let size = 0;
    let curr = head;
    while (curr) {
        size++;
        curr = curr.next;
    }
    let s = 0;
    let sential = new ListNode();
    sential.next = head;
    let prev = sential
    while (prev.next != null) {
        if (s == (size - n)) {
            prev.next = prev.next.next;
            return sential.next;
        }
        prev = prev.next
        s++;
    }
    return sential.next
};


//Sirs Method- attaching Sentinel Node in begining
var removeNthFromEnd = function (head, n) {
    let sential = new ListNode();
    sential.next = head;
    let length = 0;
    while (head != null) {
        length++;
        head = head.next;
    }
    let prevPos = length - n;
    let prev = sential
    for (let i = 0; i < prevPos; i++) {
        prev = prev.next
    }
    prev.next = prev.next.next

    return sential.next;
};


//One pass method
var removeNthFromEnd = function (head, n) {

    //This is using single pass
    let senitel = new ListNode();
    senitel.next = head;

    let second = senitel;
    let first = senitel;
    let i = 0;
    while (i < n) {
        first = first.next;
        i++;
    }
    while (first.next != null) {
        second = second.next;
        first = first.next;
    }
    second.next = second.next.next;
    return senitel.next
};