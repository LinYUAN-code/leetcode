/*
 * @lc app=leetcode.cn id=477 lang=cpp
 *
 * [477] 汉明距离总和
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int totalHammingDistance(vector<int>& nums) {
        if(nums.size()<=1)return 0;
        int ans = 0;
        for(int i=0;i<nums.size();i++)
        {
            for(int j=0;j<32;j++)
            {
                int t = (nums[i]>>j)&1;
                ans += a[!t][j];
                a[t][j]++;
            }
        }
        return ans;
    }
    //emm设个数组放每一位 0有多少个 1有多少个就ok了
    int a[2][40];
};
// @lc code=end

