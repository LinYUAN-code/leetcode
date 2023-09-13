/**
 * @param {number[]} nums
 * @return {number}
 */
var sumSubseqWidths = function (nums) {
  /*
        子序列
        暴力 2^n
        排序
        组合数学
    */
  nums.sort((a, b) => {
    return a - b;
  });
  const mod = 1e9 + 7;
  let ans = 0;
  let sum = nums[0];
  let base = 1;
  let baseSum = 1;
  for (let i = 1; i < nums.length; i++) {
    ans = (ans + ((baseSum * nums[i]) % mod) + mod - sum) % mod;
    base = (2 * base) % mod;
    baseSum = (base + baseSum) % mod;
    sum = (((sum * 2) % mod) + nums[i]) % mod;
  }
  return ans;
};
