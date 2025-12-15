class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }
    Empty() {
        return this.heap.length === 0;
    }

    enqueue(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    dequeue() {
        if (this.heap.length === 0) return null;

        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown(0);
        }
        return min;
    }

    // compare based on val[1] (weight)
    getPriority(x) {
        return Array.isArray(x) ? x[1] : x.dist;
    }

    heapifyUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.getPriority(this.heap[index]) < this.getPriority(this.heap[parentIndex])) {
                [this.heap[index], this.heap[parentIndex]] =
                [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else break;
        }
    }

    heapifyDown(index) {
        const length = this.heap.length;

        while (true) {
            let smallest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            if (left < length &&
                this.getPriority(this.heap[left]) < this.getPriority(this.heap[smallest])) {
                smallest = left;
            }
            if (right < length &&
                this.getPriority(this.heap[right]) < this.getPriority(this.heap[smallest])) {
                smallest = right;
            }

            if (smallest !== index) {
                [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];
                index = smallest;
            } else break;
        }
    }
}


function primsMST(n, graph) {
    let visited = new Array(n).fill(false);
    let pq = new MinHeap({ priority: (x) => x[1] });
    pq.enqueue([0, 0]);

    let edgesUsed = 0;
    let mstCost = 0;

    while (!pq.Empty() && edgesUsed < n) {
        let [node, weight] = pq.dequeue();
        if (visited[node]) continue;

        visited[node] = true;
        edgesUsed++;
        mstCost += weight;

        for (let [edge, edgWt] of graph[node]) {
            if (!visited[edge]) {
                pq.enqueue([edge, edgWt]);
            }
        }
    }
    return mstCost;
}

let graph = [
    [[1, 4], [2, 2], [3, 5]],
    [[0, 4], [3, 1]],
    [[0, 2], [3, 3]],
    [[1, 1], [2, 3]],
];
const graph1 = [
    [[1, 2], [3, 1], [4, 4]],
    [[0, 2], [3, 3], [2, 3], [5, 7]],
    [[1, 3], [3, 5], [5,8 ]],
    [[0, 1], [4, 9], [2, 5], [1, 3]],
    [[0, 4], [3, 9]],
    [[1, 7], [2, 8]]
];

console.log(primsMST(4,graph))
console.log(primsMST(6,graph1))