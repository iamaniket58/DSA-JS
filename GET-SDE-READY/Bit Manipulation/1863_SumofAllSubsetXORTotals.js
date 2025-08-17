/**
 * @param {number[]} nums
 * @return {number}
 */
//Create all subset then find Out XOR and add it
var subsetXORSum = function(nums) {
    let res=[];
    let backtrack=(path,start)=>{
        res.push([...path]);
        for(let i=start;i<nums.length;i++){
            path.push(nums[i]);
            backtrack(path,i+1);
            path.pop();
        }
    }
    backtrack([],0)
    let count=0;
    for(let i=0;i<res.length;i++){
        let xor=0;
        for(let j=0;j<res[i].length;j++){
            xor=xor^res[i][j]
        }
        count+=xor;
    }
    return count;
};


//Not understood this solution
var subsetXORSum = function(nums) {
    function dfs(i, xor) {
        if (i === nums.length) return xor;
        // Option 1: skip nums[i], Option 2: include nums[i]
        return dfs(i + 1, xor) + dfs(i + 1, xor ^ nums[i]);
    }
    return dfs(0, 0);
};

//Traverse all array and Find Bitwise OR EX-(5,1,6) orVal=7 now left shift by 2 to get the answer
var subsetXORSum1 = function(nums) {
    let orVal = 0;
    for (let num of nums) {
        orVal |= num;   // accumulate OR
    }
    return orVal << (nums.length - 1);
};

// Example
console.log(subsetXORSum([1,3])); // 6
console.log(subsetXORSum1([5,1,6])); // 28
