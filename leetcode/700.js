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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    
    const find = function(u) {
        if(!u)return null;
        if(val === u.val)return u;
        if(val < u.val) {
            return find(u.left);
        } else {
            return find(u.right);
        }
    }

    return find(root);
};