/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
    let n = arr.length;
    let prefixmax = new Array(n);
    let suffixMin = new Array(n);

    prefixmax[0] = arr[0];
    for (let i = 1; i < n; i++) {
        prefixmax[i] = arr[i] > prefixmax[i - 1] ? arr[i] : prefixmax[i - 1];
    }
    suffixMin[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixMin[i] = arr[i] < suffixMin[i + 1] ? arr[i] : suffixMin[i + 1];
    }
    // console.log(prefixmax)
    // console.log(suffixMin)
    let chunk=1;
    for(let i=0;i<n;i++){
        if(prefixmax[i]<=suffixMin[i+1])chunk++;
    }
    return chunk;

};