//Optimal Approach
var twoSum1 = function (nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let search = target - nums[i];
        if (obj[search] != undefined) {
            return [obj[search], i]
        }
        obj[nums[i]] = i;
    }
}

var twoSum2=function(nums,target){
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        let search=target-nums[i];
        if(map.has(search)){
            return [map.get(search),i]
        }
        map.set(nums[i],i)
    }
}

console.log(twoSum2([2, 7, 11, 15],9))

//Backtracking Solution for 2-Sum 😂😂😂😂😂😂
var twoSum = function (nums, target) {
    let ans = [];
    let backtrack = (path, index, sum) => {
        if (sum == target && path.length==2) {
            ans = [...path];
            return;
        }
        if (path.length > 2 ) return;
        for (let i = index; i < nums.length; i++) {
            path.push(i);
            backtrack(path, i + 1, sum + nums[i]);
            path.pop();
        }
    }
    backtrack([], 0, 0);
    return ans;
};


//Bruite-Force Approach- Not Optimal Solution
var twoSum = function (nums, target) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] == target) return [i, j]
        }
    }
};