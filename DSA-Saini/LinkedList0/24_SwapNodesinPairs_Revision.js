/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//Correct solution as per Question- 
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let dummy = new ListNode();
    let p = dummy;
    let c = head;
    let n = head.next;
    while (c && n) {
        p.next = n;
        c.next = n.next;
        n.next = c;

        //Move pointers
        p = c;
        c = p.next;
        n = c && c.next;
    }
    return dummy.next;
};

//recursion
var swapPairs = function (head) {
    if (!head || !head.next) return head;

    let c = head;
    let n = head.next;
    let temp = n.next;

    n.next = c;
    c.next = swapPairs(temp);
    return n;

};
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let c1 = head;
    let c2 = head.next;

    c1.next = swapPairs(c2.next);
    c2.next = c1;
    return c2;
};
//Incorrect solution as per Question-Just swapping it
var swapPairs = function (head) {
    if (!head) return null;
    let c1 = head;
    let c2 = head.next;
    while (c1 && c2) {
        let temp = c1.val;
        c1.val = c2.val;
        c2.val = temp;

        c1 = c2.next;
        c2 = c1 && c1.next;
    }
    return head;
};
//Incorrect solution as per Question-Instead of swapping existing nodes, you create entirely new nodes:
var swapPairs = function (head) {
    if (!head) return null;
    let dummy = new ListNode();
    let curr = dummy;
    let c1 = head;
    let c2 = head.next;
    while (c1) {
        if (c1 && c2) {
            curr.next = new ListNode(c2.val);
            curr = curr.next;
            curr.next = new ListNode(c1.val);
            curr = curr.next;
            c1 = c2.next;
            c2 = c1 && c1.next;
        }
        else { //Only when c1 exists(Odd Number of Nodes)
            curr.next = new ListNode(c1.val);
            break;
        }
    }
    return dummy.next;
};