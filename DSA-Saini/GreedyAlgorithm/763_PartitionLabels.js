/**
 * @param {string} s
 * @return {number[]}
 */

//This is my Solution- Mixed of GPT and Sir's
var partitionLabels = function (s) {
    let ans = [];

    //Update First and last index of each character
    let first = new Array(25).fill(-1);
    let last = new Array(25).fill(-1);
    for (let i = 0; i < s.length; i++) {
        let curr = s.charCodeAt(i) - 97;
        if (first[curr] < 0) {
            first[curr] = i
        }
        last[curr] = i
    }

    let start = end = 0;
    for (let i = 0; i < s.length; i++) {
        let curr = s.charCodeAt(i) - 97;
        end = Math.max(end, last[curr]);

        if (i == end) {
            ans.push(end - start + 1);
            start = i + 1;
        }
    }
    return ans;
};

//This is Best Solution
//If you see in MySolution- I'm never using first Array- so remove it ans use Object only for last
//GPT Solution
var partitionLabels = function (s) {
    let last = {};

    // Record last occurrence of each character
    for (let i = 0; i < s.length; i++) {
        last[s[i]] = i;
    }

    let result = [];
    let start = end = 0;
    // Traverse and cut partitions
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, last[s[i]]);
        if (i == end) {
            result.push(end - start + 1);
            start = i + 1;
        }
    }
    return result;
};

//Sir's Solution-- My Sol is Better
var partitionLabels = function (s) {
    let ans = [];

    //Update First and last index of each character
    let first = new Array(25).fill(-1);
    let last = new Array(25).fill(-1);
    for (let i = 0; i < s.length; i++) {
        let curr = s.charCodeAt(i) - 97;
        if (first[curr] < 0) {
            first[curr] = i
        }
        last[curr] = i
    }

    let start = end = 0;
    for (let i = 0; i < s.length; i++) {
        let curr = s.charCodeAt(i) - 97;
        if (first[curr] > end) {
            ans.push(end - start + 1);
            start = end = i;
        }
        end = Math.max(end, last[curr]);
    }
    //This handles last case
    if (end - start + 1 > 0) {
        ans.push(end - start + 1);
    }
    return ans;
};


