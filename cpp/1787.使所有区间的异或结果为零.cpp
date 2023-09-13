/*
 * @lc app=leetcode.cn id=1787 lang=cpp
 *
 * [1787] 使所有区间的异或结果为零
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int minChanges(vector<int>& nums, int k) {

        memset(f,0x3f,sizeof f);
        f[0][0] = 0;
        for(int i=1;i<=k;i++)
        {
            unordered_map<int,int> mp;
            int size = 0;
            for(int j=i-1;j<nums.size();j+=k)
            {
                mp[nums[j]]++;
                size++;
            }
            int minn = 0x3f3f3f3f;
            for(int j=0;j<(1<<10);j++)
                minn = min(minn,f[i-1][j]);
            for(auto t:mp)
            {
                for(int j=0;j<(1<<10);j++)
                    f[i][j] = min(f[i][j],f[i-1][j^t.first]+size-t.second);
            }
            for(int j=0;j<(1<<10);j++)
                f[i][j] = min(f[i][j],minn+size);
        }
        return f[k][0];
    }
    /*
        nums[i] = nums[i+k]
    */
   int f[2005][1025];//前i个字母异或和为j所需的最小代价

};
// @lc code=end

