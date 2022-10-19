/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  /*
        就是一颗二叉树
    */
  const fl = Math.floor;
  function isLeftSon(u) {
    return u % 2 === 0;
  }
  const num = [];
  num[0] = [0, 1];
  num[1] = [1, 0];
  const u = Math.pow(2, n - 1) - 1 + k;
  function sol(u) {
    if (u === 1) return 0;
    const fau = sol(u >> 1);
    if (isLeftSon(u)) {
      return num[fau][0];
    }
    return num[fau][1];
  }
  return sol(u);
};
