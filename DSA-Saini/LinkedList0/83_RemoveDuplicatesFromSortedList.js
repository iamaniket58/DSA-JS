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