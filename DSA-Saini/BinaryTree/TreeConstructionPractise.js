//test cases
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

let root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));
console.log(root1);


    //     3
    //    / \
    //   9   20
    //      /  \
    //     15   9
    //    /  \
    //   2    7
    //         \
    //          4
class Tree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root=new Tree(3);
root.left=new Tree(9);
root.right=new Tree(20);
root.right.left=new Tree(15);
root.right.right=new Tree(9);
root.right.left.left=new Tree(2);
root.right.left.right=new Tree(7);
root.right.left.right.right=new Tree(4);
console.log(root)