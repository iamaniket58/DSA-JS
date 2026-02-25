function DistinctSubstrings(s){
    let set=new Set();
    for(let i=0;i<s.length;i++){
        let prefix="";
        for(let j=i;j<s.length;j++){
            prefix+=s[j];
            set.add(prefix);
        }
    }
    let ans=[];
    for(let elem of set){
        ans.push(elem);
    }
    return ans;
}
function DistinctSubstrings(s){
    let set=new Set();
    for(let i=0;i<s.length;i++){
        let prefix="";
        for(let j=i;j<s.length;j++){
            prefix+=s[j];
            set.add(prefix);
        }
    }
    // return Array.from(set); //Both is correct
    return [...set];
}
console.log(DistinctSubstrings("abc"));