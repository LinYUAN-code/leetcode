/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var smallestDistancePair = function(nums, k) {
    // 1.二分套二分
    // 2.二分套双指针
    let n = nums.length;
    nums.sort((a,b)=>{
        return a-b;
    });
    const check = (mid) => {
        let l = n-1;
        let ans = 0;
        for(let r=n-1;r>=1;r--) {
            l = Math.min(r-1,l);
            while(l>=0&&nums[r]-nums[l]<mid)l--;
            ans += r - l - 1;
        }
        return ans < k;
    }
    let l = 0;
    let r = nums[nums.length - 1] - nums[0];
    while(l<r) {
        let mid = (l+r+1) >> 1;
        if(check(mid))l = mid;
        else r = mid - 1;
    }
    return l;
};