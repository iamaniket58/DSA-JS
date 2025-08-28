/**
 * @param {number[]} nums
 * @return {number}
 */
// Traverse the array in pairs; if a mismatch is found return the first element, otherwise the last element is unique
var singleNonDuplicate = function (nums) {
    let i=1;
    while(i<nums.length){
        if(nums[i]!=nums[i-1]){
            return nums[i-1]
        }
        i+=2;
    }
    return nums[nums.length-1];
};

//Using XOR- But TC-O(n)
var singleNonDuplicate = function (nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i]
    }
    return xor
};

//Uisng Binary Search

var singleNonDuplicate = function (nums) {
    let l=0;
    let r=nums.length-1;
    while(l<=r){
        let m=Math.floor((l+r)/2);
        if(nums[m]!=nums[m-1] && nums[m]!=nums[m+1]){
            return nums[m]
        }
        if(nums[m]==nums[m-1]){
            let totalElementsLeft=m-1;
            if(totalElementsLeft%2==0){
                l=m+1
            }
            else{
                r=m-2
            }
        }
        else if(nums[m]==nums[m+1]){
            let totalElementsLeft=m;
            if(totalElementsLeft%2==0){
                l=m+2;
            }
            else{
                r=m-1;
            }
        }
    }
    return nums[l]
};