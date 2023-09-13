/*
 * @lc app=leetcode.cn id=525 lang=cpp
 *
 * [525] 连续数组
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        unordered_map<int,int> mp;
        for(int i=1;i<=nums.size();i++)
            s[i] = (nums[i-1]==0?-1:1) + s[i-1];
        // for(int i=1;i<=nums.size();i++)
        //     cout<<s[i]<<endl;
        int ans = 0;
        for(int i=1;i<=nums.size();i++)
        {
            if(mp[s[i]])
                ans = max(i-mp[s[i]],ans);

            if(!s[i])
                ans = i;

            if(!mp[s[i]])
                mp[s[i]] = i;
        }
        return ans;
    }
    int s[100005];
    // 01数量相同--->转化成 0 --》 -1 变成和为0的数量
    //问题转化为求前缀和+哈希即可
};
// @lc code=end

