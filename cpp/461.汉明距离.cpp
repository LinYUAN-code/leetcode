/*
 * @lc app=leetcode.cn id=461 lang=cpp
 *
 * [461] 汉明距离
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int hammingDistance(int x, int y) {
        x ^= y;
        short ans = 0;
        for(int i=0;i<31;i++)
            if((x>>i)&1)ans++;
        return ans;
    }
};
// @lc code=end

