
var searchRange = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let ans = [-1, -1]
    while (l < r) {
        let mid = Math.floor(l + (r - l) / 2)
        if (nums[mid] == target) {
            r = mid;
        }
        else if (nums[mid] > target) {
            r = mid - 1;
        }
        else {
            l = mid + 1
        }
    }
    if (nums[l] == target) ans[0] = l

    l = 0;
    r = nums.length - 1
    while (l < r) {
        let mid = Math.ceil(l + (r - l) / 2)
        if (nums[mid] == target) {
            l = mid;
        }
        else if (nums[mid] > target) {
            r = mid - 1;
        }
        else {
            l = mid + 1
        }
    }
    if (nums[l] == target) ans[1] = l
    return ans
}


//Another Approach
var searchRange=function(nums,target){
    let l=0,r=nums.length-1,ans=[-1,-1];
    while(l<=r){
        let mid=l+Math.floor((r-l)/2);
        if(nums[mid]==target){
            ans[0]=mid;
            r=mid-1;
        }
        else if(nums[mid]>target){
            r=mid-1;
        }
        else{
            l=mid+1;
        }
    }
    l=0;
    r=nums.length-1;
    while(l<=r){
        let mid=l+Math.ceil((r-l)/2);
        if(nums[mid]==target){
            ans[1]=mid;
            l=mid+1;
        }
        else if(nums[mid]>target){
            r=mid-1;
        }
        else{
            l=mid+1;
        }
    }
    return ans
}





//Using Liner Search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let ans = [-1, -1];
    //Filling the first element
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            ans[0] = i;
            break;
        }
    }

    //Filling the last element
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] == target) {
            ans[1] = i;
            break;
        }
    }
    return ans
};