/*
 * @lc app=leetcode.cn id=1846 lang=cpp
 *
 * [1846] 减小和重新排列数组后的最大元素
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int maximumElementAfterDecrementingAndRearranging(vector<int>& arr) {
        if(arr.size()==1)return 1;
        sort(arr.begin(),arr.end());
        int ans = 1;
        arr[0] = 1;
        for(int i=1;i<arr.size();i++)
            if(arr[i]>arr[i-1]+1)
            {
                arr[i] = arr[i-1] + 1;
            }
        return arr[arr.size()-1];
    }
    // 直觉先排序---然后--构造出合理的就行
};
// @lc code=end

