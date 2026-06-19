//Question:- Find all the combination of number in the array whose sum is equal to target
function CombSum(arr, target) {
    let ans = [];
    let backtrack = (path, index, sum) => {
        if (sum > target) return;
        if (sum == target) {
            ans.push([...path]);
            return;
        }
        for (let i = index; i < arr.length; i++) {
            path.push(arr[i]);
            backtrack(path, i + 1, sum + arr[i]);
            path.pop();
        }
    }
    backtrack([], 0, 0);
    return ans;
}
console.log(CombSum([2, 3, 5, 10, 12], 15))