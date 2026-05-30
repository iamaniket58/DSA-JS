/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] == "+" || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/') {
            let s1 = stack.pop();
            let s2 = stack.pop();
            let res;
            if (tokens[i] == "+") res = s1 + s2;
            if (tokens[i] == "-") res = s2 - s1;
            if (tokens[i] == "*") res = s2 * s1;
            if (tokens[i] == "/") {
                res = s2 / s1;
                res = res > 0 ? Math.floor(res) : Math.ceil(res)
            }
            stack.push(res)

        }
        else {
            stack.push(Number(tokens[i]))
        }

    }
    return stack.pop()
};

//using Switch

var evalRPN = function (tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] == "+" || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/') {
            let s1 = stack.pop();
            let s2 = stack.pop();
            let res;
            switch (tokens[i]) {
                case "+": res = s2 + s1; break;
                case "-": res = s2 - s1; break;
                case "*": res = s2 * s1; break;
                case "/":
                    res = s2 / s1;
                    res = res > 0 ? Math.floor(res) : Math.ceil(res)
                    break;
            }
            stack.push(res)

        }
        else {
            stack.push(Number(tokens[i]))
        }

    }
    return stack.pop();
};

//using Map

var evalRPN = function (tokens) {
    let stack = [];
    let map = {
        '+': (a, b) => (b + a),
        '-': (a, b) => (b - a),
        '*': (a, b) => (a * b),
        '/': (a, b) => (b / a)
    };

    for (let i = 0; i < tokens.length; i++) {
        if (map[tokens[i]]) {
            let s1 = stack.pop();
            let s2 = stack.pop();
            let res = map[tokens[i]](s1, s2)

            stack.push(Math.trunc(res))

        }
        else {
            stack.push(Number(tokens[i]))
        }

    }
    return stack.pop();
};

//Uisng Eval
var evalRPN = function (tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/') {
            let value2 = +stack.pop();
            let value1 = +stack.pop();
            let ans = eval(`${value1}${tokens[i]} ${value2}`);
            ans = Math.trunc(ans)
            stack.push(ans);
        }
        else {
            stack.push(tokens[i]);
        }
    }
    console.log(stack);
    return +stack.pop();
};

//Revision
var evalRPN = function (tokens) {
    let stack = [];
    let set = new Set(['+', '-', '*', '/']);
    for (let tok of tokens) {
        if (!set.has(tok)) {
            stack.push(+tok);
        }
        else {
            let elem2 = stack.pop();
            let elem1 = stack.pop();
            let ans;
            switch (tok) {
                case '+':
                    ans = elem1 + elem2;
                    break;
                case '-':
                    ans = elem1 - elem2;
                    break;
                case '*':
                    ans = elem1 * elem2;
                    break;
                case '/':
                    ans = Math.trunc(elem1 / elem2);
                    break;
            }
            stack.push(ans);
        }
    }
    return stack.pop();
};