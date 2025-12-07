/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    function getNext(num) {
        let sum = 0;
        while (num > 0) {
            let ld = num % 10;
            sum += ld * ld;
            num = Math.floor(num / 10)
        }
        return sum;
    }
    let seen=new Set();
    while(n!=1 && !seen.has(n)){
        seen.add(n);
        n=getNext(n)
    }
    return n==1;
};