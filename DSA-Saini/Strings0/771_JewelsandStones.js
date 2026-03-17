/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
//using Set-This is better solution
var numJewelsInStones = function(jewels, stones) {
    let count=0;
    let set=new Set(jewels);
    for(let s of stones){
        if(set.has(s))count++;
    }
    return count;
};
//using Set
var numJewelsInStones1 = function (jewels, stones) {
    let count=0;
    let set = new Set();
    for (let i = 0; i < jewels.length; i++) {
        set.add(jewels[i]);
    }
    for (let i = 0; i < stones.length; j++) {
        if(set.has(stones[i]))count++
    }
    return count;
};

//Using2 for loops
var numJewelsInStones = function(jewels, stones) {
    let count=0;
    for(let j of jewels){
        for(let s of stones){
            if(j==s)count++;
        }
    }
    return count;
};

//using 2 for loops
var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (jewels[j] == stones[i]) {
                count++;
                break;
            }
        }
    }
    return count;
};

//using includes
var numJewelsInStones2 = function (jewels, stones) {
    let count=0;
    for (let i = 0; i < stones.length; i++) {
        if(jewels.includes(stones[i]))count++
    }
    return count;
};