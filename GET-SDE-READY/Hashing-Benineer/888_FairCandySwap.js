/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
//My Solution
var fairCandySwap = function (aliceSizes, bobSizes) {
    let aliceSum = 0;
    let bobSum = 0;
    for (let al of aliceSizes) {
        aliceSum += al;
    }
    for (let bo of bobSizes) {
        bobSum += bo;
    }
    let mid=Math.floor((aliceSum+bobSum)/2);
    for(let al of aliceSizes){
        let find=mid-(aliceSum-al);
        if(bobSizes.includes(find)){
            return [al,find];
        }
    }
};
//Use Set for fast Search
var fairCandySwap = function (aliceSizes, bobSizes) {
    let aliceSum = 0;
    let bobSum = 0;
    for (let al of aliceSizes) {
        aliceSum += al;
    }
    for (let bo of bobSizes) {
        bobSum += bo;
    }
    let mid=Math.floor((aliceSum+bobSum)/2);
    let bobSet=new Set(bobSizes)
    for(let al of aliceSizes){
        let find=mid-(aliceSum-al);
        if(bobSet.has(find)){
            return [al,find];
        }
    }
};

//Chat GPT

// After swapping:
// sumA - x + y = sumB - y + x

// Rearrange:
// 2x - 2y = sumA - sumB
// x - y = (sumA - sumB) / 2

// So:
// y = x - diff
// where diff = (sumA - sumB) / 2
var fairCandySwap = function(aliceSizes, bobSizes) {
    let sumA = aliceSizes.reduce((a, b) => a + b, 0);
    let sumB = bobSizes.reduce((a, b) => a + b, 0);

    let diff = (sumA - sumB) / 2;

    let bobSet = new Set(bobSizes);

    for (let x of aliceSizes) {
        let y = x - diff;
        if (bobSet.has(y)) {
            return [x, y];
        }
    }
};


