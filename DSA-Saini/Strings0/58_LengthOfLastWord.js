
//My Solution
//Iterate from last
var lengthOfLastWord = function (s) {
    let str = ''
    let x = false;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] != " ") {
            x = true;
            str += s[i];
        }
        else if (x && s[i] == " ") {
            break;
        }
    }
    return str.length
};

//Revision
var lengthOfLastWord = function (s) {
    let count = 0;
    let isCharSeen=false;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == " " && !isCharSeen) continue;

        if (s[i] != " ") {
            count++;
            isCharSeen=true
        }
        else break;

    }
    return count;
};

//using in-built Method
var lengthOfLastWord1 = function (s) {
    s = s.trim().split(" ");
    return x = s[s.length - 1].length
};

//Sirs Method
var lengthOfLastWord2 = function (s) {
    let n = s.length - 1
    while (n >= 0) {
        if (s[n] == " ") {
            n -= 1
        }
        else {
            break;
        }

    }
    console.log(n);
    let length = 0
    while (n >= 0) {
        if (s[n] != " ") {
            length += 1;
            n-=1
        }
        else {
            break;
        }
    }
    return length;
};

// Same code different way
var lengthOfLastWord3 = function (s) {
    let n = s.length - 1
    while (n >= 0) {
        if (s[n] != " ") break;
        n-=1;
    }
    let length = 0;
    while (n >= 0) {
        if (s[n] == " ") break;
        length+=1;
        n-=1;
    }
    return length;
};
console.log(lengthOfLastWord2('this is  awesome   '));
//--------------------------------------------------------------------------
//Video 2- 1 For looop Almost same as my solution
var lengthOfLastWordVideo2 = function (s) {
    let n = s.length - 1
    let count=0
    while (n >= 0) {
        if(s[n]!=" ")count+=1;
        else if(count>0)break;
        n-=1
    }
};

//using For Loop
var lengthOfLastWordVideo2 = function (s) {
    let count=0
   for(let i=s.length-1;i>=0;i--){
    if(s[i]!=" ")count++;
    else if (count>0)break;
   }
};


