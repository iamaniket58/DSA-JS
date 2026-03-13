function CountingSort(arr) {
    let max = -Infinity;
    for (let x of arr) {
        if (x > max) max = x;
    }

    let count = new Array(max + 1).fill(0);
    for (let x of arr) {
        count[x]++;
    }

    let index = 0;
    for (let i = 0; i < max + 1; i++) {
        while (count[i] > 0) {
            arr[index] = i;
            index++;
            count[i]--;
        }
    }
    return arr;
}
console.log(CountingSort([4, 2, 5, 3, 3, 2, 1, 4, 0]))