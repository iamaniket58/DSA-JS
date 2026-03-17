/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
//Try to understand both the boundry condition, Its  🚀🚀🚀🚀
var reverseStr1 = function (l, k) {
    s = l.split("");
    for (let i = 0; i < s.length; i = i + 2 * k) {
        let left = i;
        //let right = Math.min(i + k - 1, s.length - 1);
        let right = i + k - 1;
        while (left < right) {
            let temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        }
    }
    return s.join("");
};

//Revision
var reverseStr = function (s, k) {
    let arr = s.split("");
    let x = 0;
    let i = 0;
    while (i < arr.length) {
        reverse(arr, i, k + i - 1);
        x += 2;
        i = x * k;
    }
    return arr.join("");
};
let reverse = (arr, start, end) => {
    if (end > arr.length - 1) end = arr.length - 1; // Boundry condition Fix
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        end--;
        start++;
    }
}
//Sir's Solution- My Solution is better
var reverseStr = function(s, k) {
    s = s.split("");

    for(let x = 0; x < s.length; x = x + (2*k)){
        let n = k;
        let mid = Math.floor(n/2);
        for(let i = 0; i < mid; i++) {
            let temp = s[x+i];
            s[x+i] = s[x+n-i-1];
            s[x+n-i-1] = temp;
        }
    }

    return s.join("");
};
// console.log(reverseStr('abcdefg', 2));
console.log(reverseStr1('abcdefgh', 3));