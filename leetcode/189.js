/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    // 1.使用额外数组
    // 2.环形替换---》
    // 3.翻转
    const reverse = function(l,r) {
        for(;l<r;l++,r--) {
            [nums[l],nums[r]] = [nums[r],nums[l]];
        }
    }
    k %= nums.length;
    reverse(0,nums.length-1);
    reverse(0,k-1);
    reverse(k,nums.length-1);
};