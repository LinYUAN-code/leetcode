/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    // 最笨的方法---统计--另外开一个1-n数组
    // 但是对于统计我们是不可避免的，我们可以选择在input数组上进行统计。
    // 并且数字范围是【1，n】 做法显而易见的了
    for(let x of nums) {
        nums[Math.abs(x)-1] = -Math.abs(nums[Math.abs(x)-1])
    }

    let ans = [];
    for(let i=1;i<=nums.length;i++) {
        if (nums[i-1]>0) {
            ans.push(i);
        }
    }
    return ans;
}