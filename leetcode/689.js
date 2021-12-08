/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSumOfThreeSubarrays = function(nums, k) {
    // f[i][j]  --> 以第i个数字为结尾 凑出j个区间
    let n = nums.length;
    for(let i=1;i<nums.length;i++)nums[i] += nums[i-1];
    nums[-1] = 0;
    let f = [];
    for(let i=0;i<=n;i++)f[i] = Array(4);
    for(let i=0;i<=n;i++)
        for(let j=0;j<=3;j++)
            f[i][j] = 0;
    let ans = [];
    for(let i=0;i<=n;i++)ans[i] = Array(4);
    for(let i=0;i<=n;i++)
        for(let j=0;j<=3;j++)
            ans[i][j] = [];

    for(let i=1;i<=n;i++)
        for(let j=1;j<=3;j++) {
            if(i<k)continue;
            if(f[i-k][j-1] + nums[i-1] - nums[i-k-1] > f[i-1][j]) {
                ans[i][j] = [...ans[i-k][j-1],i-k];
                f[i][j] = f[i-k][j-1] + nums[i-1] - nums[i-k-1];
            } else {
                ans[i][j] = [...ans[i-1][j]];
                f[i][j] = f[i-1][j];
            }
            // f[i][j] = max(f[i-k][j-1] + nums[i-1] - nums[i-k-1],f[i-1][j]);
        }
    // console.log(f[n][3]);
    return ans[n][3];
};