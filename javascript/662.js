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
var widthOfBinaryTree = function (root) {
  // 维护每一层的最小值
  if (!root) return 0;
  let mp = {};
  let ans = 1n;
  const dfs = (node, num, deep) => {
    if (!node) {
      return;
    }
    if (!mp[deep]) mp[deep] = num;
    if (num - mp[deep] + 1n > ans) ans = num - mp[deep] + 1n;
    dfs(node.left, num * 2n, deep + 1);
    dfs(node.right, num * 2n + 1n, deep + 1);
  };
  dfs(root, 1n, 0);
  return ans;
};
