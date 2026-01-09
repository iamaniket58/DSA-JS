class MinHeap {
    constructor() {
        this.heap = [];
    }

    getleftChild(i) {
        return 2 * i + 1;
    }
    getrightChild(i) {
        return 2 * i + 2;
    }
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    insert(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }
    heapifyUp(i) {
        while (i > 0) {
            let parentIndex = this.getParentIndex(i);
            if (this.heap[i] < this.heap[parentIndex]) {
                //swap
                let temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[i];
                this.heap[i] = temp;
                i = parentIndex
            }
            else {
                break;
            }
        }
    }

    extract() {
        let n = this.heap.length;
        [this.heap[0], this.heap[n - 1]] = [this.heap[n - 1], this.heap[0]];
        let min = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }
    heapifyDown(i) {
        while (true) {
            let n = this.heap.length;
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;
            if (left < n && this.heap[left] < this.heap[i]) {
                smallest = left;
            }
            if (right < n && this.heap[right] < this.heap[i]) {
                smallest = right;
            }
            if (smallest != i) {
                [this.heap[i],this.heap[smallest]]=[this.heap[smallest],this.heap[i]];
                i=smallest
            }
            else {
                break;
            }
        }
    }
}
let hp = new MinHeap();
hp.insert(5);
hp.insert(20);
hp.insert(4);
hp.insert(10);
hp.insert(1);
hp.insert(0);
hp.extract();
console.log(hp.heap)