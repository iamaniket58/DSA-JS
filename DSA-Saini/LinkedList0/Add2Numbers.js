/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let c1 = l1;
    let c2 = l2;
    let carry = 0;
    let head = new ListNode();
    let digit = head;
    while (c1 || c2 || carry != 0) {
        //When C! becomes null
        if (c1 == null && c2!=null) {
            let sum = 0 + c2.val + carry;
            digit.next = new ListNode(sum % 10);
            carry = Math.floor(sum / 10);
            c2 = c2.next;
            digit = digit.next;
        }
        //When C2 becomes null
        else if (c2 == null && c1 !=null) {
            let sum = c1.val + 0 + carry;
            digit.next = new ListNode(sum % 10);
            carry = Math.floor(sum / 10);
            c1 = c1.next;
            digit = digit.next;
        }
        //When both c1 and c2 is null and carry have the value
        else if(c1==null && c2==null && carry!=null){
            digit.next=new ListNode(carry);
            carry=0
        }
        //All other calculation
        else {
            let sum = c1.val + c2?.val + carry;
            digit.next = new ListNode(sum % 10);
            carry = Math.floor(sum / 10);
            c1 = c1.next;
            c2 = c2.next;
            digit = digit.next;
        }

    }
    return head.next;
};

//The Optimzed approach to the above method
var addTwoNumbers=function(l1,l2){
    let carry=0;
    let senitel=new ListNode();
    let digit=senitel;
    while(l1 || l2 || carry!=0){
        let sum=(!l1?0:l1.val)+(!l2?0:l2.val)+carry;
        digit.next=new ListNode(sum%10);
        carry=Math.floor(sum/10);
        digit=digit.next;
        l1=l1 && l1.next;
        l2=l2 && l2.next;

    }
    return senitel.next;
};


















////Test Cases

function ListNode(val = 0, next = null) {
    this.val = val
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
let head1 = createLinkedList([3, 4, 9]);
let head2 = createLinkedList([4, 8, 1, 9]);
printLinkedList(addTwoNumbers(head1, head2)); 
console.log();