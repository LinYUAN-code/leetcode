/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findPairs = function(nums, k) {
    // 排序+双指针
    nums.sort((a,b)=>{
        return a-b;
    });
    let ans = 0;
    let n = nums.length;
    let r = 0;
    for(let l=0;l<n-1;l++) {
        if(l>0&&nums[l]===nums[l-1])continue;
        r = Math.max(r,l+1);
        while(r<n&&nums[r]-nums[l]<k) {
            r++;
        }
        if(r===n)break;
        if(nums[r] - nums[l] === k) {
            ans++;
        }
    }
    return ans;
};