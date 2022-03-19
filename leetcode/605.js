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
 * @return {string}
 */
 var tree2str = function(root) {
    let ans = "";
    const dfs = function(node) {
        if(!node)return ;
        ans += node.val;
        if(!node.left &&!node.right)return ;
        ans += "(";
        dfs(node.left);
        ans += ")";

        if(node.right) {
            ans += "(";
            dfs(node.right);
            ans += ")";
        }

    }
    dfs(root);

    return ans;
};