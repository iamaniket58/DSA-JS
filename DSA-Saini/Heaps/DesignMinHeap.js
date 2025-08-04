class minHeap {
    constructor() {
        //this.heap = [5, 10, 20, 30]
        this.heap = [1, 3, 2, 5, 6, 10, 9, 8, 22]
    }
    getLeftChildIndex(i) {

        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2)
    }

    insert(val) {
        this.heap.push(val);
        let lastIndex = this.heap.length - 1
        this.heapifyUp(lastIndex)


    }
    heapifyUp(i) {
        while (i > 0) {
            let parentIndex = this.getParentIndex(i);
            if (this.heap[i] < this.heap[parentIndex]) {
                //swap
                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]]

            }
            else {
                break;
            }
            i = parentIndex
        }
    }
    extract() {
        let lastIndex = this.heap.length - 1

        //swap
        // [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];
        let temp = this.heap[0];
        this.heap[0] = this.heap[lastIndex];
        this.heap[lastIndex] = temp

        let firstElement = this.heap.pop()

        this.heapifyDown(0)
        return firstElement
    }
    //My method
    heapifyDown(i) {
        while (true) {
            let leftChild = this.getLeftChildIndex(i);
            let rightChild = this.getRightChildIndex(i);
            if (leftChild < this.heap.length) {
                let smallest = Math.min(this.heap[leftChild], this.heap[rightChild], this.heap[i]);
                let smallestIndex = this.heap.indexOf(smallest);//it will return first matching that can be bug
                if (i != smallestIndex) {
                    //swap
                    [this.heap[i], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[i]]
                    i = smallestIndex
                }
                else {
                    break;
                }
            }
            else {
                break;
            }


        }


    }
    //Modified--This is best
    heapifyDown1(i) {
        while (true) {
            let leftChild = this.getLeftChildIndex(i);
            let rightChild = this.getRightChildIndex(i);
            let smallest = i;
            if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild
            }
            if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild
            }
            if (smallest != i) {
                let temp = this.heap[smallest]
                this.heap[smallest] = this.heap[i]
                this.heap[i] = temp;
                i = smallest
            }
            else {
                break;
            }
        }

    }
    //Recursive
    heapifyDown2(i) {
        let leftChild = this.getLeftChildIndex(i);
        if (leftChild >= this.heap.length) {
            return;
        }
        let rightChild = this.getRightChildIndex(i);
        let smallest = i;
        if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
            smallest = leftChild
        }
        if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
            smallest = rightChild
        }
        if (smallest != i) {
            let temp = this.heap[smallest]
            this.heap[smallest] = this.heap[i]
            this.heap[i] = temp;
            i = smallest
            this.heapifyDown2(i)
        }
    }
    peek() {
        if (this.heap.length <= 0) return null
        return this.heap[0]
    }

    //My Method- Intution
    heapifyDown3(i){
        let n=this.heap.length;
        while(true){
            let left=2*i+1;
            let right=2*i+2;
            
            if(left<n && this.heap[left]<this.heap[i] && (right>=n || this.heap[left]<this.heap[right])){
                let temp=this.heap[i];
                this.heap[i]=this.heap[left];
                this.heap[left]=temp;
                i=left
            }
            else if(right<n && this.heap[right]<this.heap[i] && this.heap[right]<this.heap[left]){
                let temp=this.heap[i];
                this.heap[i]=this.heap[right];
                this.heap[right]=temp;
                i=right;
            }
            else{
                break;
            }
        }
    }


}
let obj = new minHeap();
// obj.insert(1)
// obj.insert(0)
obj.extract()
console.log(obj.heap)