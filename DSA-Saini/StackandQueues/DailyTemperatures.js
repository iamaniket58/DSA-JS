/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
//Without using Stack
var dailyTemperatures = function(temperatures) {
    let arr=[];
    for(let i=0;i<temperatures.length;i++){
        let count=0;
        let found=false
        for(let j=i+1;j<temperatures.length;j++){
            count++;
            if(temperatures[j]>temperatures[i]){
                arr[i]=count;
                found=true;
                break;
            } 
        }
        if(!found)arr[i]=0
    }
    return arr
};