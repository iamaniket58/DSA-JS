/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

//My Solution Two pointers solution
var removeElements = function (head, val) {
    if (head == null) return null;
    let prev = head;
    let current = head.next;
    while (current != null) {
        if (current.val == val) {
            current = current.next;
            prev.next = current;
            continue; //Instead of continue, u could have put others(after If) in else block
        }
        prev = current;
        current = current.next;
    }
    if (head.val == val) {
        head = head.next
    }
    return head
};

var removeElements1 = function (head, val) {
    if (head == null) return head;
    let current = head;
    while (current != null && current.next != null) {
        if (current.next.val == val) {
            current.next = current.next.next;
            continue;
        }
        current = current.next
    }
    if (head.val == val) head = head.next
    return head;
};


//Sirs Solution using Senitel node
var removeElements = function (head, val) {
    //Sirs solution using
    let sentinel = new ListNode();
    sentinel.next = head;

    let prev = sentinel;
    while (prev.next != null) {
        if (prev.next.val === val) {
            prev.next = prev.next.next;
        }
        else {
            prev = prev.next
        }
    }
    return sentinel.next
};





//Test Cases
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}
let head1 = createLinkedList([1, 2, 6, 3, 4, 5, 6]);
removeElements(head1, 6); // Expected: (empty, nothing printed)
