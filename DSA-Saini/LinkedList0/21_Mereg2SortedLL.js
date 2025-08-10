/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//Revision
var mergeTwoLists = function (list1, list2) {
    let sentinel = new ListNode();
    let ans = sentinel
    let c1 = list1;
    let c2 = list2;
    while (c1 != null && c2 != null) {
        if (c1.val <= c2.val) {
            ans.next = new ListNode(c1.val);
            c1 = c1.next
        }
        else {
            ans.next = new ListNode(c2.val);
            c2 = c2.next;
        }
        ans = ans.next;
    }
    while (c1 != null) {
        ans.next = new ListNode(c1.val);
        c1 = c1.next;
        ans = ans.next;
    }
    while (c2 != null) {
        ans.next = new ListNode(c2.val);
        c2 = c2.next;
        ans = ans.next;
    }
    return sentinel.next;
};

var mergeTwoLists = function(l1, l2) {
    if(!l1)return l2
    if(!l2) return l1
    let curr=null;
    if(l1.val<=l2.val){
        curr=l1;
        l1=l1.next;
    }
    else{
        curr=l2;
        l2=l2.next
    }
    let sorted=curr;
    while(l1 && l2){
        if(l1.val<=l2.val){
            curr.next=l1;
            l1=l1.next;
            curr=curr.next;
        }
        else{
            curr.next=l2;
            l2=l2.next;
            curr=curr.next;
        }
    }
    if(!l1)curr.next=l2
    else curr.next=l1;
    return sorted;  
};

// by using dummy Node
var mergeTwoLists1 = function(l1, l2) {
    if(!l1)return l2
    if(!l2) return l1
    let dummy=new ListNode();
    let curr=dummy;
    while(l1 && l2){
        if(l1.val<=l2.val){
            curr.next=l1;
            l1=l1.next;
            curr=curr.next;
        }
        else{
            curr.next=l2;
            l2=l2.next;
            curr=curr.next;
        }
    }
    if(!l1)curr.next=l2
    else curr.next=l1;
    return dummy.next;  
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
let head1 = createLinkedList([2]);
let head2 = createLinkedList([1]);
printLinkedList(mergeTwoLists(head1, head2)); 
console.log();