/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Sirs's methiod- Optimized
var searchRange = function (nums, target) {
    let ans = [-1, -1];
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);
        if (target > nums[mid]) {
            l = mid + 1;
        }
        else {
            r = mid;
        }
    }
    if (nums[l] == target) ans[0] = l;
    l = 0;
    r = nums.length - 1;
    while (l < r) {
        //Try to understand why are we doing Ceil here
        let mid = l + Math.ceil((r - l) / 2); //let mid = l + Math.floor((r - l + 1) / 2); //Both Correct

        if (target < nums[mid]) {
            r = mid - 1;
        }
        else {
            l = mid;
        }
    }
    if (nums[l] == target) ans[1] = l;
    return ans;
};
var searchRange = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let ans = [-1, -1]
    //Checking the First occurance
    while (l < r) {
        let mid = Math.floor(l + (r - l) / 2)
        if (nums[mid] == target) {
            r = mid;
        }
        else if (nums[mid] > target) {
            r = mid - 1;
        }
        else {
            l = mid + 1
        }
    }
    if (nums[l] == target) ans[0] = l

    l = 0;
    r = nums.length - 1
    //Checking the Last occurance

    while (l < r) {
        let mid = Math.ceil(l + (r - l) / 2)
        if (nums[mid] == target) {
            l = mid;
        }
        else if (nums[mid] > target) {
            r = mid - 1;
        }
        else {
            l = mid + 1
        }
    }
    if (nums[l] == target) ans[1] = l
    return ans
};


//Another Approach- Storing the value and moving the pointers normanlly i.e l=mid+1 and r=mid-1
var searchRange = function (nums, target) {
    let l = 0, r = nums.length - 1, ans = [-1, -1];
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (nums[mid] == target) {
            ans[0] = mid;
            r = mid - 1;
        }
        else if (nums[mid] > target) {
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    l = 0;
    r = nums.length - 1;
    while (l <= r) {
        let mid = l + Math.ceil((r - l) / 2);
        if (nums[mid] == target) {
            ans[1] = mid;
            l = mid + 1;
        }
        else if (nums[mid] > target) {
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return ans
};

//It looks like binary search but in Worst scenario it behaves like Liner Search Ex;- [3,3,3,3,3,3,3,3,3,3,3]Target=3
var searchRange = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let targetFound = false;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (nums[mid] == target) {
            l = r = mid;
            targetFound = true;
            break;
        }
        else if (target > nums[mid]) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    if (!targetFound) return [-1, -1];
    while (l >= 0 && nums[l - 1] == target) {
        l--;
    }
    while (r < nums.length && nums[r + 1] == target) {
        r++;
    }
    return [l, r];
};


//Using Liner Search

var searchRange = function (nums, target) {
    let ans = [-1, -1];
    //Filling the first element
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            ans[0] = i;
            break;
        }
    }

    //Filling the last element
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] == target) {
            ans[1] = i;
            break;
        }
    }
    return ans
};

//Linear Search in 1 pass
var searchRange = function (nums, target) {
    let ans = [-1, -1];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            //ans[0] will only be updated for the first occurance and ans[1] for all the occurance so ultimately last occurance will stay
            if (ans[0] == -1) {
                ans[0] = i
            }
            ans[1] = i
        }
    }
    return ans;
};