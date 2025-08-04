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
console.log(SelectionSort([7, 9, 8, 2, 5]));

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
console.log(SelectionSort1([7, 9, 8, 2, 5]));