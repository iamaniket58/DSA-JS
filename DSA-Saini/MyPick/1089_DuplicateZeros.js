/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let arrCopy = [...arr];
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arrCopy[x] == 0) {
            arr[i] = 0;
            if(i + 1 < arr.length) arr[i + 1]=0; //If here is edge case handling where last element of an array is 0
            i++;
        }
        else {
            arr[i] = arrCopy[x];
        }
        x++;
    }

};
console.log(duplicateZeros([1,0,2,3,0,4,5,0]))