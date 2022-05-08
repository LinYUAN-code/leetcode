/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    let ans = [];
    for(let i=0;i<nums.length;i++)nums[i] = nums[i] - 1;
    for(let i=0;i<nums.length;i++) {
        while(nums[i]!==i) {
            if(nums[nums[i]]===nums[i])break;
            let t = nums[nums[i]];
            nums[nums[i]] = nums[i];
            nums[i] = t;
        }
    }
    for(let i=0;i<nums.length;i++) {
        if(nums[i]!==i) {
            ans.push(nums[i]+1);
        }
    }
    return ans;
};