/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let start=[0,0];
    for(s of moves){
        if(s=="U")start[1]++;
        else if (s=="D")start[1]--;
        else if(s=="L")start[0]--;
        else start[0]++;
    }
    return start[0]==0 && start[1]==0;
};

var judgeCircle = function (moves) {
    let x = y = 0;
    for (s of moves) {
        if (s == "U") y++;
        else if (s == "D") y--;
        else if (s == "L") x--;
        else x++;
    }
    return x==y &&y==0;
};