/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  let minn = [];
  let n = nums.length;
  let tmp = 9999999;
  for (let i = n - 1; i >= 0; i--) {
    tmp = Math.min(tmp, nums[i]);
    minn[i - 1] = tmp;
  }
  tmp = 0;
  for (let i = 0; i < n; i++) {
    tmp = Math.max(tmp, nums[i]);
    if (tmp <= minn[i]) {
      return i + 1;
    }
  }
};
