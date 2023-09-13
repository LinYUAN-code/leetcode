/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {
    if(!k)return 0;
    let ans = 0;
    let l = 0;
    let r = 0;
    let tem = 1;
    let n = nums.length;
    for(;r<n;r++) {
        tem *= nums[r];
        while(r>=l&&tem>=k) {
            tem /= nums[l];
            l++;
        }
        ans += r - l + 1;
    }
    return ans;
};