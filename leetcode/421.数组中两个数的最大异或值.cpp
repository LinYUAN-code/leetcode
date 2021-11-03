/*
 * @lc app=leetcode.cn id=421 lang=cpp
 *
 * [421] 数组中两个数的最大异或值
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int findMaximumXOR(vector<int>& nums) {
        int ans = 0;
        for(int i=0;i<nums.size();i++)
            insert(nums[i]);
        for(int i=0;i<nums.size();i++)
            ans = max(ans,sol(nums[i]));
        return ans;
    }
    int f[30000*31][2];
    int cnt;
    // 最大的异或值？？
    // 暴力---n^2
    // 字典树即可
    void insert(int a)
    {
        int u = 0;
        for(int i=30;i>=0;--i)
        {
            int t = (a>>i)&1;
            if(!f[u][t])f[u][t] = ++cnt;
            u = f[u][t];
        }
    }
    int sol(int a)
    {
        int u = 0;
        int ans = 0;
        for(int i=30;i>=0;--i)
        {
            int t = (a>>i) & 1;
            if(f[u][!t])
            {
                ans |= (1<<i);
                u = f[u][!t];
                continue;
            }
            u = f[u][t];
        }
        return ans;
    }
};
// @lc code=end

