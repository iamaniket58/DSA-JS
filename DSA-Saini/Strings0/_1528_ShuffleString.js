/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let array=[];
    for(let i=0;i<indices.length;i++){
        array[indices[i]]=s[i]
    }
    return array.join('');
};