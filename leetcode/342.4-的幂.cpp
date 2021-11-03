/*
 * @lc app=leetcode.cn id=342 lang=cpp
 *
 * [342] 4的幂
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    bool isPowerOfFour(int n) {
        if(n<=0)return false;
        int x = 0b0101010101010101010101010101010;
        if((n==(n&-n))&&(n&x)==0)return true;
        return false;
    }
                      
};
// @lc code=end

