/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    // 1.直接算出全部乘积然后每次除法就ok
    // 2.算出前缀和和后缀和 每次 p[i-1]*f[i+1] 就ok
    // 3.--》转化--》跑两遍--》不需要数组保存
    let ans = [];
    let tmp = 1;
    for(let i=0;i<nums.length;i++) {
        ans[i] = tmp;
        tmp *= nums[i];
    }
    tmp = 1;
    for(let i=nums.length-1;i>=0;i--) {
        ans[i] *= tmp;
        tmp *= nums[i];
    }
    return ans;
};