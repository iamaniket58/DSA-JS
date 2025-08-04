function ReverseInteger(n) {
    reverse = 0
    let isNegative = false
    if (n < 0) {
        n = Math.abs(n) // n=n*-1
        isNegative = true
    }
    while (n > 0) {
        reverse = reverse * 10 + (n % 10)
        n = parseInt(n / 10)
    }
    return !isNegative ? reverse : reverse * -1
}
//console.log(ReverseInteger(-183))

function ReverseIntegerDup(n) {
    let original=n
    let reverse = 0
    n = Math.abs(n) // n=n*-1
    while (n > 0) {
        reverse = reverse * 10 + (n % 10)
        n = parseInt(n / 10)
    }
    let limit=2**31
    if (reverse>limit-1 || reverse< -limit) return 0 
    return original >= 0 ? reverse : -reverse
}
console.log(ReverseIntegerDup(1534236469))