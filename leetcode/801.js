/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function (nums1, nums2) {
  /*
        每一个位置只有换和不换两个选项
        分析一下什么时候可以换 什么时候 不换
        1. nums1[i] > nums1[i-1] && nums2[i] > nums2[i-1]
        2. nums1[i] > nums2[i-1] && nums2[i] > nums1[i-1]

        因为答案保证有解所以不存在另外两种情况

        如果满足情况1 && 不满足情况2
            需要保持 nums[i] 和 nums[i-1] 交换一致 
            也就是上一个数字（nums[i-1]）交换了 那么nums[i]也要交换
            也就是上一个数字（nums[i-1]）没交换 那么nums[i]也不交换
            
        如果满足情况2 && 不满足情况1
            需要保 nums[i] 和 nums[i-1] 交换相反

        都满足
            两种操作取一个最小值
    */
  let change = 1;
  let unChange = 0;
  let n = nums1.length;
  for (let i = 1; i < n; i++) {
    let flag1 = nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1];
    let flag2 = nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1];
    let _change = change;
    let _unChange = unChange;
    if (flag1 && !flag2) {
      change = _change + 1;
      unChange = _unChange;
    } else if (!flag1 && flag2) {
      change = _unChange + 1;
      unChange = _change;
    } else {
      change = Math.min(_change, _unChange) + 1;
      unChange = Math.min(_change, _unChange);
    }
  }
  return Math.min(change, unChange);
};
