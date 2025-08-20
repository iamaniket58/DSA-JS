/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1
    }
    let result=-1
    for(let [key,value] of Object.entries(obj)){
        if(Number(key)==value){
            result=Math.max(result,value) 
        }
    }
    return result

};


var findLucky = function(arr) {
    let freq = new Array(501).fill(0); // fixed size, O(1) space

    // count frequencies
    for (let num of arr) {
        freq[num]++;
    }

    let result = -1;

    // check lucky numbers
    for (let i = 1; i <= 500; i++) {
        if (freq[i] === i) {
            result = Math.max(result, i);
        }
    }

    return result;
};
