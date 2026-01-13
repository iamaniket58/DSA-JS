/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let count = 0;
    if (ruleKey == 'color') {
        for (let item of items) {
            if (item[1] == ruleValue) count++;
        }
    }
    else if (ruleKey == 'type') {
        for (let item of items) {
            if (item[0] == ruleValue) count++;
        }
    }
    else if (ruleKey == 'name') {
        for (let item of items) {
            if (item[2] == ruleValue) count++;
        }
    }
    return count;

};

var countMatches = function (items, ruleKey, ruleValue) {
    let KeyMap = {
        'type': 0,
        'color': 1,
        'name': 2
    }
    let index=KeyMap[ruleKey];

    let count=0;
    for(let item of items){
        if(item[index]==ruleValue)count++
    }
    return count;
};