function SingleNumber(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1
    }

    for(let key in obj){
        if(obj[key]==1){
            return Number(key)
        }
    }
}
//console.log(SingleNumber([2, 2, 1]));

//using XOR
function SingleNumberSir(nums){
    let xor=0;
    for(let i=0;i<nums.length;i++){
        xor=xor^nums[i]
    }
    return xor
}
console.log(SingleNumberSir([2,2,1]))