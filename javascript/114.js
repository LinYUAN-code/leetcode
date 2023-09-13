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
 * @return {void} Do not return anything, modify root in-place instead.
 */
//  递归
var flatten = function(root) {
    if(!root)return null;
    let dfs = function(root) {
        if(!root)return null;
        let o = dfs(root.left);
        let oo = dfs(root.right);
        root.right = root.left = null;
        if(!o&&!oo) {
            return {head:root,end:root};
        }else if(!o) {
            root.right = oo.head;
            return {head:root,end:oo.end};
        }else if(!oo) {
            root.right = o.head;
            return {head:root,end:o.end};
        } else {
            root.right = o.head;
            o.end.right = oo.head;
            return {head:root,end:oo.end};
        }
    }
    dfs(root);
};