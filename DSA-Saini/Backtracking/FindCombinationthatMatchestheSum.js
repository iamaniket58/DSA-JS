//arr=[2,3,5,10], Sum=15. Find all the combination which match the sum.
function findCombinations(arr, target) {
    let result = [];

    function backtrack(start, current, sum) {
        // Base case: exact sum found
        if (sum === target) {
            result.push([...current]);
            return;
        }

        // Stop if sum exceeds target
        if (sum > target) return;

        for (let i = start; i < arr.length; i++) {
            current.push(arr[i]);
            backtrack(i + 1, current, sum + arr[i]);
            current.pop(); // backtrack
        }
    }

    backtrack(0, [], 0);
    return result;
}

// Example
let arr = [2, 3, 5, 10];
let sum = 15;

console.log(findCombinations(arr, sum));


function Comb(nums, sum) {
    let ans = [];
    let n = nums.length;
    let backtrack = (start, arr, total) => {
        if (total == sum) {
            ans.push([...arr]);
        }
        if (total > sum) return;
        for (let i = start; i < n; i++) {
            arr.push(nums[i]);
            backtrack(i + 1, arr, total + nums[i]);
            arr.pop();
        }
    }
    backtrack(0, [], 0)
}
console.log(findCombinations(arr, sum));
