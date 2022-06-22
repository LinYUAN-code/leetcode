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
 var findBottomLeftValue = function(root) {
    // 层级最低--然后值最小
    // 可以采用dfs
    // 也可也bfs
    let d = -1;
    let val = 99999999999;
    const dfs = (node,nd) => {
        if(!node)return ;
        if(nd>d) {
            val = node.val;
            d = nd;
        } 
        dfs(node.left,nd+1);
        dfs(node.right,nd+1);
    }
    dfs(root,0);
    return val;
};