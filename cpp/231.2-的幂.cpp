/*
 * @lc app=leetcode.cn id=231 lang=cpp
 *
 * [231] 2的幂
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    bool isPowerOfTwo(int n) {
        if(n<=0)return false;
        if(n == (n&-n))return true;
        return false;
    }
};
// @lc code=end

