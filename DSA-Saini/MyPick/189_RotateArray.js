/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//Optimized
var rotate = function (nums, k) {
    //Reverse the array, then reverse the k part and then reverse the other part.
    let reverse = function (l, r) {
        while (l < r) {
            let temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++;
            r--;
        }
    }
    k = k % nums.length;
    reverse(0, nums.length - 1)
    reverse(0, k - 1)
    reverse(k, nums.length - 1)

    return nums

};
//Reverse the array, then reverse the k part and then reverse the other part.
var rotate = function (nums, k) {
        k = k % nums.length;
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l++;
        r--;
    }

    l = 0;
    r = k - 1;
    while (l < r) {
        let temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l++;
        r--;
    }

    l = k;
    r = nums.length - 1;
    while (l < r) {
        let temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l++;
        r--;
    }
    return nums

};

// Remove from back and put it in front - 1 test case failed
var rotateq = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
    return nums
};

// replace element with last index- 1 testcase failed
var rotate2 = function (nums, k) {
    while (k > 0) {
        let le = nums[nums.length - 1]
        for (i = nums.length - 1; i > 0; i--) {
            nums[i] = nums[i - 1]
        }
        nums[0] = le;
        k--
    }
    return nums

};


console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))