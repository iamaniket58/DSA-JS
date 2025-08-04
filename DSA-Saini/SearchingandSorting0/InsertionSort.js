function InsertionSort(array){
    for(let i=1;i<array.length;i++){
        let cu=array[i];
        let prev=i-1;
        while(prev>=0){
            if(cu<array[prev]){
                array[prev+1]=array[prev];
                prev-=1
            }
            else{
                break;
            }
        }
        array[prev+1]=cu;
    }
    return array
}
// console.log(InsertionSort([7,4,3,5,1,2]))

function InsertionSort1(arr){
    for(let i=1;i<arr.length;i++){
        let curr=arr[i];
        let prev=i-1;
        //Keep moving the prev greater element to the next
        while(prev>=0 && curr<arr[prev]){
            arr[prev+1]=arr[prev];
            prev--
        }
        //Set Current element
        arr[prev+1]=curr

    }
    return arr
}
console.log(InsertionSort1([7,4,3,5,1,2]))