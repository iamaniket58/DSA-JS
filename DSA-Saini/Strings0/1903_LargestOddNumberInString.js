/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (nums) {
    let ans = "";
    let str = "";
    for (let i = 0; i < nums.length; i++) {
        str += nums[i];
        let n = Number(nums[i])
        if (n % 2 != 0) {
            ans = str
        }
    }
    return ans
};
console.log(largestOddNumber('239537672423884969653287101'));

//Simpler approach
var largestOddNumber1 = function (nums) {

    for (let i = nums.length - 1; i >= 0; i--) {
        if (Number(nums[i]) % 2 != 0) { //if ((+nums[i]) % 2 != 0) {
            return nums.slice(0,i+1)
        }
    }
    return ""
};

//More optimized way- parsing a digit string to a number is slightly more costly than just comparing characters
var largestOddNumber1 = function (nums) {
    let mySet=new Set([1,3,5,7,9])

    for (let i = nums.length - 1; i >= 0; i--) {
        if (mySet.has(nums[i])) { //if ((+nums[i]) % 2 != 0) {
            return nums.slice(0,i+1)
        }
    }
    return ""
};

//Revision
var largestOddNumber = function(num) {
    let i=num.length-1;
    for(;i>=0;i--){
        if(Number(num[i])%2==1)break;
    }
    return num.substring(0,i+1);
};

