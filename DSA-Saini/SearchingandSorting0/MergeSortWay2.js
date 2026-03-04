function MergeSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;
    let mid = left + Math.floor((right - left) / 2);
    MergeSort(arr, left, mid);
    MergeSort(arr, mid + 1, right);

    merge(arr, left, mid, right);
    return arr;
}

let merge = (arr, left, mid, right) => {
    let i = left;
    let j = mid + 1;
    let temp = [];
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i]);
            i++;
        }
        else {
            temp.push(arr[j]);
            j++;
        }
    }
    while (i <= mid) {
        temp.push(arr[i++]);
    }
    while (j <= right) {
        temp.push(arr[j++])
    }
    // let k = left; //Both are correct
    // for (let t of temp) {
    //     arr[k] = t;
    //     k++;
    // }
    for (let k = 0; k < temp.length; k++) {
        arr[left + k] = temp[k];
    }
}
console.log(MergeSort([8, 4, 5, 6, 9, 1, 3, 6]))
