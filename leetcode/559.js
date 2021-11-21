/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if(!root)return 0;
    let ans = 0;
    const max = Math.max;
    const dfs = function(root,dep) {
        if(!root.children.length) {
            ans = max(ans,dep);
        }
        for(let i=0;i<root.children.length;i++) {
            dfs(root.children[i],dep+1);
        }
    }
    dfs(root,1);
    return ans;
};