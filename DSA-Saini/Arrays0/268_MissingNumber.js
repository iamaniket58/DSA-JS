var missingNumber = function(nums) {
    let array=[];
    for(let i=0;i<=nums.length;i++){
        array[i]=i
    }
    for(let i=0;i<array.length;i++){
        if(!nums.includes(array[i])){
            return array[i];
        }
    }
};

//console.log(missingNumber([3,0,1]))
//Best Solution
var missingNumberSir = function(nums) {
    //Sum=(n*(n+1)/2)
    let arrayLength=nums.length
    let totalSum=arrayLength*(arrayLength+1)/2
    let arraySum=0;
    for(let i=0;i<arrayLength;i++){
        arraySum+=nums[i];
    }
    return totalSum-arraySum;
};
console.log(missingNumberSir([3,0,1]))



//Least Optimal Solution
var missingNumberLeastOptimal = function(nums){
    for(let i=0;i<=nums.length;i++){
        if(!nums.includes(i))return i
    }
}