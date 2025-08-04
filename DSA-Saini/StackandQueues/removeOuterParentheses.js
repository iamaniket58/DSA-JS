/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let stack = [];
    let ans = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(s[i])
            n = stack.length;
            if (n > 1) {
                ans += s[i];
            }
        }
        else {
            n = stack.length;
            if (n > 1) {
                ans += s[i];
            }
            stack.pop()
        }

    }
    return ans
};

//Without using Stack
var removeOuterParentheses = function (s) {
    let ans = "";
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            if (count > 0) ans += s[i];
            count++
        }
        else {
            count--;
            if (count > 0) ans += s[i];
        }

    }
    return ans
}

//more Optimized
var removeOuterParentheses = function (s) {
    let ans = "";
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            count++
            ans+=(count>1)?s[i]:"";
            
        }
        else {
            
            ans+=count>1?s[i]:"";
            count--;
        }

    }
    return ans
}