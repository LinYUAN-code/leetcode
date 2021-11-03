/*
 * @lc app=leetcode.cn id=50 lang=cpp
 *
 * [50] Pow(x, n)
 */

// @lc code=start
class Solution {
public:
    double myPow(double x, int n) {
        double ans = 1;
        long long b = n;
        if(b>0){
            while(b){
                if(b&1)ans *= x;
                x *= x;
                b >>= 1;
            }
        } else {
            b = -b;
            while(b){
                if(b&1)ans /= x;
                x *= x;
                b >>= 1;
            }
        }

        return ans;
    }
};
// @lc code=end

