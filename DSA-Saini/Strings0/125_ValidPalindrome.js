/**
 * @param {string} s
 * @return {boolean}
 */
//Revision- My Solution
var isPalindrome = function (s) {
    let str = "";
    for (let i = 0; i < s.length; i++) {
        if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= '0' && s[i] <= '9')) {
            str += s[i].toLowerCase()
        }
    }
    console.log(str);
    let n = str.length;
    let halfLength = Math.floor(n / 2);
    for (let i = 0; i < halfLength; i++) {
        if (str[i] != str[n - 1 - i]) return false;
    }
    return true;
};
//Creating reverse string in a single pass
var isPalindrome = function (s) {
    let str = "";
    let rev = "";
    for (let i = 0; i < s.length; i++) {
        // if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= '0' && s[i] <= '9')) {
        if (s[i].match(/[a-zA-Z0-9]/)) {
            let val = s[i].toLowerCase();
            str += val;
            rev = val + rev
        }
    }
    return str == rev;
};

var isPalindrome = function (s) {
    //Make String LowerCase, Remove non alphaNumeric character, and check palindrome
    s = s.toLowerCase();
    let filteredstring = '';
    //let reverse='';
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/)) {   //if((s[i].charCodeAt()>='a' && s[i].charCodeAt()<='a')||(s[i].charCodeAt()>=0 && s[i].charCodeAt()<=))
            filteredstring += s[i];
            //  reverse=s[i]+reverse
        }
    }
    //return  filteredstring==reverse
    let left = 0;
    let right = filteredstring.length - 1;
    while (left < right) {
        if (filteredstring[left] != filteredstring[right]) {
            return false
        }
        left++;
        right--;
    }
    return true;   //T-O(n) , S=O(n)
};
//console.log(isPalindrome('race a car'))



//Sirs Method- Using Less Space
var isPalindrome2 = function (s) {
    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (!s[left].match(/[a-z0-9]/)) {
            left++;
        }
        else if (!s[right].match(/[a-z0-9]/)) {
            right--;
        }
        else if (s[left] == s[right]) {
            left++;
            right--;
        }
        else {               //s[left]!=s[right]
            return false;
        }
    }
    return true;
};
//Using less space
var isPalindrome1 = function (s) {
    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (!s[left].match(/[a-z0-9]/)) {
            left++;
            continue;
        }
        if (!s[right].match(/[a-z0-9]/)) {
            right--;
            continue;
        }
        if (s[left] != s[right]) {
            return false;
        }
        left++;
        right--
    }
    return true;
};
//-------------------------------------------------------------------------
//Revision- Way1
var isPalindrome = function (s) {
    let str = "";
    for (let i = 0; i < s.length; i++) {
        let charCode = s[i].charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            str += String.fromCharCode(charCode + 32);
        }
        else if (charCode >= 97 && charCode <= 122) {
            str += s[i];
        }
        else if (s[i] >= '0' && s[i] <= '9') {
            str += s[i];
        }
    }
    let n = str.length;
    let mid = Math.floor(n / 2);
    for (let i = 0; i < mid; i++) {
        if (str[i] != str[n - 1 - i]) return false;
    }
    return true;
};

//Sir's Way- Way2
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let str = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/)) {
            str += s[i]
        }
    }
    let n = str.length;
    let mid = Math.floor(n / 2);
    for (let i = 0; i < mid; i++) {
        if (str[i] != str[n - 1 - i]) return false;
    }
    return true;
};
//Way2-a
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let str = "";
    let rev = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/)) {
            str += s[i];
            rev = s[i] + rev
        }
    }
    return str == rev;
};

//Using 2 Pointers- No Extra Space
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (!isAlphaNum(s[left])) left++;
        else if (!isAlphaNum(s[right])) right--;
        else if (s[left] == s[right]) {
            left++;
            right--;
        }
        else {
            return false;
        }
    }
    return true;
};
function isAlphaNum(char) {
    return /^[a-z0-9]$/i.test(char);
}

//Best
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (left < right && !isAlphaNum(s[left])) {
            left++;
        }
        while (left < right && !isAlphaNum(s[right])) {
            right--;
        }
        if (s[left] == s[right]) {
            left++;
            right--;
        }
        else {
            return false;
        }
    }
    return true;
};
function isAlphaNum(char) {
    return /^[a-z0-9]$/i.test(char);
}

//--------------------------------Revision-------------------------------------
var isPalindrome = function (s) {
    let array = [];
    for (let st of s) {
        if ((st >= 'a' && st <= 'z') || (st >= 'A' && st <= 'Z') || (st >= "0" && st <= "9")) {
            array.push(st.toLowerCase())
        }
    }
    let l = 0;
    let r = array.length - 1;
    while (l < r) {
        if (array[l] != array[r]) return false;
        l++;
        r--;
    }
    return true;
};
var isPalindrome = function (s) {
    let array = [];
    for (let st of s) {
        let charCode = st.charCodeAt(0)
        console.log(charCode)
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (st >= "0" && st <= "9")) {
            array.push(st.toLowerCase())
        }
    }
    console.log(array)
    let l = 0;
    let r = array.length - 1;
    while (l < r) {
        if (array[l] != array[r]) return false;
        l++;
        r--;
    }
    return true;
};

var isPalindrome = function (s) {
    let array = [];
    s = s.toLowerCase();
    for (let st of s) {
        if (st.match(/[a-z0-9]/)) array.push(st)
    }
    console.log(array)
    let l = 0;
    let r = array.length - 1;
    while (l < r) {
        if (array[l] != array[r]) return false;
        l++;
        r--;
    }
    return true;
};

//Using 1 pass Solution
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let array = s.split("");
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        while (left < right && (!array[left].match(/[a-z0-9]/))) {
            left++;
        }
        while (left < right && (!array[right].match(/[a-z0-9]/))) {
            right--;
        }

        if (array[left] != array[right]) return false;
        left++;
        right--;

    }
    return true;
};

//Sir's Solution
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let array = s.split("");
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        if (!array[left].match(/[a-z0-9]/)) {
            left++;
        }
        else if (!array[right].match(/[a-z0-9]/)) {
            right--;
        }
        else if (array[left] != array[right]) {
            return false;
        }
        else {
            left++;
            right--;
        }


    }
    return true;
};
console.log(isPalindrome2('A man, a plan, a canal: Panama'))