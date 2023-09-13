/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // 1.算出0+..+n - sum
    // 2.异或相消--》直接异或和^0...^n
    let ans = 0;
    for(let i=0;i<nums.length;i++) {
        ans ^= nums[i];
        ans ^= (i+1);
    }
    return ans;
};