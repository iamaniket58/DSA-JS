class MaxPriorityQueue {
    constructor() {
        this.heap = [];
    }
    getParentIndex(i) {
        if (i < 0 || i > this.heap.length) return null;
        return Math.floor((i - 1) / 2);
    }
    getleftChildIndex(i) {
        return 2 * i + 1;
    }
    getrightChildIndex(i) {
        return 2 * i + 2;
    }
    enqueue(value, priority) {
        this.heap.push({ value, priority });
        this.heapifyUp(this.heap.length - 1);
    }
    heapifyUp(i) {
        while (i > 0) {
            let parentIndex = this.getParentIndex(i);
            if (this.heap[i].priority > this.heap[parentIndex].priority) {
                this.swap(i, parentIndex);
                i = parentIndex;
            }
            else {
                break;
            }
        }
    }
    dequeue() {
        if (this.heap.length == 0) return null;
        if (this.heap.length == 1) return this.heap.pop();
        let max = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown(0, this.heap.length);
        return max;
    }
    heapifyDown(i, n) {
        while (true) {
            let left = this.getleftChildIndex(i);
            let right = this.getrightChildIndex(i);
            let largest = i;
            if (left < n && this.heap[left].priority > this.heap[largest].priority) {
                largest = left;
            }
            if (right < n && this.heap[right].priority > this.heap[largest].priority) {
                largest = right;
            }
            if (i != largest) {
                this.swap(i, largest);
                i = largest;
            }
            else break;
        }
    }
    front() {
        if (this.heap.length == 0) return null;
        return this.heap[0].value; //.priority
    }

    size() {
        return this.heap.length;
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}