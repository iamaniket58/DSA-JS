function RemoveElements(nums,val){
    x=nums[0]==val?0:1
    for(let i=1;i<nums.length;i++){
        if(nums[i]!=val){
            nums[x]=nums[i]
            x+=1
        }
    }
    return nums
}
// console.log(RemoveElements([3,2,2,3],3))
// console.log(RemoveElements([0,1,2,2,3,0,4,2],2))

function RemoveElements1(nums,val){
    let x=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[x]=nums[i]
            x+=1
        }
    }
    return nums
}
console.log(RemoveElements1([3,2,2,3],3))
console.log(RemoveElements1([0,1,2,2,3,0,4,2],2))