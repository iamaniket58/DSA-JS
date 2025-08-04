/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s=l.split("");
    for(let i=0;i<s.length;i=i+2*k){
        let left=i;
        //let right = Math.min(i + k - 1, s.length - 1);
        let right=i+k-1;
        while(left<right){
            let temp=s[left];
            s[left]=s[right];
            s[right]=temp;
            left++;
            right--;
        }
    }
    return s.join("");
};

console.log(reverseStr('abcdefg',2));