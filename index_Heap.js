class MinHeap {

    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.heap.length === 0;
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

    enqueue(val) {
        if (val == undefined) return null;
        this.heap.push(val);
        this.heapifyUp();
    }
    heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parentIndex = this.getParentIndex(i);
            if (this.heap[i] < this.heap[parentIndex]) {
                this.swap(i, parentIndex);
                i = parentIndex;
            }
            else break;
        }
    }
    dequeue() {
        if (this.isEmpty()) return null;
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        let minValue = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return minValue;
    }
    heapifyDown() {
        let n = this.size();
        let i = 0;
        while (true) {
            let leftIndex = this.getLeftChildIndex(i);
            let rightIndex = this.getRightChildIndex(i);
            let minimum = i;
            if (leftIndex < n && this.heap[leftIndex] < this.heap[minimum]) {
                minimum = leftIndex;
            }
            if (rightIndex < n && this.heap[rightIndex] < this.heap[minimum]) {
                minimum = rightIndex;
            }

            if (i != minimum) {
                this.swap(i, minimum);
                i = minimum;
            }
            else break;
        }


    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }



}
class MaxHeap {

    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.heap.length === 0;
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

    enqueue(val) {
        if (val == undefined) return null;
        this.heap.push(val);
        this.heapifyUp();
    }
    heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parentIndex = this.getParentIndex(i);
            if (this.heap[i] > this.heap[parentIndex]) {
                this.swap(i, parentIndex);
                i = parentIndex;
            }
            else break;
        }
    }
    dequeue() {
        if (this.isEmpty()) return null;
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        let maxValue = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return maxValue;
    }
    heapifyDown() {
        let n = this.size();
        let i = 0;
        while (true) {
            let leftIndex = this.getLeftChildIndex(i);
            let rightIndex = this.getRightChildIndex(i);
            let maximum = i;
            if (leftIndex < n && this.heap[leftIndex] > this.heap[maximum]) {
                maximum = leftIndex;
            }
            if (rightIndex < n && this.heap[rightIndex] > this.heap[maximum]) {
                maximum = rightIndex;
            }

            if (i != maximum) {
                this.swap(i, maximum);
                i = maximum;
            }
            else break;
        }


    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }



}

// let minHeap = new MinHeap();
// minHeap.enqueue(8)
// minHeap.enqueue(12)
// minHeap.enqueue(7)
// minHeap.enqueue(19)
// minHeap.enqueue(4)
// minHeap.enqueue(6)
// minHeap.enqueue(2)
// console.log(minHeap.dequeue())
// console.log(minHeap.dequeue())
// console.log(minHeap.dequeue())
// console.log(minHeap.dequeue())
// console.log(minHeap.dequeue())
// console.log(minHeap.dequeue())
// console.log(minHeap.heap)

function HeapSort(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyDown(arr, i, n);
    }
    while (n > 0) {
        n--;
        [arr[0], arr[n]] = [arr[n], arr[0]];
        heapifyDown(arr, 0, n)

    }
    return arr;
}
let heapifyDown = (arr, i, n) => {
    while (true) {
        let leftIndex = 2 * i + 1;
        let rightIndex = 2 * i + 2;

        let max = i;
        if (leftIndex < n && arr[leftIndex] > arr[max]) {
            max = leftIndex;
        }
        if (rightIndex < n && arr[rightIndex] > arr[max]) {
            max = rightIndex;
        }
        if (i != max) {
            [arr[i], arr[max]] = [arr[max], arr[i]];
            i = max;
        }
        else break;
    }
}
HeapSort([4, 10, 3, 5, 1])

class MaxPriorityQueue {
    constructor() {
        this.queue = [];
    }

    front() {
        return this.isEmpty() ? null : this.queue[0];
    }

    isEmpty() {
        return this.queue.length == 0;
    }

    size() {
        return this.queue.length;
    }

    enqueue(value, priority) {
        if (value == undefined || priority == undefined) return null;
        this.queue.push({ value, priority });
        this.heapifyUp();
    }
    heapifyUp() {
        let i = this.size() - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.queue[i].priority > this.queue[parent].priority) {
                this.swap(i, parent);
                i = parent;
            }
            else break;
        }
    }

    dequeue() {
        if (this.isEmpty()) return null;
        if (this.size() == 1) return this.queue.pop();
        let max = this.queue[0];
        this.queue[0] = this.queue.pop();
        this.heapifyDown();
        return max;
    }
    heapifyDown() {
        let n = this.size();
        let i = 0;
        while (true) {
            let leftIndex = 2 * i + 1;
            let rightIndex = 2 * i + 2;
            let max = i;
            if (leftIndex < n && this.queue[leftIndex].priority > this.queue[max].priority) {
                max = leftIndex;
            }
            if (rightIndex < n && this.queue[rightIndex].priority > this.queue[max].priority) {
                max = rightIndex;
            }
            if (i != max) {
                this.swap(i, max);
                i = max;
            }
            else break;
        }
    }
    swap(i, j) {
        [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]];
    }
}
let maxPq=new MaxPriorityQueue();
maxPq.enqueue({value:apple,priority:"5"});