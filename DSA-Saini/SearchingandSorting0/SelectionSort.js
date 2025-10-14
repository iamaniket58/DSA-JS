function SelectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) { //-1 is optional here
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        temp = array[min];
        array[min] = array[i];
        array[i] = temp
    }
    return array
}
// console.log(SelectionSort([7, 9, 8, 2, 5]));

function SelectionSort1(array) {
    for (let i = 0; i < array.length - 1; i++) { //-1 is optional here
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        if (min != i) {
            temp = array[min];
            array[min] = array[i];
            array[i] = temp
        }

    }
    return array
}
// console.log(SelectionSort1([7, 9, 8, 2, 5]));


//This is not selection Sort because it swaps aloy inside the Loop
function Sorting(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let min=i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                let temp=arr[min];
                arr[min]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
// console.log(Selection_Sort([7,2,5,4,1]));
console.log("Result",Selection_Sort([4, 2, 2, 1]));