function BubbleSort(array){
    for(let i=0;i<array.length-1;i++){ //here in this line -1 is not mandatory
        for(let j=0;j<array.length-i-1;j++){
            if(array[j+1]<array[j]){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
    return array
}
console.log(BubbleSort([7,9,8,2,5]));


//Optimized version
function BubbleSort1(array){
    for(let i=0;i<array.length-1;i++){ //here in this line -1 is not mandatory
        let swapped=false;
        for(let j=0;j<array.length-i-1;j++){
            if(array[j+1]<array[j]){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                swapped=true
            }
        }
        if(!swapped)  break;
    }
    return array
}
console.log(BubbleSort1([7,9,8,2,5]));