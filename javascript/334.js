/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function(nums) {
    // nlogn ---》 二分 求出最长上升子序列--然后判断是不是大于3
    // O(n) 空间复杂度O(n)  ---》 枚举中间那个数字--然后用两个数组记录前后极值
    // 空间复杂度O(1)  ---> 其实可以寻找最后一个数组而维护前两个数组--这样就避免了上面的缺点 -- 有点类似二分求最长上升子序列的那个思想
    // let n = nums.length;
    // let l = [];
    // let r = [];
    // const min = Math.min;
    // const max = Math.max;
    // l[0] = nums[0];
    // for(let i=1;i<nums.length;i++) {
    //     l[i] = nums[i];
    //     l[i] = min(l[i],l[i-1])
    // }
    // r[n-1] = nums[n-1];
    // for(let i=n-2;i>=0;i--) {
    //     r[i] = nums[i];
    //     r[i] = max(r[i],r[i+1]);
    // }
    // for(let i=1;i<n-1;i++) {
    //     if(nums[i]>l[i-1]&&nums[i]<r[i+1])return true;
    // }
    // return false;

    let n = nums.length;
    const inf = 0x3f3f3f3f3f3f;
    let minn = inf;
    let mid = inf;
    for(let i=0;i<nums.length;i++) {
        if(nums[i]<minn) {
            minn = nums[i];
        } else if(nums[i]>minn && nums[i]<mid) {
            mid = nums[i];
        } else if(nums[i]>mid) {
            return true;
        }
    }
    return false;
};