var findMaxConsecutiveOnes = function(nums) {
    let max1=0,counter=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            counter+=1
        }
        else{
            if(counter>max1){ //Math.Max(counter,max1)
                max1=counter;
            }
            counter=0
        }
    }
    return max1>counter?max1:counter  //Math.Max(counter,max1)
};
findMaxConsecutiveOnes([1,1,0,1,1,1])
