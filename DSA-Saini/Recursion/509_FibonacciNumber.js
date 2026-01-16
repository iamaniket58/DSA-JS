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

//Using DP
let map = {};
var fib = function (n) {
    if (n <= 1) {
        map[n] = n
        return n;
    }
    let x = map[n - 1] == undefined ? fib(n - 1) : map[n - 1];
    let y = map[n - 2] == undefined ? fib(n - 2) : map[n - 2];
    map[n] = x + y
    return map[n];
};

let store = {};
var fib = function (n) {
    if (n <= 1)  return n;
    if(!store[n]){
        store[n]=fib(n - 1)+fib(n-2);
    }
    return store[n];
};

//using Variable a and b
var fib2=function(n){
    if(n==0 || n==1)return n
    let a=0;
    let b=1;
    for(let i=0;i<n-1;i++){
        let c=a+b;
        a=b;
        b=c;
    }
    return b
}

//using only 2 variable- no 3rd variable
var fib3=function(n){
    if(n==0 || n==1)return n
    let a=0;
    let b=1;
    for(let i=0;i<n-1;i++){
       b=a+b;
       a=b-a
    }
    return b
}
