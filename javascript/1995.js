/**
 * @param {number[]} nums
 * @return {number}
 */
 var countQuadruplets = function(nums) {
    // 这里采用直接枚举的方法，但是其实可以通过哈希表来进一步减少复杂度
    // 比如 可以把nums[a]保存在哈希表中--这样时间复杂度可以减少到n^3
    // 又比如可以把nums[a] + nums[b]加入到哈希表中 这样时间复杂度可以减少到n^2
    let n = nums.length;
    let ans = 0;
    for(let i=0;i<n;i++)
        for(let j=i+1;j<n;j++)
            for(let k=j+1;k<n;k++)
                for(let o=k+1;o<n;o++)
                    if(nums[i]+nums[j]+nums[k] === nums[o])ans++;

    return ans;    
};