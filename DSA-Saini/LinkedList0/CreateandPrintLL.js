function ListNode(val = 0, next = null) {
    this.val = val
    this.next = next;
}

function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current['next'] = new ListNode(arr[i]);
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
printLinkedList(head1)
//This is how head looks
//From AddToWatch
head2 = {
    val: 3,
    next: {
        val: 4,
        next: {
            val: 9,
            next: null,
        },
    },
}

let head=new ListNode(3);
head.next=new ListNode(4);
head.next.next=new ListNode(5); 
head.next.next.next=new ListNode(6); 
head.next.next.next.next=new ListNode(7); 
head.next.next.next.next.next = head.next.next;
console.log(head)