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
 * @return {number}
 */
var findTilt = function(root) {
    let ans = 0;
    const sol = function(root) {
        if(!root)return 0;
        let l = sol(root.left),
            r = sol(root.right);
        ans += Math.abs(l-r);
        return l + r + root.val;
    }
    sol(root);
    return ans;
};