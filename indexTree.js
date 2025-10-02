class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(tree)

var postorderTraversal = function (root) {
    let stack = [];
    let arr = [];
    let curr = root;
    let visited = null;
    while (stack.length > 0 || curr != null) {
        while (curr != null) {
            stack.push(curr);
            curr = curr.left;
        }

        let elem = stack[stack.length - 1];
        if (elem.right != null && elem.right != visited) {
            curr = elem.right;
        }
        else {
            arr.push(elem.val);
            visited=stack.pop()
        }
    }
    return ans;
};
let tr = new TreeNode(1, 
    new TreeNode(2, new TreeNode(4), new TreeNode(5, new TreeNode(6), new TreeNode(7))), 
    new TreeNode(3,null,new TreeNode(8,new TreeNode(9))))
console.log(postorderTraversal(tr))

