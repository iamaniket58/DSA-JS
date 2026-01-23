function HeapSort(arr) {
    let n = arr.length;
    //Create a max Heap Out of this array
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {

        heapifyDown(arr, i, n);
    }
    while (n > 1) {
        [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
        n -= 1;
        heapifyDown(arr, 0, n)
    }
    return arr;

}
function heapifyDown(arr, i, n) {
    while (true) {
        let leftIndex = 2 * i + 1;
        let rightIndex = 2 * i + 2;
        let largest = i;
        if (leftIndex < n && arr[leftIndex] > arr[largest]) {
            largest = leftIndex;
        }
        if (rightIndex < n && arr[rightIndex] > arr[largest]) {
            largest = rightIndex;
        }

        if (i != largest) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            i = largest;
        }
        else {
            break;
        }
    }

}
console.log(HeapSort([4, 10, 3, 5, 1]))