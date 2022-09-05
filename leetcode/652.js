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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  // hash
  const mp = {};
  let ans = [];
  const h = (val) => {
    return (val + 99) * 7 + 79;
  };
  function dfs(node) {
    if (!node) {
      return [0];
    }
    const l = dfs(node.left);
    const r = dfs(node.right);
    const val = `[${[node.val, l, r].toString()}]`;
    console.log(val);
    if (mp[val] === 1) {
      ans.push(node);
      mp[val] = 2;
    } else if (!mp[val]) {
      mp[val] = 1;
    }
    return val;
  }
  dfs(root);
  return ans;
};
