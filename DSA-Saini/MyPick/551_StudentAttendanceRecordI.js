/**
 * @param {string} s
 * @return {boolean}
 */

//ChatGpt
var checkRecord = function (s) {
    let countA = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'A') {
            countA++
            if (countA > 1) return false;
        }
        if (i <= s.length - 3 && s[i] == 'L' && s[i + 1] == 'L' && s[i + 2] == 'L') return false
    }
    return true
}
//My Solution
var checkRecord = function (s) {
    let abCount = 0
    let islate = false;
    let lateConsecutiveCount = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'A') {
            abCount++
            islate = false;
            lateConsecutiveCount = 0
        }
        if (s[i] == 'L') {
            islate = true;
            lateConsecutiveCount++;
            if (lateConsecutiveCount >= 3) return false
        }
        else {
            islate = false;
            lateConsecutiveCount = 0
        }
    }
    return abCount < 2
};