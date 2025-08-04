
var peakIndexInMountainArray = function(arr) {
    let maxIndex=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>arr[maxIndex]){
            maxIndex=i
        }
    }
    return maxIndex;
};

//using Binary Search
var peakIndexInMountainArray = function(arr) {

    let l=0;
    let r=arr.length-1;
    while(l<r){
        let mid=l+Math.floor((r-l)/2);
        if(arr[mid+1]>arr[mid]){
            l=mid+1
        }
        else{
            r=mid
        }
    }
    return l}