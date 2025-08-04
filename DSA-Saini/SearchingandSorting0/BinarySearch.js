function BinarySearch(array,target){
    let left=0;
    let right=array.length-1;
    while(right>=left){
        let mid=Math.floor((i+j)/2);
        if(array[mid]>target){
            right=mid-1;
        }
        else if(array[mid]<target){
            left=mid+1;
        }
        else{
            return mid
        }
    }
}
BinarySearch([2,4,6,7,0,1],0)