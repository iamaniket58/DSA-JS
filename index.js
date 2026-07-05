var minimumOperations = function (nums) {
    let min;
    let count = 0;
    while (nums.reduce((a, b) => a + b) != 0) {
        min = Infinity;
        count++;
        for (let num of nums) {
            if (num != 0) {
                min = Math.min(num, min);
            }
        }
        for (let i = 0; i < nums.length; i++) {
            nums[i] = nums[i] - min;
        }
    }
    return count;

};
console.log(minimumOperations([1,5,0,3,5]))