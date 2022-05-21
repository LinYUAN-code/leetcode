/**
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function(nums) {
    // 最多间隔3个元素
    for(let g=1;g<=3;g++) {
        for(let i=0;i+g<nums.length;i++) {
            if(nums[i] === nums[i+g]) {
                return nums[i];
            }
        }
    }
}