function countDigits(n) {
    if(n==0) return 1;
    if(n<0) n=n*-1 //or Math.abs(n)
    let count = 0
    while (n > 0) {
        n = parseInt(n / 10) //Math.floor()
        count += 1
    }
    return count
}
console.log(countDigits(-259))

function countDigitsCG(n) {
    return Math.floor(Math.log10(n))+1
}
//console.log(countDigitsCG(999))