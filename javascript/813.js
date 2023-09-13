/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function (nums, k) {
  let n = nums.length;
  let f = [];
  for (let i = -1; i < n; i++) {
    f[i] = [];
    for (let j = 0; j <= k; j++) {
      if (j > i + 1) {
        f[i][j] = -9999999;
      } else {
        f[i][j] = 0;
      }
    }
  }
  const s = [];
  s[-1] = 0;
  s[0] = nums[0];
  for (let i = 1; i < n; i++) {
    s[i] = s[i - 1] + nums[i];
  }
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      for (let p = j - 2; p < i; p++) {
        if (j === 1 && p !== -1) continue;
        f[i][j] = Math.max(f[i][j], f[p][j - 1] + (s[i] - s[p]) / (i - p));
      }
    }
  }
  // console.log(f);
  return f[n - 1][k];
};
