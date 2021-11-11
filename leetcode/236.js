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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    // 递归判断能不能见到它们---第一次成功的就是答案
    let ans =  null;

    const dfs = function(u) {
        if(!u)return [false,false];
        let l = dfs(u.left);
        let r = dfs(u.right);
        let d = [l[0]|r[0],l[1]|r[1]];
        if(u.val===p.val)d[0] = true;
        if(u.val===q.val)d[1] = true;
        if(d[0]&&d[1]&&!ans) {
            ans = u;
            return [false,false];
        }
        return d;
    }
    dfs(root);
    return ans;
};