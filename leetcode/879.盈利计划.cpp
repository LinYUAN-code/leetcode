/*
 * @lc app=leetcode.cn id=879 lang=cpp
 *
 * [879] 盈利计划
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int profitableSchemes(int n, int minProfit, vector<int>& group, vector<int>& profit) {
        for(int i=0;i<=n;i++)
            f[i][0] = 1;
        for(int i=1;i<=group.size();i++)
            for(int j=n;j>=group[i-1];j--)
                for(int k=minProfit;k>=0;k--)
                    f[j][k] = (f[j][k] +  f[j-group[i-1]][max(0,k-profit[i-1])])%mod;
        long long ans = 0;

        for(int i=minProfit;i<=10000;i++)
            ans = (ans + f[n][i])%mod;
        return ans; 
    }
    int mod = 1e9+7;
    int f[105][10005];//人数 最小金额
    // 背包问题求方案数
    // 体积是n 
    // 求价值大于等于minprofit的方案数
    // 那么我们dp加一个维度
};
// @lc code=end

