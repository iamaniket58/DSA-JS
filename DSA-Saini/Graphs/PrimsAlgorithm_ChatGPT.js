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

    heapifyUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].dist < this.heap[parentIndex].dist) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown(index) {
        const length = this.heap.length;
        while (true) {
            let smallest = index;
            let left = 2 * index + 1;
            let right = 2 * index + 2;

            if (left < length && this.heap[left].dist < this.heap[smallest].dist) {
                smallest = left;
            }

            if (right < length && this.heap[right].dist < this.heap[smallest].dist) {
                smallest = right;
            }

            if (smallest !== index) {
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            } else {
                break;
            }
        }
    }
}

// Prim's algorithm function
function primMST(graph) {
    const n = graph.length;
    const inMST = new Array(n).fill(false);
    const minHeap = new MinHeap();

    // Start from node 0 (or any arbitrary node)
    minHeap.push({ node: 0, dist: 0 });
    const mstEdges = [];

    while (minHeap.size() > 0) {
        const { node: u, dist: weight } = minHeap.pop();

        // If already in MST, skip it
        if (inMST[u]) continue;

        // Include this node in MST
        inMST[u] = true;

        // If it's not the start node, add the edge to MST edges
        if (weight !== 0) {
            mstEdges.push({ node: u, weight });
        }

        // Check all adjacent vertices of the extracted node u
        for (const [v, edgeWeight] of graph[u]) {
            if (!inMST[v]) {
                // Push the neighbor with its edge weight into the heap
                minHeap.push({ node: v, dist: edgeWeight });
            }
        }
    }

    return mstEdges;
}

// Example usage
const graph = [
    // node 0's edges: [neighbor, weight]
    [[1, 4], [2, 1]],
    // node 1's edges
    [[0, 4], [2, 2], [3, 5]],
    // node 2's edges
    [[0, 1], [1, 2], [3, 8]],
    // node 3's edges
    [[1, 5], [2, 8]]
];

console.log(primMST(graph));
