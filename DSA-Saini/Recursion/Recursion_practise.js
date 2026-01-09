//Sum of all  numbers in a n array
function sum(num, i) {
    if (i >= num.length) return 0;
    return num[i] + sum(num, i + 1);
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
//Sum of all Odd numbers in a n array
function sumOfOdd(num, i) {
    if (i >= num.length) return 0;
    let isOdd = num[i] % 2 != 0;
    return (isOdd ? num[i] : 0) + sumOfOdd(num, i + 1);
}
console.log(sumOfOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));

//Factorial using Recursion
function factorial(num) {
    if (num == 1) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(50));


