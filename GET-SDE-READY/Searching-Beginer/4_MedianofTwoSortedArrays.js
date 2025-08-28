/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    //Merge 2 Sorted Array
    let array = [];
    let x = 0;
    let y = 0;
    for (let i = 0; i < nums1.length + nums2.length; i++) {
        if (y >= nums2.length || (x < nums1.length && nums1[x] <= nums2[y])) {
            array[i] = nums1[x++]
        }
        else {
            array[i] = nums2[y++]
        }
    }
    //Check for Median
    let n = array.length
    if (n % 2 == 1) {
        let mid = Math.floor(n / 2)
        return array[mid]
    }
    else {
        let mid = n / 2;
        return (array[mid] + array[mid - 1]) / 2
    }
};