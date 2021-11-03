/*
 * @lc app=leetcode.cn id=1011 lang=cpp
 *
 * [1011] 在 D 天内送达包裹的能力
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int shipWithinDays(vector<int>& weights, int days) {
        int l=0,r=25000001;
        while(l<r)
        {
            int mid = l + r >> 1;
            if(check(weights,mid,days))r = mid;
            else l = mid + 1;
        }
        return l;
    }
    bool check(vector<int>& a,int mid,int days)
    {
        int tem = 0;
        for(int i=0;i<a.size();i++)
        {
            if(a[i]>mid)return false;
            if(tem+a[i]>mid)
            {
                days--;
                tem=a[i];
                continue;
            }
            tem+=a[i];
        }
        if(tem)days--;
        return days>=0;
    }
};
// @lc code=end
