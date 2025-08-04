var nextGreaterElements=function(nums){
    let stack=[];
    let n=nums.length;
    let ans=[];
    for(let i=nums.length*2-1;i>=0;i--){
        while(stack.length!=0 && nums[i%n]>=stack[stack.length-1]){
            stack.pop();
        }
        if(stack.length==0){
            ans[i%n]=-1
        }
        else{
            ans[i%n]=stack[stack.length-1]
        }
        // ans[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(nums[i%n])
    }
    return ans;
}
nextGreaterElements([1,5,0,3,4,9,2,6,8])

//SirsWay
var nextGreaterElements1=function(nums){
    let stack=[];
    let n=nums.length;
    let ans=Array(n).fill(-1);
    stack.push(arr[n-1])
    for(let i=nums.length-2;i>=0;i--){
        while(stack.length){
            let top=stack[stack.length-1]
            if(arr[i%n]<top){
                ans[i%n]=top
            }
            else{
                stack.pop();
            }
        }
        stack.push(arr[i%n]);
    }
    return ans;
}