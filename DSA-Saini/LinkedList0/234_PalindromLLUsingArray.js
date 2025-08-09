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

    // way-1
    // let left=0
    // let right=array.length-1;
    // while(right>left){
    //     if(array[left]!=array[right]){
    //         return false;
    //     }
    //     left+=1;
    //     right-=1;
    // }


    //way-2- instead of this we can write a simple for loop
    // for(let i=0,j=array.length-1;i<j;i++,j--){
    //     if(array[i]!=array[j]){
    //         return false;
    //     }
    // }

    // way-3
    for(let i=0;i<Math.floor(array.length/2);i++){
        if(arr[i]!=arr[n-i-1]){
            return false
        }
    }

    return true;
};