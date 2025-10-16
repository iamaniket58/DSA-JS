var balancedStringSplit = function (s) {
    let r = 0;
    let l = 0;
    let balanced = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'R') {
            r += 1;
        }
        else if (s[i] == 'L') {
            l += 1
        }
        if (r == l && r != 0) {
            balanced += 1;
            r = 0;
            l = 0;
        }
    }
    return balanced
};

//Optimised Solution- using 1 variable
var balancedStringSplit = function (s) {
    let temp=0;
    let count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=='R')temp+=1;
        else temp-=1
        if(temp==0){
            count++;
        }
    }
}
console.log(balancedStringSplit('RLRRLLRLRL'));
