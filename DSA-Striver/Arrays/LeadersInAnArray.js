arr = [16, 17, 4, 3, 5, 2];
// Function to find the leaders in an array
function leaders(arr) {
    let result=[];
    let maxToRight=-Infinity;
    for(let i=arr.length-1;i>=0;i++){
        if(arr[i]>maxToRight){
            result.push(arr[i]);
            maxToRight=arr[i];
        }
    }
    return result.reverse();
}