/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let n = s.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        let temp = s[i];
        s[i] = s[n - 1 - i];
        s[n - 1 - i] = temp;
    }
};

function ReverseString(nums) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
    return nums
}

//console.log(ReverseString(["h","e","l","l","o"]))

function ReverseStringSirMethod(nums) {
    let n = nums.length;
    let halfed = Math.floor(n / 2)
    for (let i = 0; i < halfed; i++) {
        let temp = nums[i];
        nums[i] = nums[n - 1 - i];
        nums[n - i - 1] = temp
    }
    return nums
}
console.log(ReverseStringSirMethod(["h", "e", "l", "l", "o"]))