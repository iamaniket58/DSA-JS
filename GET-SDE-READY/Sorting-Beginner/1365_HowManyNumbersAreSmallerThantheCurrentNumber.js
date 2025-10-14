/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Optimized- Nikhil Lohia
var smallerNumbersThanCurrent = function(nums) {
    let array=new Array(100+1).fill(0);
    for(let i=0;i<nums.length;i++){
        array[nums[i]]++;
    }

    let cumulativeSum=[];
    cumulativeSum[0]=0
    for(let i=1;i<array.length;i++){
        cumulativeSum[i]=cumulativeSum[i-1]+array[i-1];
    }

    let ans=[];
    for(let i=0;i<nums.length;i++){
        ans[i]=cumulativeSum[nums[i]];
    }
    return ans;
};

var smallerNumbersThanCurrent = function(nums) {
    let count=[];
    for(let i=0;i<nums.length;i++){
        let lessthanCurr=0;
        for(let j=0;j<nums.length;j++){
            if(j==i)continue;
            if(nums[j]<nums[i]){
                lessthanCurr++;
            }
        }
        count.push(lessthanCurr);
    }
    return count;
};