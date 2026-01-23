class MaxHeap {
    constructor(arr = []) {
        this.heap = arr;
        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i); // Build Heap from an aray
        }
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    getLeftChildIndex(i) {
        return 2 * i + 1;
    }
    getRightChildIndex(i) {
        return 2 * i + 2;
    }
    insert(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }
    peek() {
        if (this.size() == 0) return null;
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.heap.length == 0;
    }
    heapifyUp(i) {
        while (i > 0) {
            let parentIndex = this.getParentIndex(i);
            if (this.heap[i] > this.heap[parentIndex]) {
                this.swap(i, parentIndex);
                i = parentIndex;
            }
            else break;
        }
    }
    extract() {
        if (this.heap.length < 1) return null;
        if (this.heap.length == 1) return this.heap.pop();
        this.swap(0, this.heap.length - 1);
        let extractedValue = this.heap.pop();
        this.heapifyDown(0);
        return extractedValue;
    }
    heapifyDown(i) {
        while (true) {
            let n = this.heap.length;
            let leftIndex = this.getLeftChildIndex(i);
            let rightIndex = this.getRightChildIndex(i);
            let largest = i;
            if (leftIndex < n && this.heap[leftIndex] > this.heap[largest]) {
                largest = leftIndex
            }
            if (rightIndex < n && this.heap[rightIndex] > this.heap[largest]) {
                largest = rightIndex
            }
            if (i != largest) {
                this.swap(i, largest);
                i = largest;
            }
            else {
                break;
            }
        }
    }
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}
// let mp = new MaxHeap([44, 33, 22, 30, 32, 21, 20, 28]);
let mp = new MaxHeap([20, 21, 30, 22, 28, 33, 44, 32]);
console.log("Build Heap=", mp.heap);
mp.insert(50);
console.log(mp.heap);
console.log(mp.extract());
console.log(mp.extract());
console.log(mp.extract());
console.log(mp.extract());
console.log(mp.extract());
console.log(mp.extract());
console.log(mp.extract());
console.log(mp.extract());
console.log(mp.extract());
console.log(mp.extract());
console.log(mp.extract());

console.log(mp.heap);
