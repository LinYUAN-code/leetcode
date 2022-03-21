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
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    let mp = {};
    let ans = false;
    const dfs = function(node) {
        if(!node)return ;
        if(ans)return ;
        if(mp[k-node.val]) {
            ans = true;
            return ;
        }
        mp[node.val] = true;
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return ans;
};