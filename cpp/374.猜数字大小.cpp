/*
 * @lc app=leetcode.cn id=374 lang=cpp
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is lower than the guess number
 *			      1 if num is higher than the guess number
 *               otherwise return 0
 * int guess(int num);
 */

class Solution {
public:
    int guessNumber(int n) {
        long long l=1,r=n;
        while(l<r)
        {
            int mid = l + r >> 1;
            if(!guess(mid))return mid;
            if(guess(mid)==1)l = mid + 1;
            else  r = mid;
        }
        return l;
    }
};
// @lc code=end

