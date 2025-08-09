//Without Sentinel Node
var removeNthFromEnd = function (head, n) {
    let size = 0;
    let curr = head;
    while (curr) {
        size++;
        curr = curr.next;
    }
    if (size == 1) return null
    curr = head;
    let indexR = size - n;
    if (indexR == 0) {
        return head.next
    }
    for (let i = 0; i < indexR - 1; i++) {
        curr = curr.next
    }
    curr.next = curr.next?.next;
    return head
};

//using sentinel Node- Attaching Sentinel Node later in the code(in Sirs method its added before)
var removeNthFromEnd = function (head, n) {
    if (head == null) return head
    let curr = head;
    let size = 0;
    while (curr) {
        size++;
        curr = curr.next;
    }
    let sentinel = new ListNode();
    sentinel.next = head;
    curr = sentinel;
    for (let i = 0; i < size - n; i++) {
        curr = curr.next
    }
    curr.next = curr.next.next;
    return sentinel.next;
};