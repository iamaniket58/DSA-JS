/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    if (s.length != goal.length) return false;
    for (let i = 0; i < s.length; i++) {
        let k = s.slice(i + 1).concat(s.slice(0, i + 1))
        if (k == goal) return true
    }
    return false;
};

//Approach-2(double the s then goal will become substring)
var rotateString = function (s, goal) {
    if (s.length != goal.length) return false;
    let str = s + s;
    return str.includes(goal);
};

//Applied String Matching Algorithm- after doubling the first string
var rotateString = function (s, goal) {
    if (s.length != goal.length) return false;
    let str = s + s;
    for (let i = 0; i < str.length - goal.length + 1; i++) {
        let j = i + goal.length - 1;
        let sunstring = str.substring(i, j + 1);
        console.log(sunstring)
        if (sunstring == goal) return true
    }
    return false;
};

//Optimized- Applied String Matching Algorithm- after doubling the first string
var rotateString = function (s, goal) {
    if (s.length != goal.length) return false;
    let str = s + s;
    for (let i = 0; i < str.length - goal.length + 1; i++) {
        for(let j=0;j<goal.length;j++){
            if(str[j+i] != goal[j]){
                break;
            }
            if(j==goal.length-1){
                return true
            }
        }
    }
    return false;
};