class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        if (i <= 0 || i >= this.heap.length) return null
        return Math.floor((i - 1) / 2)
    }

    getLeftChild(i) {
        if (i < 0 || i >= this.heap.length) return null
        let leftChild = 2 * i + 1;
        return leftChild >= this.heap.length ? null : leftChild
    }

    getRightChild(i) {
        if (i < 0 || i >= this.heap.length) return null
        let rightChild = 2 * i + 2;
        return rightChild >= this.heap.length ? null : rightChild
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(i) {
        while (i > 0) {
            let parentIndex = Math.floor((i - 1) / 2);
            if (this.heap[i] > this.heap[parentIndex]) {
                let temp = this.heap[i];
                this.heap[i] = this.heap[parentIndex];
                this.heap[parentIndex] = temp;
                i = parentIndex;
            }
            else {
                break;
            }
        }

    }

    extract() {
        if(this.heap.length==0)return null;
        let max = this.heap[0];
        //swap
        let temp = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap[this.heap.length - 1] = temp;
        this.heap.pop();
        this.heapifyDown(0);
        return max

    }
    heapifyDown(i) {
        let n = this.heap.length;
        while (true) {

            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;
            if (left < n && this.heap[left] > this.heap[largest]) {
                largest = left
            }
            if (right < n && this.heap[right] > this.heap[largest]) {
                largest = right
            }
            if(i !=largest){
                //swap
                let temp=this.heap[i];
                this.heap[i]=this.heap[largest];
                this.heap[largest]=temp;
                i=largest
            }
            else{
                break;
            }
        }
    }
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(30);
maxHeap.insert(20);

console.log(maxHeap.heap); // [30, 20, 10, 5]

console.log(maxHeap.extract()); // 30
console.log(maxHeap.heap); // [20, 5, 10]
