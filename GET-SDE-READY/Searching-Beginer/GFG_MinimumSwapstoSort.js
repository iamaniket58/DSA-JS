/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    minSwaps(arr) {
        let count=0;
        let arrInd=arr.map((val,index)=>[val,index])
        arrInd.sort((a,b)=>a[0]-b[0])
        for(let i=0;i<arrInd.length;i++){
            if(i!=arrInd[i]){
                count++
            }
        }
        return Math.floor(count/2)
        
    }
}
let obj=new Solution();
obj.minSwaps([2, 8, 5, 4])