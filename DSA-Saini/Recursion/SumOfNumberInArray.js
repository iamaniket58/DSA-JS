//Dufferent ways of writing Array Sum
function ArraySum(arr) {
    if (arr.length == 0) return 0;
    return arr[0] + ArraySum(arr.slice(1))
}
console.log(ArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))

function ArraySum1(arr, i) {
    if (i == arr.length) return 0;
    return arr[i] + ArraySum1(arr, i + 1)
}
console.log(ArraySum1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 0))

let i = 0;
function ArraySum2(arr) {
    if (i == arr.length) return 0;
    return arr[i++] + ArraySum2(arr)
}
console.log(ArraySum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 0))

let arr = [3, 4, 3, 12, 1, 3, 232]
function SumOfArray(n) {
    if(n==0)return arr[0];
    return arr[n] + SumOfArray(n - 1);
}

console.log(SumOfArray(arr.length - 1));