/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  // 简单分治模拟
  const solve = (s) => {
    if (s.length === 2) return 1;
    let ans = 0;
    let l = 0;
    let pre = 0;
    for (let i = 0; i < s.length; i++) {
      let x = s[i];
      if (x === "(") {
        l++;
        continue;
      }
      l--;
      if (!l) {
        if (i === s.length - 1 && !pre) {
          return 2 * solve(s.slice(1, -1));
        }
        ans += solve(s.slice(pre, i + 1));
        pre = i + 1;
      }
    }
    return ans;
  };
  return solve(s);
};
