/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//My Working Solution
var findPairs = function (nums, k) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    }
    let count = 0;
    for (let key in map) {
        if (k == 0) {
            if (map[key] >= 2) {
                count++;
            }
        }
        else {
            let search = key - k;
            if (map[search]) {
                count++;
            }
        }

    }
    return count;
};
//Using inbuilt Map
var findPairs = function (nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i],(map.get(nums[i]) || 0) + 1);
    }
    let count = 0;
    for (let [key,freq] of map) {
        if (k == 0) {
            if (freq >= 2) {
                count++;
            }
        }
        else {
            if (map.get(key - k)) count++;
        }

    }
    return count;
};

//This failed for this test case[1,2,4,4,3,3,0,9,2,3] k=3, Expected=[[1,4],[3,0]] actual=[[1,4],[3,0],[0,3]]
var findPairs = function (nums, k) {
    let count = 0;
    let set = new Set();
    for (let i = 0; i < nums.length - 1; i++) {
        if (set.has(nums[i])) continue;
        set.add(nums[i]);
        let innerSet = new Set();
        for (let j = i + 1; j < nums.length; j++) {
            // if (innerSet.has(nums[j]) || set.has(nums[i])) continue;
            if (innerSet.has(nums[j])) continue;
            innerSet.add(nums[j]);
            if (Math.abs(nums[i] - nums[j]) == k) count++;
        }
    }
    return count;
};