/*
 * @lc app=leetcode.cn id=560 lang=cpp
 *
 * [560] 和为K的子数组
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        int ans = 0;
        unordered_map<int,int> mp;
        int sum = 0;
        mp[0]++;
        for(int i=0;i<nums.size();i++)
        {
            sum += nums[i];
            ans += mp[sum-k];
            mp[sum]++;
        }
        return ans;
    }
};
// @lc code=end

