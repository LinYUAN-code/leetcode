/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  /*
        保证有解
    */
  let ans = [];
  let stk = [];
  let k = 0;
  for (let i = 1; i <= n; i++) {
    if (k === target.length) break;
    ans.push("Push");
    stk.push(i);
    if (stk[stk.length - 1] < target[k]) {
      ans.push("Pop");
    }
    if (stk[stk.length - 1] === target[k]) k++;
  }
  return ans;
};
