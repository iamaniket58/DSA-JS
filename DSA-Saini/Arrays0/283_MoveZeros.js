//This is my solution
function MoveZeros(nums){
    let x=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] !=0 ){
            nums[x]=nums[i]
            x+=1
        }
    }

    if(x<=nums.length-1){
        for(let i=x;i<nums.length;i++){
            nums[i]=0;
        }
    }
    return nums
}
//console.log(MoveZeros([0,1,0,3,12]))


//This is also MySolution
function MoveZeros1(nums){
    let x=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] != 0){
            temp=nums[i];
            nums[i]=nums[x];
            nums[x]=temp;
            x+=1
        }
    }
    return nums
}
console.log(MoveZeros1([0,1,0,3,12]))