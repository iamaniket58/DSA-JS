class MinHeap {
    constructor() {
        this.heap = []
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
            if (this.heap[i] < this.heap[parentIndex]) {
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
        let min = this.heap[0];
        //swap
        let temp = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap[this.heap.length - 1] = temp;
        this.heap.pop();
        this.heapifyDown(0);
        return min

    }
    heapifyDown(i) {
        let n = this.heap.length;
        while (true) {

            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;
            if (left < n && this.heap[left] < this.heap[smallest]) {
                smallest = left
            }
            if (right < n && this.heap[right] < this.heap[smallest]) {
                smallest = right
            }
            if(i !=smallest){
                //swap
                let temp=this.heap[i];
                this.heap[i]=this.heap[smallest];
                this.heap[smallest]=temp;
                i=smallest
            }
            else{
                break;
            }
        }
    }
}