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

    let pA = headA;
    let pB = headB;
    while (pA != pB) {
        pA = pA != null ? pA.next : headB
        pB = pB != null ? pB.next : headA
    }
    return pA
}


var getIntersectionNode = function (headA, headB) {
    //Calculate length of headA
    let n = 0;
    let pA = headA;
    while (pA != null) {
        n++;
        pA = pA.next
    }
    //Calculate length of headB
    let m = 0;
    let pB = headB;
    while (pB != null) {
        m++;
        pB = pB.next
    }
    let m1;//m1 is bigger List
    let m2; //m2 is smaller
    if (m > n) {
        m1 = headB;
        m2 = headA;
    }
    else {
        m1 = headA;
        m2 = headB;
    }
    let diff = Math.abs(m - n);
    p = 0
    while (p < diff) {
        m1 = m1.next;
        p++;
    }
    while (m1 != null) {
        if (m1 == m2) return m1;
        m1 = m1.next;
        m2 = m2.next;
    }
};

//Sirs way is almost same except he is keeping big list in headB and proceeding

var getIntersectionNode1 = function (headA, headB) {
    //Calculate length of headA
    let n = 0;
    let pA = headA;
    while (pA != null) {
        n++;
        pA = pA.next
    }
    //Calculate length of headB
    let m = 0;
    let pB = headB;
    while (pB != null) {
        m++;
        pB = pB.next
    }
    //Make headB always bigger
    if (n > m) {
        temp = headA;
        headA = headB;
        headB = temp;
    }
    //increse bigger list
    let diff = Math.abs(n - m)
    for (let i = 0; i < diff; i++) {
        headB = headB.next;
    }

    c1 = headA;
    c2 = headB;
    while (c1 != c2) {
        c1 = c1.next;
        c2 = c2.next
    }
    return c1
};