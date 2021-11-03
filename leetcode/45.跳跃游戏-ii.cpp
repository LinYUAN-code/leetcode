/*
 * @lc app=leetcode.cn id=45 lang=cpp
 *
 * [45] 跳跃游戏 II
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int jump(vector<int>& nums) {
        int ans = 0;
        if(!nums.size()||nums.size()==1)return ans;
        int i = 0;
        for(;i<nums.size();){
            if(i==nums.size()-1)return ans;
            if(i+nums[i]>=nums.size()-1)return ans+1;
            int t = 0;
            for(int j=i+1;j<=nums[i]+i;j++){
                if(!t||nums[j]+j>nums[t]+t)t = j;
            }
            i = t;
            ans++;
        }
        return 9;
    }
};
// @lc code=end

