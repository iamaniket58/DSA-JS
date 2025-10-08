/**
 * @param {number[]} nums
 * @return {number}
 */
//Solution- Similar to Kadane's Algorithm
var maxProduct = function (nums) {
    let maxProdSoFar = nums[0];
    let minProdSoFar = nums[0];
    let totalMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let maxProdSoFarCopy = maxProdSoFar;
        maxProdSoFar = Math.max(nums[i], maxProdSoFar * nums[i], minProdSoFar * nums[i]);
        minProdSoFar = Math.min(nums[i], maxProdSoFarCopy * nums[i], minProdSoFar * nums[i]);
        if(maxProdSoFar>totalMax){
            totalMax=maxProdSoFar;
        }
    }
    return totalMax;
};
//Another way
var maxProduct = function (nums) {
    let ltr = 1;
    let rtl = 1;
    let n = nums.length;
    let finalMax = -Infinity;
    for (let i = 0; i < n; i++) {
        ltr *= nums[i];
        if (ltr > finalMax) finalMax = ltr;
        if (ltr == 0) ltr = 1;
    }
    for (let i = n - 1; i > 0; i--) {
        rtl *= nums[i];
        if (rtl > finalMax) finalMax = rtl;
        if (rtl == 0) rtl = 1;
    }
    return finalMax
};
//Uisng Only 1 for loop
var maxProduct = function (nums) {
    let ltr = 1;
    let rtl = 1;
    let n = nums.length;
    let finalMax = -Infinity;
    for (let i = 0; i < n; i++) {
        ltr *= nums[i];
        rtl *= nums[n - 1 - i];
        if (ltr > finalMax) finalMax = ltr;
        if (rtl > finalMax) finalMax = rtl;

        if (ltr == 0) ltr = 1;
        if (rtl == 0) rtl = 1
    }

    return finalMax
};

//Buite Force- Checking each Subarray
var maxProduct = function (nums) {
    let maxProduct = -Infinity;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let product = 1;
        for (let j = i; j < n; j++) {
            product *= nums[j];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }
    return maxProduct;
};