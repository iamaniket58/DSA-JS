/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    let traverse = (start, end) => {
        if(start>end)return null;
        if(start==end)return new TreeNode(nums[start]);

        let mid = Math.floor(start + (end - start) / 2);
        let node = new TreeNode(nums[mid]);

        node.left = traverse(start, mid - 1);
        node.right = traverse(mid + 1, end);

        return node;
    }
    return traverse(0, nums.length - 1);
};