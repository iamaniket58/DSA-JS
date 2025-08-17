/**
 * @param {number[]} nums
 * @return {number}
 */




//Bruite Force
var totalHammingDistance = function(nums) {
    let ans=0;
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            let xor=nums[i]^nums[j];
            let setBit=countSetBitsByConvertingToBinary(xor)
            ans=ans+ setBit
        }
    }
    return ans
};

//Counting digit using (check if i'th bit is set) 
function numberOfSetBits(num){
    let count=0;
    for(let i=0;i<32;i++){
        if(num & (1<<i))count++
    }
    return count;
}

//COunting didgit using Binary conversion
function countSetBitsByConvertingToBinary(num){
    let count=0
    while(num>0){
        let rem=num%2;
        if(rem==1)count++
        num=Math.floor(num/2);
    }
    return count

}