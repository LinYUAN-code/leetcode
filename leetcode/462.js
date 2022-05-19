/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMoves2 = function(nums) {
    // 求中位数
    let ans = 0;
    nums.sort((a,b)=>{
        return a - b;
    });
    let mid = nums[Math.floor(nums.length / 2)];
    for(let x of nums) {
        ans += Math.abs(x-mid);
    }
    return ans;
};