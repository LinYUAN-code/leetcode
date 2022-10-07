/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  // n^2
  let f = [];
  let tem = nums[0];
  let ans = tem;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      tem += nums[i];
      ans = Math.max(ans, tem);
      continue;
    }
    tem = nums[i];
  }
  return ans;
};
