let arr=[1,5,0,3,4,9,2,6,8]
let arr1=[1, 5, 0, 3, 4, 9, 2, 6, 8]
function NextGreater(arr){
    let stack=[];
    let ans=[];
    for(let i=arr.length-1;i>=0;i--){
        if(stack.length==0){
            ans[i]=-1
            stack.push(arr[i]);
            continue;
        }
        let top=stack[stack.length-1]
        if(arr[i]<top){
            ans[i]=top;
            stack.push(arr[i]);
        }
        else if(arr[i]>top){
            let status=false;
            while(stack.length!=0 && top<arr[i]){
                stack.pop();
                if(stack.length==0){
                    stack.push(arr[i]);
                    ans[i]=-1;
                    status=true;
                    break;
                }
                top=stack[stack.length-1]
            }
            if(!status){
            ans[i]=top;
            stack.push(arr[i]);
            }

        }else{
            ans[i]=-1
        }
    }
    return ans
}
console.log(NextGreater([10]))

function NextGreater(arr) {
    let stack = [];
    let ans = new Array(arr.length);
    //let ans = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            ans[i] = -1;
        } else {
            ans[i] = stack[stack.length - 1];
        }

        stack.push(arr[i]);
    }

    return ans;
}