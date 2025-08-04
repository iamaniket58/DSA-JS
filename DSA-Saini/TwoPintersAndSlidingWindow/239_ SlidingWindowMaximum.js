/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//Using Monotonus decreasing dequeue
var maxSlidingWindow2 = function (nums, k) {
    let res = [];
    let q = [];
    let i = j = 0;
    while (j < nums.length) {
        //Push current element after removing all smaller element
        while (q.length > 0 && nums[j] > q[q.length - 1]) {
            q.pop();
        }
        q.push(nums[j]);

        //Start pushing the answer after K-(When j reaches 2nd index)
        if (j >= k - 1) {
            res.push(q[0]);
            if (nums[i] == q[0]) q.shift();//if leftmost element for current window (nums[i]) is largest q[0] then remove it
            i++
        }
        j++;
    }
    return res;
}


//Easy solution
var maxSlidingWindow = function (nums, k) {
    let slidingArray = [];
    for (let i = 0; i < nums.length - k + 1; i++) {
        let max = -Infinity;
        let arr = nums.slice(i, k + i);
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > max) {
                max = arr[j];
            }
        }
        slidingArray[i] = max;
    }
    return slidingArray
};
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
//Slight change in Bruite force
var maxSlidingWindow1 = function (nums, k) {
    let slidingArray = [];
    for (let i = 0; i < nums.length - k + 1; i++) {
        let j = k + i - 1
        let max = -Infinity;
        for (let p = i; p < j + 1; p++) {
            if (nums[p] > max) max = nums[p]
        }
        slidingArray[i] = max;
    }
    return slidingArray
};