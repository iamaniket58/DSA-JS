
let arr = [3, 4, 3, 12, 1, 3, 232,233]
function SumOfArray(n) {
    if (n == 0) return arr[0];
    return arr[n] + SumOfArray(n - 1);
}

console.log(SumOfArray(arr.length - 1));

//Sum of odd numbers in an array
// let arr = [3, 4, 3, 12, 1, 3, 232]
function SumOfOddInArray(n) {
    if (n == -1) return 0;
    return arr[n] % 2 == 1 ? arr[n] + SumOfOddInArray(n - 1) : 0 + SumOfOddInArray(n - 1);
}

console.log(SumOfOddInArray(arr.length - 1));

function SumOfOddInArray1(n) {
    if (n == -1) return 0;
    return (arr[n] % 2 == 1 ? arr[n] : 0) + SumOfOddInArray1(n - 1);
}

console.log(SumOfOddInArray1(arr.length - 1));