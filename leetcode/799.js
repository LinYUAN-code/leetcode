/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
  const f = Array(query_row + 2).fill(0);
  f[0] = poured;
  f[-1] = 0;
  for (let i = 1; i <= query_row; i++) {
    for (let j = i; j >= 0; j--) {
      f[j] = Math.max((f[j] - 1) / 2, 0) + Math.max((f[j - 1] - 1) / 2, 0);
    }
  }
  console.log(f);
  return Math.min(f[query_glass], 1);
};
