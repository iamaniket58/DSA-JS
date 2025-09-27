//using Recusrsion
var fib = function (n) {

    
    if(n==1 || n==0)return n
    return fib(n-1)+fib(n-2)
};
//Using Normal logic
var fib1= function (n) {
    let arr = [0, 1]
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]
}

// const currentTime = new Date().toLocaleTimeString(); // Formats the time based on the user's locale
console.log(new Date().toLocaleTimeString())
console.log(fib(70))
console.log(new Date().toLocaleTimeString())
