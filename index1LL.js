var getIntersectionNode = function (headA, headB) {
    let set = new Set();
    let hA = headA;
    let hB = headB;
    while (hA) {
        set.add(hA)
        hA = hA.next
    }
    while (hB) {
        if (set.has(hB)) {
            return hB
        }
        hB.next;
    }
    return null;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createLinkedList(arr) {
    if (!arr.length) return null;
    let head = new ListNode(arr[0]);
    let curr = head;
    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }
    return head;
}
let common2 = createLinkedList([8, 9]);
let headA2 = createLinkedList([1, 2]);
let headB2 = createLinkedList([3, 4]);

// connect intersection
let temp = headA2;
while (temp.next) temp = temp.next;
temp.next = common2;

temp = headB2;
while (temp.next) temp = temp.next;
temp.next = common2;
console.log(getIntersectionNode(headA2,headB2))
