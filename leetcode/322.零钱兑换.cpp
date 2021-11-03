/*
 * @lc app=leetcode.cn id=322 lang=cpp
 *
 * [322] 零钱兑换
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        for(int i=0;i<=amount;i++)
            f[i] = 0x3f3f3f3f;
        f[0] = 0;
        for(int i=0;i<coins.size();i++)
            for(int j=coins[i];j<=amount;j++)
                f[j] = min(f[j],f[j-coins[i]]+1);
        if(f[amount]==0x3f3f3f3f)return -1;
        else return f[amount];
    }
    int f[10010];//f[i]表示用之前类型的硬币凑凑改钱所需的最小数
};
// @lc code=end

