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
 var findFrequentTreeSum = function(root) {
    if(!root)return [];
    let mp = {};
    let maxx = 0;
    const dfs = (node) => {
        if(!node)return 0;
        let d = node.val + dfs(node.left) + dfs(node.right);
        if(!mp[d])mp[d] = 0;
        mp[d]++;
        maxx = Math.max(maxx,mp[d]);
        return d;
    }
    dfs(root);
    let ans = [];
    for(let x in mp) {
        if(mp[x]===maxx) {
            ans.push(x);
        }
    }
    return ans;
};