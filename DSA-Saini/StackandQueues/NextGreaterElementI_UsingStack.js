var nextGreaterElement = function (nums1, nums2) {
    //Stack Solution
    let stack = [];
    let ngeMap = {};
    stack.push(nums2[nums2.length - 1]);
    ngeMap[nums2[nums2.length - 1]] = -1

    for (let i = nums2.length - 2; i >= 0; i--) {
        let top = stack[stack.length - 1];
        if (nums2[i] < top) {
            ngeMap[nums2[i]] = top;
        }
        else {
            while (stack.length != 0) {
                if (top < nums2[i]) {
                    stack.pop();
                    top = stack[stack.length - 1]
                }
                else {
                    ngeMap[nums2[i]] = top;
                    break;
                }
            }
            if (stack.length == 0) {
                ngeMap[nums2[i]] = -1
            }
        }
        stack.push(nums2[i]);
    }
    let ans = []
    for (let i = 0; i < nums1.length; i++) {
        ans[i] = ngeMap[nums1[i]]
    }
    return ans
}

nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7])


//More Optimized
var nextGreaterElement = function (nums1, nums2) {
    //Stack Solution
    let stack = [];
    let ngeMap = {};
    stack.push(nums2[nums2.length - 1]);
    ngeMap[nums2[nums2.length - 1]] = -1

    for (let i = nums2.length - 2; i >= 0; i--) {
        let top = stack[stack.length - 1];
        while (stack.length != 0) {
            if (top < nums2[i]) {
                stack.pop();
                top = stack[stack.length - 1]
            }
            else {
                ngeMap[nums2[i]] = top;
                break;
            }
        }
        if (stack.length == 0) {
            ngeMap[nums2[i]] = -1
        }

        stack.push(nums2[i]);
    }
    let ans = []
    for (let i = 0; i < nums1.length; i++) {
        ans[i] = ngeMap[nums1[i]]
    }
    return ans
}

//Even More Optimized - Chat GPT

var nextGreaterElement = function (nums1, nums2) {
    let stack = [];
    let ngeMap = {};

    for (let i = nums2.length - 1; i >= 0; i--) {
        let curr = nums2[i];

        while (stack.length && stack[stack.length - 1] <= curr) {
            stack.pop();
        }

        ngeMap[curr] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(curr);
    }

    return nums1.map(num => ngeMap[num]);
};


//MyFavourite
var nextGreaterElement = function (nums1, nums2) {

    //More Optimized
    let stack = [];
    let map = {};
    for (let i = nums2.length - 1; i >= 0; i--) {
        //let top=stack[stack.length-1]
        while (nums2.length != 0 && nums2[i] > stack[stack.length - 1]) {
            stack.pop();
        }
        if (stack.length == 0) {
            map[nums2[i]] = -1
        }
        else {
            map[nums2[i]] = stack[stack.length - 1]
        }
        stack.push(nums2[i]);
    }

    return nums1.map(x => map[x])
}
