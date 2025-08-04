//My Solution using 2 stack
var dailyTemperatures = function (temperatures) {

    let stack = [];
    let indexStack = [];
    let ans = [];
    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length != 0 && temperatures[i] >= stack[stack.length - 1]) {
            stack.pop();
            indexStack.pop();
        }
        if (stack.length == 0) {
            ans[i] = 0
        }
        else {
            ans[i] = indexStack[indexStack.length - 1] - i;
        }
        stack.push(temperatures[i]);
        indexStack.push(i);
    }
    return ans;
}

//Using 1 stack
var dailyTemperatures = function (temperatures) {

    let stack = []; //It stores Index
    let ans = [];
    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length != 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length == 0) {
            ans[i] = 0
        }
        else {
            ans[i] = stack[stack.length - 1] - i;
        }
        stack.push(i);
    }
    return ans
}

//Using 1 stack- Sirs Method
var dailyTemperatures = function (arr) {

    let stack = []; //It stores Index
    let n=arr.length;
    let ans = Array(n).fill(0);
    stack.push(n-1)

    for (let i = arr.length - 2; i >= 0; i--) {
        while(stack.length!=0){
            if(arr[i]>=arr[stack[stack.length-1]]){
                stack.pop()
            }
            else{
                ans[i]=stack[stack.length-1]-i;
                break;
            }
        }
        if(!stack.length){
            ans[i]=0
        }
    }
    return ans
}