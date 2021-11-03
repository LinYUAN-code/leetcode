/*
 * @lc app=leetcode.cn id=494 lang=cpp
 *
 * [494] 目标和
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int findTargetSumWays(vector<int>& nums, int target) {
        dp[0][1000] = 1;
        for(int i=1;i<=nums.size();i++)
        {
            for(int j=0;j<=2000;j++)
            {
                dp[i][j] += dp[i-1][j+nums[i-1]];
                if(j-nums[i-1]>=0)dp[i][j] += dp[i-1][j-nums[i-1]];
            }
        }

        return dp[nums.size()][target+1000];
    }
    int dp[100][3005];//表示考虑到第i个数字可以组成和为j的方案数
};
// @lc code=end

