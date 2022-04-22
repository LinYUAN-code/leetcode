/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxRotateFunction = function(nums) {
    let tem = 0;
    let ans = -99999999999;
    let sum = 0;
    const max = Math.max;
    for(let i=0;i<nums.length;i++) {
        sum += nums[i];
        tem += i*nums[i];
    }
    for(let i=0;i<nums.length;i++) {
        tem = tem + sum - nums.length * nums[nums.length-i-1];
        ans = max(ans,tem);
    }
    return ans;
};