/*
 * @lc app=leetcode.cn id=1482 lang=cpp
 *
 * [1482] 制作 m 束花所需的最少天数
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int minDays(vector<int>& bloomDay, int m, int k) {
        int l = 1,r=1e9+1;
        while(l<r)
        {
            int mid = l + r >> 1;
            if(check(bloomDay,mid,m,k))r = mid;
            else l = mid + 1;
        }
        if(l==1e9+1)return -1;
        return l;
    }
    inline bool check(vector<int> & a,int mid,int m,int k)
    {
        int tem = 0;
        for(int i=0;i<a.size();i++)
        {
            if(a[i]>mid)
            {
                tem = 0;
                continue;
            }
            tem++;
            if(tem==k)
            {
                m--;
                if(m==0)return true;
                tem = 0;
            }
        }
        return false;
    }
    // 二分验证答案即可
};
// @lc code=end

