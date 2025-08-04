//using Recusrsion
var fib = function (n) {

    
    if(n==1 || n==0)return n
    return fib(n-1)+fib(n-2)
};
//Using Normal logic
var fib = function (n) {
    let arr = [0, 1]
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]
}