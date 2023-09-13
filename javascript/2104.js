/**
 * @param {number[]} nums
 * @return {number}
 */
 var subArrayRanges = function(nums) {
    // 1000-->n^2的算法是可行的
    // 还有没有更好的方法
    // 之前的算法瓶颈在于每次都要同时求出区间最大值和最小值
    // 我们转换思路--求出所有区间的最大值和 然后 减去所有区间的最小值和
    // 那么怎么快速求出所有区间的最大值和 或者 最小值和呢？
    // 就比如找最大值
    // 我们可以维护一个单调栈--维护最大值
    // 栈中有： a  b ==> 然后有 nums[a] > nums[b] --> 则 ans += (b-a)*nums[b] + (a+1) *nums[a];
    // 最小值则反过来就完事了--维护一个最小栈
    let ans = 0;
    let stk = [];
    let tmp = 0;
    let mp = {}
    for(let i=0;i<nums.length;i++) {
        while(stk.length && nums[i] >= nums[stk[stk.length-1]]) {
            tmp -= mp[stk[stk.length-1]];
            stk.pop();
        }
        if(stk.length) {
           mp[i] = (i-stk[stk.length-1]) * nums[i];
        } else {
           mp[i] = (i+1) * nums[i];
        }
        tmp += mp[i];
        stk.push(i);
        ans += tmp;
    }
    while(stk.length)stk.pop();
    tmp = 0;
    mp = {};
    for(let i=0;i<nums.length;i++) {
        while(stk.length && nums[i] <= nums[stk[stk.length-1]]) {
            tmp -= mp[stk[stk.length-1]];
            stk.pop();
        }
        if(stk.length) {
           mp[i] = (i-stk[stk.length-1]) * nums[i];
        } else {
           mp[i] = (i+1) * nums[i];
        }
        tmp += mp[i];
        stk.push(i);
        ans -= tmp;
    }
    return ans;
};