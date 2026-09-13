// Your solution goes here
function cloneGraph(node) {
    // Write your solution here
    console.log(node);
}


// Node definition
class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

// Connect the nodes
node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];


// This is what LeetCode essentially gives your function:
const input = node1;


// Test it
const clonedGraph = cloneGraph(input);

console.log(clonedGraph);

// Create the graph:
//
//        1 ----- 2
//        |       |
//        |       |
//        4 ----- 3
//

let visualize={
  val: 1,
  neighbors: [
    {
      val: 2,
      neighbors: [
        [Circular],
        {
          val: 3,
          neighbors: [
            [Circular],
            {
              val: 4,
              neighbors: [
                [Circular],
                [Circular],
              ],
            },
          ],
        },
      ],
    },
    {
      val: 4,
      neighbors: [
        [Circular],
        {
          val: 3,
          neighbors: [
            {
              val: 2,
              neighbors: [
                [Circular],
                [Circular],
              ],
            },
            [Circular],
          ],
        },
      ],
    },
  ],
}