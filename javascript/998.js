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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function (root, val) {
  // 末尾附加值，一直向右递归
  const dfs = (node, val) => {
    if (!node) {
      return new TreeNode(val);
    }
    if (node.val <= val) {
      let nnode = new TreeNode(val);
      nnode.left = node;
      return nnode;
    }
    node.right = dfs(node.right, val);
    return node;
  };
  return dfs(root, val);
};
