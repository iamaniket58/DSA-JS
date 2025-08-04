/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length<=1)return nums
    let mid=Math.floor(nums.length/2)
    let left=sortArray(nums.slice(0,mid))
    let right=sortArray(nums.slice(mid))
    return Merge(left,right)
};

var Merge=function(left,right){
    let x=0,y=0
    let array=[]
    for(let i=0;i<left.length+right.length;i++){
        if(y>=right.length ||(x<left.length && left[x]<=right[y])){
            array[i]=left[x];
            x++;
        }
        else{
            array[i]=right[y];
            y++;
        }
    }
    return array
}
console.log(sortArray([8,4,5,6,9,1,3,6]))

//If you want to know more about Merging 2 sorted Arrays- refer to MergeTwoSortedArray.js