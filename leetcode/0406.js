/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
 var inorderSuccessor = function(root, p) {
    // 就是在二分搜索树中找后继节点
    let ans = null;
    const dfs = (node) => {
        if(!node)return ;
        if(node.val > p.val) {
            ans = node;
            dfs(node.left);
        }
        if(node.val <= p.val) {
            if(node!==p && node.val===p.val) {
                ans = node;
            }
            dfs(node.right);
        }
    }
    dfs(root);
    return ans;
};