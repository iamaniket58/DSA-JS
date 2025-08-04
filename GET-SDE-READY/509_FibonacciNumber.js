/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let arr=[0,1]
    for(let i=2;i<=n;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr[n]
};

//using Recusrsion
var fib1 = function(n) {
 
    if(n==1 || n==0)return n
    return fib1(n-1)+fib(n-2)
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
