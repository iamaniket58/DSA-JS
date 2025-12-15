class MinHeap {
    constructor() {
        this.heap = []
    }
    size() {
        return this.heap.length;
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

    push(val) {
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

    pop() {
        if (this.heap.length == 0) return null;
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
            if (i != smallest) {
                //swap
                let temp = this.heap[i];
                this.heap[i] = this.heap[smallest];
                this.heap[smallest] = temp;
                i = smallest
            }
            else {
                break;
            }
        }
    }
}
function Dijkstras(graph, src) {
    let n = graph.length;
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;

    let pq = new MinHeap();
    pq.push([src, 0]);

    while (pq.size()) { //pq.heap.length- Both are same
        let [node, nodeDist] = pq.pop();
        if (nodeDist > dist[node]) continue; //Stale Node

        for (let [neighbor, edgeWeight] of graph[node]) {
            let newDist = edgeWeight + dist[node];
            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                pq.push([neighbor, newDist]);
            }
        }
    }
    return dist;
}
let graph = [
    [[1, 2], [2, 4]],
    [[3, 7], [2, 1]],
    [[4, 3], [5, 1]],
    [[6, 1]],
    [[3, 2], [6, 5]],
    [[3, 3], [6, 8]],
    [],
]
console.log(Dijkstras(graph, 0))

//Dijkshtra's Algo as per ChatGPT
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(i) {
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[i].dist < this.heap[parent].dist) {
                [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
                i = parent;
            } else break;
        }
    }

    pop() {
        if (this.heap.length === 0) return null;

        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown(0);
        }

        return min;
    }

    heapifyDown(i) {
        let n = this.heap.length;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (left < n && this.heap[left].dist < this.heap[smallest].dist)
                smallest = left;

            if (right < n && this.heap[right].dist < this.heap[smallest].dist)
                smallest = right;

            if (smallest !== i) {
                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                i = smallest;
            } else break;
        }
    }
}
function Dijkstras(graph, src) {
    let n = graph.length;
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;

    let pq = new MinHeap();
    pq.push({ node: src, dist: 0 });

    while (pq.size()) {
        let { node, dist: currDist } = pq.pop();

        if (currDist > dist[node]) continue; // stale entry

        for (let [neighbor, weight] of graph[node]) {
            let newDist = currDist + weight;

            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                pq.push({ node: neighbor, dist: newDist });
            }
        }
    }

    return dist;
}
