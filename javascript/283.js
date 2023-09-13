/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let id = 0;
    for(let i=0;i<nums.length;i++) {
        if (nums[i]) {
            [nums[id],nums[i]] = [nums[i],nums[id]];
            id++;
        }
    }
    return nums;
};