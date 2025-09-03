/**
 * @param {number[]} nums
 * @return {number}
 */
//Bruite Force- Try from 1 to n- Check if the count in array is equal to i, then return
var specialArray = function (nums) {
    for (let i = 1; i <= nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] >= i) count++;
        }
        if (count == i) return i
    }
    return -1;
};
var specialArray = function (nums) {

    for (let i = 1; i <= nums.length; i++) {
        let count = nums.filter(x => x >= i).length;
        if (count == i) return i
    }
    return -1;
};