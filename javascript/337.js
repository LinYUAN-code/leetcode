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
 var rob = function(root) {
    // f[i][j] --> 为以i为节点的子树 自身取不取的最大值
    let f = [];
    let idx = 0;
    const dfs1 = function(node) {
        if(node===null)return 
        node.id = ++idx;
        dfs1(node.left);
        dfs1(node.right);
    }
    dfs1(root);
    // 1表示可以选择 0表示只能选择不拿
    const dfs = function(node,opt) {
        if(node===null)return 0;
        if (f[node.id]&&f[node.id][opt]) {
            return f[node.id][opt];
        }
        let ans1 = 0;
        ans1 += dfs(node.left,1);
        ans1 += dfs(node.right,1);
        if (opt) {
            let ans2 = node.val;
            ans2 += dfs(node.left,0);
            ans2 += dfs(node.right,0); 
            ans1 = Math.max(ans1,ans2);
        }
        if(!f[node.id]) f[node.id] = [];
        f[node.id][opt] = ans1;
        return ans1;
    }
    return dfs(root,1);
};