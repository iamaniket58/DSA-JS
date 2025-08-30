//Using Binary Serach
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (arr) {
    let l=0;
    let r=arr.length-1;
    //if(arr[l]<arr[r])return arr[l];
    while(l<=r){
        if(arr[l]<=arr[r])return arr[l];
        let mid=Math.floor(l+(r-l)/2);

        if(arr[mid]<arr[mid-1])return arr[mid];
        
        if(arr[l]<=arr[mid]){ //Left is sorted
            l=mid+1
        }
        else{ //right sorted
            r=mid-1
        }
    }
};



//Using Linear Search

var findMin = function (nums) {
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i]
        }
    }
    return min
};  