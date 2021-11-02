/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    let mp = new Map();
    for(let i=0;i<inorder.length;i++) {
        mp.set(inorder[i],i);
    }
    let id = 0;
    const build = function(l,r) {
        if(l>r)return null;
        let node = new TreeNode();
        let val = preorder[id++];
        node.val = val;
        node.left = build(l,mp.get(val)-1);
        node.right = build(mp.get(val)+1,r)
        return node;
    }
    return build(0,preorder.length-1);
};