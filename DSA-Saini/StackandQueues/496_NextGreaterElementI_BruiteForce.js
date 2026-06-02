/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//Slightly Optimized
var nextGreaterElement1 = function (nums1, nums2) {
    let ans = [];
    for (let i = 0; i < nums1.length; i++) {
        let element = nums1[i];
        let flag = false;
        let val = -1
        for (let j = 0; j < nums2.length; j++) {
            if (element == nums2[j]) {
                flag = true;

            }
            if (flag) {
                if (element < nums2[j]) {
                    val = nums2[j];
                    break;
                }
            }
            // if(j==nums2.length-1 && flag && element>=nums2[j] ){
            //     ans[i]=-1
            // }
        }
        ans[i] = val

    }
    return ans
};
var nextGreaterElement = function (nums1, nums2) {
    let ans = [];
    for (let i = 0; i < nums1.length; i++) {
        let element = nums1[i];
        let flag = false;
        for (let j = 0; j < nums2.length; j++) {
            if (element == nums2[j]) {
                flag = true;

            }
            if (flag) {
                if (element < nums2[j]) {
                    ans[i] = nums2[j];
                    break;
                }
            }
            if (j == nums2.length - 1 && flag && element >= nums2[j]) {
                ans[i] = -1
            }
        }

    }
    return ans
};

//Revision
var nextGreaterElement = function (nums1, nums2) {
    let ans = [];
    for (let i = 0; i < nums1.length; i++) {
        let isFound = false;
        for (let num2 of nums2) {
            if (num2 > nums1[i] && isFound) {
                ans[i] = num2;
                break;
            }
            if (nums1[i] == num2) isFound = true;
        }
        if (!ans[i]) ans[i] = -1;

    }
    return ans;
};
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))

