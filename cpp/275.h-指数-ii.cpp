/*
 * @lc app=leetcode.cn id=275 lang=cpp
 *
 * [275] H 指数 II
 */

// @lc code=start
class Solution {
public:
    int hIndex(vector<int>& citations) {
        if(!citations.size())return 0;
        int l = 0,r = citations.size() - 1;
        while(l < r)
        {
            int mid = l + r >> 1;
            if(citations[mid] >= (citations.size()-mid))r = mid;
            else l = mid + 1;
        }
        if(citations[l] < (citations.size()-l))return 0;
        return (citations.size() - l);
    }
    // 显然二分---答案具有单调性---二分加暴力检验答案时间复杂度nlogn
    // 也即找到数组中最小的i满足 a[i] >= (n-i+1)
};
// @lc code=end

