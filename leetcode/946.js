/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  // 模拟
  let stk = [];
  let i = 0;
  let n = pushed.length;
  for (let x of popped) {
    if (stk[stk.length - 1] === x) {
      stk.pop();
      continue;
    }
    while (i < n && stk[stk.length - 1] !== x) {
      stk.push(pushed[i++]);
    }
    // console.log(stk,x);
    if (stk[stk.length - 1] !== x && i === n) return false;
    stk.pop();
  }
  return true;
};
