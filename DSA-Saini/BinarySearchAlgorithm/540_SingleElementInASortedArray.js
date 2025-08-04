/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    if (nums.length == 1) return nums[0]
    for (let i = 1; i < nums.length; i += 2) {
        if (nums[i] != nums[i - 1]) {
            return nums[i - 1]
        }
    }
    return nums[nums.length - 1]
};

//Usinng Binary Search
var singleNonDuplicate = function (nums) {

    //using Binary Search
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1]) {
            return nums[mid]
        }
        if (nums[mid] == nums[mid - 1]) { //Pair in Left
            let numberElemLeft = mid - 1 - l
            if (numberElemLeft % 2 == 1) { //Ans in Left
                r = mid - 2
            }
            else {  //Ans in right
                l = mid + 1
            }
        }
        else if (nums[mid] == nums[mid + 1]) { //Pair in Right
            let numberElemLeft = mid - l;
            if (numberElemLeft % 2 == 1) {
                r = mid - 1;
            }
            else {
                l = mid + 2
            }
        }
    }
    return nums[l];
}

//Hinadling with else condition-slight change
var singleNonDuplicate = function (nums) {

    //using Binary Search
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (nums[mid] == nums[mid - 1]) { //Pair in Left
            let numberElemLeft = mid - 1 - l
            if (numberElemLeft % 2 == 1) { //Ans in Left
                r = mid - 2
            }
            else {  //Ans in right
                l = mid + 1
            }
        }
        else if (nums[mid] == nums[mid + 1]) { //Pair in Right
            let numberElemLeft = mid - l;
            if (numberElemLeft % 2 == 1) {
                r = mid - 1;
            }
            else {
                l = mid + 2
            }
        }
        else{
            return nums[mid];
        }
    }
    return nums[l];
}