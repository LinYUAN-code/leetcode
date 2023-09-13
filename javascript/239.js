/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    // 队列维护滑动窗口
    let ans = [];
    let stk = [];
    let n = nums.length;
    let head = 0;
    let tail = -1;
    for(let i=0;i<n;i++) {
        while(head<=tail && i-stk[head]+1 > k)head++;
        while(tail>=head && nums[i] >= nums[stk[tail]])tail--;
        stk[++tail] = i;
        if(i+1>=k)
            ans.push(nums[stk[head]]);
    }
    return ans;
};