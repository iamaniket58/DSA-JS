var twoSum = function (numbers, target) {
    let l = 0;
    let r = numbers.length - 1;
    while (l < r) {
        let sum = numbers[l] + numbers[r];
        if (sum == target) return [l + 1, r + 1];
        else if (target < sum) {
            r--;
        }
        else {
            l++
        }
    }
}
//Not S-O(1)
var twoSum = function (numbers, target) {
    let map = {};
    for (let i = 0; i < numbers.length; i++) {
        let s = target - numbers[i];
        if (map[numbers[i]] != undefined) {
            return [numbers[i] + 1, i + 1]
        }
        map[numbers[i]] = i
    }
};
console.log(twoSum([2, 7, 11, 15], 9))