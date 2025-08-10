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
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let dummy = new ListNode();
    let p = dummy;
    let c = head;
    let n = head.next;

    while (p != null && c != null && n != null) {
        p.next = n;
        c.next = n.next;
        n.next = c;

        //Move my pointers
        p = c;
        c = p.next;
        n = c && c.next;
    }
    return dummy.next
};

//Iteration-Revision
var swapPairs = function (head) {
    if (head == null || head.next==null) return head;
    let sentinel = new ListNode();

    let p = sentinel;
    let c = head;
    let N = head.next;

    while (c != null && N != null) {
        c.next = N.next;
        N.next = c;
        p.next = N;

        p = c;
        c = c.next;
        N = c && c.next
    }
    return sentinel.next
};

//using Recursion
var swapPairs = function (head) {
    //using recursion
    if (!head || !head.next) return head;

    let l = head;
    let r = head.next;
    l.next = swapPairs(r.next);
    r.next = l;
    return r;
};