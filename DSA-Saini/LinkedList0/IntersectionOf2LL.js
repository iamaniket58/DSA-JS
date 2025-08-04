/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let c1 = headA;
    let mySet = new Set();
    while (c1 != null) {
        // if(mySet.has(c1))return c1;
        mySet.add(c1);
        c1 = c1.next;
    }

    let c2 = headB;
    while (c2) {
        if (mySet.has(c2)) return c2;
        mySet.add(c2);
        c2 = c2.next;
    }
    return null
};

//This one is bad solution
var getIntersectionNode = function (headA, headB) {
    let c1 = headA;
    while (c1 != null) {
        let c2 = headB;
        while (c2 != null) {
            if (c1 == c2) return c1;
            c2 = c2.next;
        }
        c1 = c1.next;
    }
    return null;
}