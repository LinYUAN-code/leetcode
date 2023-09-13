/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // 找最大值和次大值
  let d1 = 0;
  let d2 = 0;
  for (let x of nums) {
    if (x > d1) {
      d2 = d1;
      d1 = x;
    } else if (x === d1) {
      d2 = d1;
    } else if (x > d2) {
      d2 = x;
    }
  }
  return (d1 - 1) * (d2 - 1);
};
