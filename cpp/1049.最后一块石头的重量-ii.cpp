/*
 * @lc app=leetcode.cn id=1049 lang=cpp
 *
 * [1049] 最后一块石头的重量 II
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int lastStoneWeightII(vector<int>& stones) {
        int sum = 0;
        for(int i=0;i<stones.size();i++)
            sum += stones[i];

        for(int i=1;i<=stones.size();i++)
            for(int j=sum/2;j>=stones[i-1];j--)
                f[j] = max(f[j],f[j-stones[i-1]] + stones[i-1]);
        
        return sum - 2*f[sum/2];
    }
    int f[3005];
};
// @lc code=end

