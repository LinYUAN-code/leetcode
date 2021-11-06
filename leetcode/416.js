/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
    // 分割数组--让两个子集和相同？
    // 1--200 --》 n^3以下算法可以解决--动态规划？
    // 找到两个子集相同--》也就是找到一个子集等于sum的一半。
    // f[i][j]为前i个能不能构成sum为j
    let sum = nums.reduce((p,c)=>p+c,0);
    if(sum%2!==0)return false;
    sum /= 2;
    let f = [];
    for(let i=0;i<=nums.length;i++){
        f[i] = [];
        for(let j=1;j<=sum;j++)
            f[i][j] = false;
        f[i][0] = 1;
    }

    for(let i=1;i<=nums.length;i++)
        for(let j=1;j<=sum;j++) {
            f[i][j] = f[i-1][j];
            if (j-nums[i-1]>=0)
                f[i][j] |= f[i-1][j-nums[i-1]];
        } 
    return f[nums.length][sum];
};