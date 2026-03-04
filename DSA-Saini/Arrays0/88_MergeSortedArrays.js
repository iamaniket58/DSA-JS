/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//Method 1 of solving this problem
var merge = function (nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0, m);
    let i = j = 0;
    for (let x = 0; x < m + n; x++) {
        if (j >= n || (i < m && nums1Copy[i] < nums2[j])) {
            nums1[x] = nums1Copy[i];
            i++;
        }
        else {
            nums1[x] = nums2[j];
            j++;
        }
    }
};

//Method-2
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let x = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums2[j] > nums1[i]) {
            nums1[x] = nums2[j];
            j--;
        }
        else {
            nums1[x] = nums1[i];
            i--;
        }
        x--;
    }
    // if i is exhauseted we have to copy all elements from nums2 to nums1
    //if j is exhausted then no need to do anything
    while (j >= 0) {
        nums1[x] = nums2[j];
        j--;
        x--
    }
};
//Method-1: Sirs Solution- Same way as mine
function MergeSortedArraySir(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0, m);
    let p1 = 0, p2 = 0;
    for (let i = 0; i < m + n; i++) {
        if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) { //Try to understand this-little tricky 😒😒✅✅✅✅✅✅
            nums1[i] = nums1Copy[p1];
            p1 += 1
        }
        else {
            nums1[i] = nums2[p2];
            p2 += 1
        }

    }
    return array
}

//Method-2
//Start from the end of the arrays and compare the elements and place the larger element at the end of the array
function mergeSortedArraySirMethod2(nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1
    for (let i = nums1.length - 1; i >= 0; i--) {
        if (p2 < 0) break;
        if (nums1[p1] > nums2[p2]) {  //or if(p1>=0 && nums1[p1]>nums2[p2]){- This is also correct and its according to sirs method
            nums1[i] = nums1[p1]
            p1 -= 1
        }
        else {
            nums1[i] = nums2[p2]
            p2 -= 1
        }
    }
    return nums1
}

//Revision- reciprocal of Above
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = nums1.length - 1; i >= 0; i--) {
        if (p2 < 0) break;
        if (p1 < 0 || nums2[p2] > nums1[p1]) {
            nums1[i] = nums2[p2--];
        }
        else {
            nums1[i] = nums1[p1--];
        }
    }
};
//Revision- reciprocal of Above
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    for (let x = m + n - 1; x >= 0; x--) {
        if (j < 0) break;
        if (i < 0 || nums2[j] > nums1[i]) {
            nums1[x] = nums2[j];
            j--
        }
        else {
            nums1[x] = nums1[i];
            i--;
        }
    }
};

//This handles undefined
function mergeSortedArraySirMethod3(nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1
    for (let i = nums1.length - 1; i >= 0; i--) {
        if (p2 < 0) break;
        if (nums1[p1] > nums2[p2]) {  //or if(p1>=0 && nums1[p1]>nums2[p2]){- This is also correct and its according to sirs method
            nums1[i] = nums1[p1]
            p1 -= 1
        }
        else {
            nums1[i] = nums2[p2]
            p2 -= 1
        }
    }
    return nums1
}

//Create a copy of nums1 and then use two pointers to merge the two arrays
function MergeSortedArray(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0, m);
    let p1 = 0, p2 = 0;
    for (let i = 0; i < m + n; i++) {
        if (p1 == m) {
            array[i] = nums2[p2];
            p2 += 1
        }
        else if (p2 == n) {
            array[i] = nums1Copy[p1];
            p1 += 1
        }
        else {
            if (nums1Copy[p1] <= nums2[p2]) {
                array[i] = nums1Copy[p1];
                p1 += 1
            }
            else {
                array[i] = nums2[p2];
                p2 += 1
            }
        }

    }
    return array
}




console.log(mergeSortedArraySirMethod3([3, 4, 7, 9, 0, 0, 0], 4, [1, 2, 6], 3))