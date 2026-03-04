/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        // let mid = Math.floor(right + (left - right) / 2); This also works
        if (target == nums[mid]) return mid;
        else if (target > nums[mid]) {
            left = mid + 1;
        }
        else {
            right = mid - 1
        }
    }
    return -1;
};

function BinarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (right >= left) {
        let mid = Math.floor((left + right) / 2);
        if (array[mid] > target) {
            right = mid - 1;
        }
        else if (array[mid] < target) {
            left = mid + 1;
        }
        else {
            return mid
        }
    }
}
BinarySearch([2, 4, 6, 7, 0, 1], 0)