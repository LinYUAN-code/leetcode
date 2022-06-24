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
 * @return {number[]}
 */
 var largestValues = function(root) {
    // dfs
    let ans = [];
    const dfs = (node,deep) => {
        if(!node)return ;
        if(typeof ans[deep] === 'undefined')ans[deep] = -9999999999;
        ans[deep] = Math.max(ans[deep],node.val);
        dfs(node.left,deep+1);
        dfs(node.right,deep+1);
    }
    dfs(root,0);
    return ans;
};