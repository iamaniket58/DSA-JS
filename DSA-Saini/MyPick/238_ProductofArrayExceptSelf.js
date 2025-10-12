/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Working Solution
var productExceptSelf = function (nums) {
    let n = nums.length;
    let left = [1];
    let right = [];
    right[n - 1] = 1;

    // Build prefix products: left[i] = product of all elements before index i
    for (let i = 1; i < n; i++) {
        left[i]=nums[i-1]*left[i-1];
    }

    // Build suffix products: right[i] = product of all elements after index i
    for(let i=n-2;i>=0;i--){
        right[i]=nums[i+1]*right[i+1];
    }

    // Multiply prefix and suffix products to get final result for each index
    let ans=[];
    for(let i=0;i<nums.length;i++){
        ans[i]=left[i]* right[i];
    }
    return ans;

};
//Failing for [0,0]
var productExceptSelf = function (nums) {
    let totalProduct = 1;
    let contains0 = false;
    for (let num of nums) {
        if (num != 0) totalProduct *= num;
        else contains0 = true;
    }
    console.log(totalProduct)
    //This will handle the 0 condition
    if (contains0) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 0) nums[i] = totalProduct;
            else nums[i] = 0;

        }
        return nums;
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = totalProduct / nums[i]
    }
    return nums;
};
console.log(productExceptSelf([1,2,3,4]))