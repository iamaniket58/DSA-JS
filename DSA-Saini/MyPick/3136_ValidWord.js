/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
    let vowelCount = 0
    let consonantCount = 0
    if(word.length<3)return false;
    for (let i = 0; i < word.length; i++) {
        if ((word[i] >= 'a' && word[i] <= 'z') || (word[i] >= 'A' && word[i] <= 'Z') || (word[i] >= 0 && word[i] <= 9)) {
            if ((word[i] >= 'a' && word[i] <= 'z')) {
                vowelCount++
            }
            else if((word[i] >= 'A' && word[i] <= 'Z')){
                consonantCount++
            }
            else if((word[i] >= 0 && word[i] <= 9)){
                consonantCount++
            }

        }
        else {
            return false;
        }
    }
    if(vowelCount>=1 && consonantCount>=1){
        return true
    }
    else{
        return false
    }

};
console.log(isValid("PATAdas"))