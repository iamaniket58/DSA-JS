/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // let ans = []
    let ans = []
    //Sorting the array
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j + 1] < nums[j]) {
                let temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;
            }
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            TwoSum(nums, i, ans)
        }

    }
    return ans
};
var TwoSum = (arr, x, ans) => {
    let l = x + 1;
    let r = arr.length - 1;
    while (l < r) {
        let sum = arr[l] + arr[r] + arr[x];
        if (sum == 0) {
            ans.push([arr[l], arr[r], arr[x]]);
            l++;
            r--;
            while (l < r && arr[l] == arr[l - 1]) l++

        }
        else if (sum > 0) {
            r--;
        }
        else {
            l++
        }
    }
}

//Bruite-Force Approach
var threeSum1 = function (nums) {
    let arrayOfArrays = []
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    arrayOfArrays.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    // return ans
    //Now we have to filter the duplicates
    // const arrayOfArrays = [
    //     [-1, 0, 1],
    //     [-1, 2, -1],
    //     [0, 1, -1],
    //     [-1, 0, 1] // Another duplicate (same elements, same order)
    // ];
    const uniqueArrays = [];
    const seenSortedStrings = new Set();
    for (const array of arrayOfArrays) {
        let sortedArray = [...array].sort((a, b) => a - b);
        let jsonstring = JSON.stringify(sortedArray);
        if(!seenSortedStrings.has(jsonstring)){
            seenSortedStrings.add(jsonstring);
            uniqueArrays.push(sortedArray)
        }

    }
    return uniqueArrays
}
console.log(threeSum1([-1, 0, 1, 2, -1, -4]))