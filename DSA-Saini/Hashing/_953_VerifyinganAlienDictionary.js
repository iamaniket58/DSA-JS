/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let orderMap = {};
    for (let i = 0; i < order.length; i++) {
        orderMap[order[i]] = i;
    }

    for (let i = 1; i < words.length; i++) {
        let index = 0;
        while (true) {
            if (!words[i][index] && !words[i - 1][index]) break;

            if (!words[i][index]) return false;
            if (!words[i - 1][index] || orderMap[words[i][index]] > orderMap[words[i - 1][index]]) {
                break;
            }
            else if (orderMap[words[i][index]] == orderMap[words[i - 1][index]]) {
                index++;
            }
            else return false;
        }
    }
    return true;
};


//ChatGpt
var isAlienSorted = function (words, order) {
    let rank = {};
    for (let i = 0; i < order.length; i++) {
        rank[order[i]] = i;
    }

    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i];
        let word2 = words[i + 1];
        let minLength = Math.min(word1.length, word2.length);
        let foundDiff=false;
        for (let j = 0; j < minLength; j++) {
            if (word1[j] != word2[j]) {
                if (rank[word1[j]] > rank[word2[j]]) {
                    return false;
                }
                else {
                    foundDiff=true;
                    break;
                }

            }
        }
        if(!foundDiff && word2.length<word1.length)return false;
        
    }
    return true;
};