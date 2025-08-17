/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let nums=num.toString().split('').map(Number);
    for(i=0;i<nums.length;i++){
        if(nums[i]==6){
            nums[i]=9;
            break;
        }
    }
    console.log(nums)
    return +nums.join('');
};

//using manual way to store number to array
var maximum69Number  = function(num) {
    //let nums=num.toString().split('').map(Number);
    let nums=[]
    while(num>0){
        nums.unshift(num%10);
        num=Math.floor(num/10)
    }
    for(i=0;i<nums.length;i++){
        if(nums[i]==6){
            nums[i]=9;
            break;
        }
    }
    console.log(nums)
    return +nums.join('');
};

var maximum69Number  = function(num) {
    
    return Number(num.toString().replace('6','9'))
};