/*
 * @lc app=leetcode.cn id=852 lang=cpp
 *
 * [852] 山脉数组的峰顶索引
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int peakIndexInMountainArray(vector<int>& arr) {
        int n = arr.size();
        int l = 1,r =n-2;
        while(l<r)
        {
            int mid = l + r >> 1;
            if(arr[mid] > arr[mid+1])
            {
                r = mid;
            }
            else 
                l = mid + 1;
        }
        return l;
    }
};
// @lc code=end

