/**
 * @param {number} n
 * @return {number}
 */
//Revision-Best
var trailingZeroes = function (n) {
    let ans = 0;
    while (n >= 5) {
        let num = Math.floor(n / 5);
        ans += num;
        n = num
    }
    return ans;
};
var trailingZeroes = function (n) {
    let ans = 0;
    while (n != 0) {
        let num = Math.floor(n / 5);
        ans += num;
        n = num
    }
    return ans;
};

var trailingZeroes = function (n) {
    let deno = 5;          // Start with the first factor of 5 
    let ans = 0;

    // Keep dividing n by powers of 5 until n < current power of 5
    while (n >= deno) {
        ans += Math.floor(n / deno);
        deno = deno * 5;
    }
    return ans;

};

//Optimized
var trailingZeroes = function (n) {
    //    return Math.floor(n/5)
    let count = 0;
    while (n >= 5) {
        n = Math.floor(n / 5)
        count += n
    }
    return count;
};




//It is not passing all the test cases because of complexity
var trailingZeroes = function (n) {
    if (n == 0) return 0;
    var factorial = (n) => {
        if (n == 1) return 1
        return n * factorial(n - 1)
    }
    let fact = factorial(n)
    console.log(fact)
    let count = 0
    //let str=fact.toString();
    // for(let i=str.length-1;i>=0;i--){
    //     if(str[i]=='0'){
    //         count++
    //     }
    //     else{
    //         break;
    //     }
    // }
    while (fact > 0) {
        if (fact % 10 == 0) {
            count++;
            fact = Math.floor(fact / 10)
        }
        else {
            break;
        }
    }
    return count
};


