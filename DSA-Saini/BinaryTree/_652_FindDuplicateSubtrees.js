/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */

//Without using multiple Sets
var findDuplicateSubtrees = function(root) {
    
    const map = new Map();  // serialization -> frequency
    const result = [];
    
    function serialize(node) {
        if (!node) return "#";
        
        const left = serialize(node.left);
        const right = serialize(node.right);
        
        const serial = node.val + "," + left + "," + right;
        
        const count = map.get(serial) || 0;
        map.set(serial, count + 1);
        
        // Only push when count becomes 2 (avoid duplicates in result)
        if (count === 1) {
            result.push(node);
        }
        
        return serial;
    }
    
    serialize(root);
    return result;
};

//Using Multiple sets
var findDuplicateSubtrees = function (root) {
    let set = new Set();
    let ansSet = new Set();
    let ans = [];
    let traverse = (curr) => {
        if (!curr) return '-#';

        let left = traverse(curr.left);
        let right = traverse(curr.right);

        let currHash = '-' + curr.val + left + right;
        if (!set.has(currHash)) {
            set.add(currHash);
        }
        else {
            if (!ansSet.has(currHash)) {
                ans.push(curr);
                ansSet.add(currHash);
            }

        }
        return currHash
    }
    traverse(root);
    return ans;
};

//Without using multiple Sets
var findDuplicateSubtrees = function (root) {
    let map = {};
    let ans = [];
    let traverse = (curr) => {
        if (!curr) return '-#';

        let left = traverse(curr.left);
        let right = traverse(curr.right);

        let currHash = '-' + curr.val + left + right;

        let count = map[currHash] || 0;
        map[currHash] = (map[currHash] || 0) + 1
        if (count == 1) {
            ans.push(curr);
        }
        return currHash
    }
    traverse(root);
    return ans;
};