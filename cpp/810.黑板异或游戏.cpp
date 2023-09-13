/*
 * @lc app=leetcode.cn id=810 lang=cpp
 *
 * [810] 黑板异或游戏
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    bool xorGame(vector<int>& nums) {
        if(!(nums.size()&1))return true;
        int sum = 0;
        for(int i=0;i<nums.size();i++)
            sum ^= nums[i];
        return sum == 0;
    }
};
// @lc code=end

