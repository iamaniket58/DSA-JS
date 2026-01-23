//This was Created on 23-01-26
class MinPriorityQueue {
    constructor() {
        this.heap = [];
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
    enqueue(value, priority) {
        this.heap.push({ value, priority });
        this.heapifyUp();
    }
    heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parentIndex = this.getParentIndex(i);
            if (this.heap[parentIndex].priority > this.heap[i].priority) {
                this.swap(i, parentIndex);
                i = parentIndex;
            }
            else {
                break;
            }
        }
    }
    dequeue() {
        if (this.heap.length <= 0) return null;
        if (this.heap.length == 1) return this.heap.pop();
        let min = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return min;
    }
    heapifyDown() {
        let i = 0;
        while (true) {
            let n = this.heap.length;
            let leftIndex = this.getLeftChildIndex(i);
            let rightIndex = this.getRightChildIndex(i);
            let smallest = i;
            if (leftIndex < n && this.heap[leftIndex].priority < this.heap[smallest].priority) {
                smallest = leftIndex;
            }
            if (rightIndex < n && this.heap[rightIndex].priority < this.heap[smallest].priority) {
                smallest = rightIndex;
            }
            if (i != smallest) {
                this.swap(i, smallest);
                i = smallest;
            }
            else {
                break;
            }
        }
    }
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    front() {
        if (this.heap.length <= 0) return null;
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.heap.length == 0;
    }
}