/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */



//❌This is wrong Solution as i am finding SubSet here, instead of SubArrays
var minSubArrayLen = function (target, nums) {
    let minLength=Infinity;
    let backtrack = (path, start) => {
        if(arraySum(path)>=target){
            if(path.length<minLength){
                minLength=path.length
            }
        }
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(path, i + 1);
            path.pop()
        }
    }
    backtrack([],0)
    return minLength === Infinity ? 0 : minLength;
};
let arraySum=(array)=>{
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum;
}