/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, mines) {
  // 统计每一个点四个方向的
  // n^2
  // 第一次遍历计算上左方向
  // 第二次便利计算右下方向
  if (mines.length === n * n) return 0;
  let e = Array(n)
    .fill(0)
    .map(() => Array(n).fill(1));
  for (let x of mines) {
    e[x[0]][x[1]] = 0;
  }
  let f = Array(n)
    .fill(0)
    .map(() =>
      Array(n)
        .fill(0)
        .map(() => Array(4).fill(0))
    );
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (!e[i][j]) continue;
      if (e[i - 1][j]) f[i][j][0] = f[i - 1][j][0] + 1;
      if (e[i][j - 1]) f[i][j][1] = f[i][j - 1][1] + 1;
    }
  }
  for (let i = n - 2; i > 0; i--) {
    for (let j = n - 2; j > 0; j--) {
      if (!e[i][j]) continue;
      if (e[i + 1][j]) f[i][j][2] = f[i + 1][j][2] + 1;
      if (e[i][j + 1]) f[i][j][3] = f[i][j + 1][3] + 1;
    }
  }
  let ans = 0;
  for (let i = 1; i < n - 1; i++)
    for (let j = 1; j < n - 1; j++) {
      if (Math.min(...f[i][j]) === 3) {
        console.log(i, j, f[i][j]);
      }
      ans = Math.max(ans, Math.min(...f[i][j]));
    }
  return ans + 1;
};
