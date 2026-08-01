function AllTrversal(root) {
    let preOrder = [];
    let inOrder = [];
    let postOrder = [];
    let stack = [[root, 1]];
    while (stack.length) {
        let [curr, state] = stack.pop();
        if (state == 1) {
            preOrder.push(curr.val);
            stack.push([curr, state + 1]);
            curr.left && stack.push([curr.left, 1]);
        }
        else if (state == 2) {
            inOrder.push(curr.val);
            stack.push([curr, state + 1]);
            curr.right && stack.push([curr.right, 1]);
        }
        else {
            postOrder.push(curr.val);
        }
    }
    return { PreOrder: preOrder, InOrder: inOrder, PostOrder: postOrder }
}

//chat GPT
function allTraversals(root) {
    if (!root) return [[], [], []];

    let preorder = [];
    let inorder = [];
    let postorder = [];

    let stack = [[root, 1]];

    while (stack.length) {
        let top = stack.pop();

        let node = top[0];
        let state = top[1];

        if (state === 1) {
            preorder.push(node.val);

            stack.push([node, 2]);

            if (node.left) {
                stack.push([node.left, 1]);
            }
        }
        else if (state === 2) {
            inorder.push(node.val);

            stack.push([node, 3]);

            if (node.right) {
                stack.push([node.right, 1]);
            }
        }
        else {
            postorder.push(node.val);
        }
    }

    return [preorder, inorder, postorder];
}

class Tree {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
let root=new Tree(1);

root.left=new Tree(2);
root.right=new Tree(5);

root.left.left=new Tree(3);
root.left.right=new Tree(4);

root.right.left=new Tree(6);
root.right.right=new Tree(7);

console.log(AllTrversal(root));

