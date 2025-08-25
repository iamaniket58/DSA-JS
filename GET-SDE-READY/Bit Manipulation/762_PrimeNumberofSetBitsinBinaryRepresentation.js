/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
    let primeCount = 0
    for (let num = left; num <= right; num++) {
        let setCount = 0;
        for (let i = 0; i < 32; i++) {
            if (num & (1 << i)) setCount++
        }
        if (isPrime(setCount)) primeCount++;
    }
    return primeCount;
};
var isPrime = (num) => {
    if(num==1)return false;
    let half=Math.floor(num/2)
    for (let i = 2; i <= half; i++) {
        if (num % i == 0) return false
    }
    return true;
}