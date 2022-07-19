/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  // 简单模拟
  // (i*m + j + k)%(n*m)
  let n = grid.length;
  let m = grid[0].length;
  let ans = [];
  for (let i = 0; i < n; i++) ans[i] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let t = (i * m + j + k) % (n * m);
      let x = Math.floor(t / m);
      let y = t % m;
      ans[x][y] = grid[i][j];
    }
  }
  return ans;
};
