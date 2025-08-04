var lowestCommonAncestor = function (root, p, q) {
    let ans = null
    let traverse = (curr) => {
        if(!curr)return false
        let left = traverse(curr.left)
        let right = traverse(curr.right)
        isCurrMatch = curr.val == p.val || curr.val == q.val
        if(left && right){
            ans=curr.val
        }
        if((left || right) && isCurrMatch){
            ans=curr.val;
        }

        return left || right || isCurrMatch
    }
    traverse(root)
    return ans;
}

function TreeNode(val){
  this.val=val;
  this.left=null;
  this.right=null
}
let root=new TreeNode(3)
root.left=new TreeNode(5)
root.right=new TreeNode(1)
root.left.left=new TreeNode(6)
root.left.right=new TreeNode(2)
root.left.right.left=new TreeNode(7)
root.left.right.right=new TreeNode(4)
root.right.left=new TreeNode(0)
root.right.right=new TreeNode(8)
lowestCommonAncestor(root,new TreeNode(6),new TreeNode(4))