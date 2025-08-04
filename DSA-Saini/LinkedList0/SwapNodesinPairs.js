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