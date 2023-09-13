/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  // 1. 暴力 n^2
  // 2. 可以预处理出每一个节点左边最大和右边最大的元素（做两遍单调栈）
  //    如果一个元素左边有比他大的元素(第一个) 那么这个元素就是其右儿子
  //    同理就是其左儿子，如果都没有则说明其是根节点
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
  let left = [];
  let right = [];

  let stk = [];
  for (let x of nums) {
    while (stk.length && stk.last() < x) {
      right[stk.last()] = x;
      stk.pop();
    }
    stk.push(x);
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    let x = nums[i];
    while (stk.length && stk.last() < x) {
      left[stk.last()] = x;
      stk.pop();
    }
    stk.push(x);
  }
  let tri = [];
  for (let x of nums) {
    tri[x] = new TreeNode(x);
  }
  let root = null;
  for (let x of nums) {
    if (!left[x] && !right[x]) {
      root = tri[x];
      continue;
    }
    if (!right[x] || (left[x] && left[x] < right[x])) {
      tri[left[x]].right = tri[x];
    } else if (right[x]) {
      tri[right[x]].left = tri[x];
    }
  }
  return root;
};
