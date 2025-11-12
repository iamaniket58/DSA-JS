/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let maxtillNow=-1;
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxtillNow)maxtillNow=arr[i];
        if(maxtillNow==i)count++;
    }
    return count;
};