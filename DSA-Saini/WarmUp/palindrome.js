function palindrome(n){
    if(n<0) return false
    let x=n;
    let reverse=0;
    while(x>0){
        //let rem=x%10;
        reverse=reverse*10+(x%10);
        x=Math.floor(x/10)
    }
    console.log("n is"+n+" and x is="+x)
    return n===reverse
}
console.log(palindrome(23))