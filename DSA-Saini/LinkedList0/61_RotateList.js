//Working afster Revision- Not working solution
var rotateRight = function (head, k) {
    //Find length of the LL to control the number of rotation
    //Handle cases where rotation is unnecessary
    let size=0;
    let c=head
    while(c){
        size++;
        c=c.next
    }
    k=k%size

    //Do operation
    for (let i = 0; i < k; i++) {
        if(head==null || k==0 || head.next==null)return head
        let curr = head;
        while (curr.next.next != null) {
            curr = curr.next
        }
        let tbh = curr.next;
        curr.next.next = head;
        head = tbh;
        curr.next = null
    }
    return head

};

//Slow and fast pointer should be k step away, then assign f to head and make s=null
var rotateRight1 = function (head, k) {
    if (!head || !head.next) return head;
    let length = 0;
    let cu = head
    while (cu) {
        length += 1;
        cu = cu.next;
    }
    //To void unnecessary rotation
    k = k % length;
    let slow = head;
    let fast = head;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    while (fast.next != null) {
        slow = slow.next;
        fast = fast.next;
    }
    fast.next = head;
    let newHead = slow.next;
    slow.next = null;
    return newHead;
};


//

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
let head1 = createLinkedList([1, 2,3,4,5]);
//let head2 = createLinkedList([1]);
printLinkedList(rotateRight(head1, 2));
console.log();