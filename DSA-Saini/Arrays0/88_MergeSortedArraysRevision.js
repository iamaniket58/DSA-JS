/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 //Using For Loop
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    for (let x = m + n - 1; x >= 0 && j >= 0; x--) {
        if (nums1[i] != undefined && nums1[i] >= nums2[j]) { //if (i>=0 && nums1[i] >= nums2[j]) //Both is correct
            nums1[x] = nums1[i--];
        }
        else {
            nums1[x] = nums2[j--];
        }
    }
};

//using 2 While loop
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let x = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[x] = nums1[i];
            i--;
            x--;
        }
        else {
            nums1[x] = nums2[j];
            j--;
            x--;
        }
    }
    while (j >= 0) nums1[x--] = nums2[j--];
};

//Using 1 while loop
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let x = m + n - 1;
    while (i >= 0 || j >= 0) {
        if (j < 0) break;
        if (i >= 0 && nums1[i] >= nums2[j]) {
            nums1[x] = nums1[i];
            i--;
            x--;
        }
        else {
            nums1[x] = nums2[j];
            j--;
            x--;
        }
    }
};