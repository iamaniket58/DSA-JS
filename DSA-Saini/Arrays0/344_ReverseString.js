function ReverseString(nums){
    let start=0;
    let end=nums.length-1;
    while(start<end){
        let temp=nums[start];
        nums[start]=nums[end];
        nums[end]=temp;
        start++;
        end--;
    }
    return nums
}

//console.log(ReverseString(["h","e","l","l","o"]))

function ReverseStringSirMethod(nums){
    let al=nums.length;
    let halfed=Math.floor(al/2)
    for(let i=0;i<halfed;i++){
        temp=nums[i];
        nums[i]=nums[al-1-i];
        nums[al-i-1]=temp
    }
    return nums
}
console.log(ReverseStringSirMethod(["h","e","l","l","o"]))