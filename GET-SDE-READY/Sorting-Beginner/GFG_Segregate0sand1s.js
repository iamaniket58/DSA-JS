// User function Template for javascript

/**
 * @param {number[]} arr

*/
//Dutch National Flag Algo- Intution
class Solution {

    segregate0and1(arr) {

        // code here
        let start=0;
        let end=arr.length-1;
        while(start<=end){
            if(arr[start]==1){
                [arr[start],arr[end]]=[arr[end],arr[start]];
                end--
            }
            else{
                start++;
            }
        }
        
    }
}

//Working Code
class Solution {

    segregate0and1(arr) {

        // code here
        let n=arr.length;
        let count0s=0;
        for(let i=0;i<n;i++){
            if(arr[i]==0)count0s++;
        }
        let coins1s=n-count0s;
        for(let i=0;i<count0s;i++){
            arr[i]=0
        }
        for(let i=n-1;coins1s>0;i--){
            arr[i]=1;
            coins1s--;
        }
        return arr;
        
    }
}

//Not working
class Solution {

    segregate0and1(arr) {

        // code here
        let n=arr.length;
        let count=0;
        for(let i=0;i<n;i++){
            if(arr[i]==0)count++;
        }
        console.log(count);
        let ans=new Array(n).fill(1);
        console.log("Answer",ans);
        for(let i=0;i<count;i++){
            ans[i]=0
        }
        return ans;
    }
}
let obj=new Solution();
console.log(obj.segregate0and1([0, 0, 0, 1, 0]))
