/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller1 = function (nums) {
    let count = [];
    for (let i = 0; i < nums.length; i++) {
        let smallertoRight = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) smallertoRight++;
        }
        count.push(smallertoRight);
    }
    return count;
};

var countSmaller = function(nums) {
    const n = nums.length;
    const counts = new Array(n).fill(0);
    const indexes = [...Array(n).keys()]; // [0, 1, 2, 3]

    function mergeSort(start, end) {
        if (start >= end) return;
        const mid = Math.floor((start + end) / 2);
        mergeSort(start, mid);
        mergeSort(mid + 1, end);
        merge(start, mid, end);
    }

    function merge(start, mid, end) {
        const temp = [];
        let i = start, j = mid + 1, rightSmaller = 0;

        while (i <= mid && j <= end) {
            if (nums[indexes[j]] < nums[indexes[i]]) {
                rightSmaller++;
                temp.push(indexes[j]);
                j++;
            } else {
                counts[indexes[i]] += rightSmaller;
                temp.push(indexes[i]);
                i++;
            }
        }

        while (i <= mid) {
            counts[indexes[i]] += rightSmaller;
            temp.push(indexes[i]);
            i++;
        }

        while (j <= end) {
            temp.push(indexes[j]);
            j++;
        }

        for (let k = start; k <= end; k++) {
            indexes[k] = temp[k - start];
        }
    }

    mergeSort(0, n - 1);
    return counts;
};

console.log(countSmaller([5, 2, 6, 1])); // [2, 1, 1, 0]
