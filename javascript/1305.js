/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
 var getAllElements = function(root1, root2) {
    const dfs = (node,arr) => {
        if(!node)return ;
        dfs(node.left,arr);
        arr.push(node.val);
        dfs(node.right,arr);
    }
    let a1 = [];
    let a2 = [];
    let ans = [];
    dfs(root1,a1);
    dfs(root2,a2);
    let i=0;
    let j=0;;
    while(i<a1.length && j<a2.length) {
        if(a1[i]<a2[j]) {
            ans.push(a1[i++]);
        } else {
            ans.push(a2[j++]);
        }
    }
    while(i<a1.length) {
        ans.push(a1[i++]);
    }
    while(j<a2.length) {
        ans.push(a2[j++]);
    }
    return ans;
};