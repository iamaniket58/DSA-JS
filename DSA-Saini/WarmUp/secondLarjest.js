function secondLargest(array){
    if (array.length<2) return "Array should have at least two numbers";
    let firstLargest=-Infinity;
    let secondLargest=-Infinity;
    for(let i=0;i<array.length;i++){
        if(array[i]>firstLargest){
            secondLargest=firstLargest;
            firstLargest=array[i];
        }
        else if(array[i]>secondLargest && array[i] != firstLargest){
            secondLargest=array[i];
        }
    }
    return secondLargest;
}
//console.log(secondLargest([5, 12, 8, 130, 44, 22, 43, 45, 45, 45, 47]))
console.log(secondLargest([5, 12, 8, 130, 44, 22, 43, 45, 45, 45, 47]))

