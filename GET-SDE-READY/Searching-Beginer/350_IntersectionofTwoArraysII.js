/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let ans = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums2[j] == nums1[i]) {
                ans.push(nums1[i]);
                nums2[j] = -1
                break;
            }
        }
    }
    return ans;
};
//Follow up Ques- If array is sorted
//Approach 2: Sorting + Two Pointers — O(m log m + n log n)
var intersect = function (nums1, nums2) {
    let ans = [];
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let i = j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] == nums2[j]) {
            ans.push(nums1[i]);
            i++;
            j++;
        }
        else if (nums2[j] < nums1[i]) {
            j++;
        }
        else {
            i++;
        }
    }
    return ans;
};