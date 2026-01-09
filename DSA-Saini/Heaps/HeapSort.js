let arr = [3, 8, 2, 10, 5, 6]
function heapSort(arr) {
    let n = arr.length;
    for (let i = Math.floor(n/2); i >= 0; i--) { //for (let i = n - 1; i >= 0; i--) {- This also is correct
        heapifyDown(arr, i, n);
    }
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapifyDown(arr, 0, i)
    }
    return arr;
}
function heapifyDown(arr, i, n) {
    // while (true) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let largest = i;
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }
        if (largest != i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapifyDown(arr, largest, n)
        }
    //     else {
    //         break;
    //     }
    // }

}
console.log(heapSort(arr))