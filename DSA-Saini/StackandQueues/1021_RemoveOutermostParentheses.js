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
            ans += (count > 1) ? s[i] : "";

        }
        else {

            ans += count > 1 ? s[i] : "";
            count--;
        }

    }
    return ans
}

//Revision
var removeOuterParentheses = function (s) {
    let stack = [];
    let str = "";
    let ans = "";
    for (st of s) {
        str += st;
        if (st == '(') {
            stack.push(st);
        }
        else {
            stack.pop();
            if (stack.length == 0) {
                ans += str.slice(1, str.length - 1);
                str = "";
            }
        }
    }
    return ans;
};

var removeOuterParentheses = function (s) {
    let stack = [];
    let ans = "";
    for (st of s) {
        if (st == '(') {
            stack.push(st);
            if (stack.length > 1) {
                ans += st;
            }
        }
        else {
            stack.pop();
            if (stack.length > 0) {
                ans += st;
            }
        }
    }
    return ans;
};

//Without using Stack
var removeOuterParentheses = function (s) {
    let ans = "";
    let count = 0;
    for (let st of s) {
        if (st == '(') {
            count++;
            if(count>1){
                ans+=st;
            }
        }
        else{
            count--;
            if(count>0){
                ans+=st;
            }
        }
    }
    return ans;
};  