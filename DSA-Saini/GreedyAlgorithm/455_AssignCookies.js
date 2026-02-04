/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
//Optimized
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    let contentChildren = 0;
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            contentChildren++;
            i++;
        }
        j++;
    }
    return contentChildren;
};
//Similar Solution
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let j = 0;
    let contentChildren=0;
    while (j < s.length) {
        if(s[j]>=g[contentChildren]){
            contentChildren++;
        }
        j++;
    }
    return contentChildren;
};

//Bruite Force
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let contentChildren = 0;
    for (let i = 0; i < g.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (s[j] >= g[i]) {
                contentChildren++;
                s[j] = -Infinity
                break;
            }
        }
    }
    return contentChildren;
};

