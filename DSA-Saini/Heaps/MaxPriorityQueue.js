class MaxPriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(value, priority) {
        this.heap.push({ value, priority }); //this.heap.push({ value: "apple", priority: 5 }); -- Same as this
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[index].priority > this.heap[parentIndex].priority) {
                this.swap(index, parentIndex)
                index = parentIndex;
            }
            else {
                break;
            }
        }
    }

    dequeue() {
        if (this.heap.length == 0) return null;
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown();
        }
        return max
    }
    heapifyDown() {
        let index = 0;
        let length = this.heap.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = index;
            if (left < length && this.heap[left].priority > this.heap[largest].priority) {
                largest = left;
            }
            if (right < length && this.heap[right].priority > this.heap[largest].priority) {
                largest = right;
            }
            if (index != largest) {
                this.swap(index, largest);
                index = largest;
            }
            else {
                break;
            }

        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    front() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length == 0;
    }
}


const pq = new MaxPriorityQueue();

pq.enqueue("apple", 5);
pq.enqueue("banana", 2);
pq.enqueue("mango", 10);
pq.enqueue("orange", 8);
console.log(pq.heap);

console.log(pq.front()); // { value: 'mango', priority: 10 }
console.log(pq.dequeue()); // { value: 'mango', priority: 10 }
console.log(pq.front()); // { value: 'orange', priority: 8 }