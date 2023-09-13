/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let mp = {};
    for(let i=0;i<nums.length;i++) {
        let j = target - nums[i];
        if(typeof mp[j] !== "undefined" )return [mp[j],i];
        mp[nums[i]] = i;
    }
    return [];
};