var findWordsContaining = function(words, x) {
    let arr=[];
    for(let i=0;i<words.length;i++){
        let str=words[i];
        for(let j=0;j<str.length;j++){
            if(str[j]==x){
                arr.push(i);
                break;
            }
        }
    }
    return arr;
};

//Way2
var findWordsContaining = function(words, x) {
    let arr=[];
    for(let i=0;i<words.length;i++){
        if(words[i].includes(x)){
            arr.push(i)
        }
    }
    return arr;
};