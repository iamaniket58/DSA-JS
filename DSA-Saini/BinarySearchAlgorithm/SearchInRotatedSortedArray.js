/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {

    let l=0;
    let r=arr.length-1;
    while(l<=r){
        let mid=Math.floor(l+(r-l)/2);
        if(target==arr[mid])return mid
        if(arr[l]<=arr[mid]){ //Left Sorted
            if(target<arr[mid] && target>=arr[l]){ //Search in sorted part- left side
                r=mid-1;
            }
            else{ //Search in Non sorted part- right side
                l=mid+1
            }
        }
        else{ //Right Sorted
            if(target>arr[mid] && target<=arr[r]){
                l=mid+1;
            }
            else{
                r=mid-1;
            }
        }
    }
    return -1


};
console.log(search([3,4,5,6,7,8,0,1,2],0))

//Using Linear Search
var search1 = function(arr, target) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            return i
        }
    }
    return -1;
}