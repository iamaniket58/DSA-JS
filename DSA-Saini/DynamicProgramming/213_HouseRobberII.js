/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n=nums.length
    if(n==1)return nums[0];
    return Math.max(robHelper(nums.slice(0,n-1)),robHelper(nums.slice(1)));
};
let robHelper=(arr)=>{
    if(arr.length==1)return arr[0]
    let a=arr[0];
    let b=Math.max(arr[0],arr[1]);
    for(let i=2;i<arr.length;i++){
        let c=Math.max(a+arr[i],b);
        a=b;
        b=c;
    }
    return b;
}

//Sir's Method-Similar to previous

var rob = function (nums) {
    let helper = (start, end) => {
        if (start==end) return nums[start]
        let a = nums[start];
        let b = Math.max(nums[start], nums[start+1]);
        for (let i = start+2; i <= end; i++) {
            let c = Math.max(a + nums[i], b);
            a = b;
            b = c;
        }
        return b;
    }
    let n = nums.length
    if (n == 1) return nums[0];
    return Math.max(helper(0, n - 2), helper(1, n - 1))

};

//Revision
var rob = function (nums) {
    if (nums.length == 1) return nums[0];
    if (nums.length == 2) return Math.max(nums[0], nums[1]);
    return Math.max(robHelper1(0, nums.length - 2, nums), robHelper1(1, nums.length - 1, nums));
};
let robHelper1 = (start, end, nums) => {
    // let dp = [nums[start], Math.max(nums[start], nums[start + 1])];
    let dp=[];
    dp[start] = nums[start];
    dp[start + 1] = Math.max(nums[start], nums[start + 1])
    for (let i = start + 2; i <= end; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[end];
}
