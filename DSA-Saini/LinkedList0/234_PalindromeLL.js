/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

    let slow = fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let mid = slow;
    //Reverse the mid to End of LL
    let prev = null;
    let current = mid;
    let next = null
    while (current != null) {
        next = current.next;
        current.next = prev;

        //Update Now
        prev = current;
        current = next;
    }
    //Compare using 2 pointer
    let firstList = head;
    let secondList = prev;
    while (secondList) {
        if (firstList.val != secondList.val) return false;
        firstList=firstList.next;
        secondList = secondList.next;
    }
    return true;

};

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

//Test Case x
//let headx = createLinkedList([1, 2, 2, 1]);
//console.log("Test Case 3 (Even-length palindrome):");
//printLinkedList(headx); // Expected: 1 -> 2 -> 2 -> 1
//console.log("Is palindrome?", isPalindrome(head3)); // Expected: true

// Test Case 1: Empty list
let head1 = createLinkedList([]);
console.log("Test Case 1 (Empty list):");
printLinkedList(head1); // Expected: (empty, nothing printed)
console.log("Is palindrome?", isPalindrome(head1)); // Expected: true
console.log();

// Test Case 2: Single-node list
let head2 = createLinkedList([1]);
console.log("Test Case 2 (Single-node list):");
printLinkedList(head2); // Expected: 1
console.log("Is palindrome?", isPalindrome(head2)); // Expected: true
console.log();

// Test Case 3: Even-length palindrome
let head3 = createLinkedList([1, 2, 2, 1]);
console.log("Test Case 3 (Even-length palindrome):");
printLinkedList(head3); // Expected: 1 -> 2 -> 2 -> 1
console.log("Is palindrome?", isPalindrome(head3)); // Expected: true
console.log();

// Test Case 4: Odd-length palindrome
let head4 = createLinkedList([1, 2, 3, 2, 1]);
console.log("Test Case 4 (Odd-length palindrome):");
printLinkedList(head4); // Expected: 1 -> 2 -> 3 -> 2 -> 1
console.log("Is palindrome?", isPalindrome(head4)); // Expected: true
console.log();

// Test Case 5: Not a palindrome
let head5 = createLinkedList([1, 2, 3, 4]);
console.log("Test Case 5 (Not a palindrome):");
printLinkedList(head5); // Expected: 1 -> 2 -> 3 -> 4
console.log("Is palindrome?", isPalindrome(head5)); // Expected: false
console.log();

// Test Case 6: Another non-palindrome
let head6 = createLinkedList([1, 2, 3, 1]);
console.log("Test Case 6 (Another non-palindrome):");
printLinkedList(head6); // Expected: 1 -> 2 -> 3 -> 1
console.log("Is palindrome?", isPalindrome(head6)); // Expected: false

s