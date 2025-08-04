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
var isPalindrome = function(head) {
    let array=[];
    let current=head;
    while(current!=null){
        array.push(current.val);
        current=current.next;
    }
    // let left=0
    // let right=array.length-1;
    // while(right>left){
    //     if(array[left]!=array[right]){
    //         return false;
    //     }
    //     left+=1;
    //     right-=1;
    // }

    //instead of this we can write a simple for loop

    for(let i=0,j=array.length-1;i<j;i++,j--){
        if(array[i]!=array[j]){
            return false;
        }
    }
    return true;
};