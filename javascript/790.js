/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  // 动态规划 - 寻找最小不可拆分组合图案
  // 可以进行矩阵快速幂优化
  const mod = 1e9 + 7;
  let f = Array(n + 1).fill(0);
  let s = Array(n + 1).fill(0);
  f[0] = f[1] = 1;
  f[2] = 2;
  f[-2] = f[-1] = 0;
  s[-2] = s[-1] = 0;
  s[0] = 1;
  s[1] = 2;
  s[2] = 4;
  for (let i = 3; i <= n; i++) {
    f[i] = (f[i - 1] + f[i - 2] + s[i - 3] * 2) % mod;
    s[i] = (s[i - 1] + f[i]) % mod;
  }
  return f[n];
};
