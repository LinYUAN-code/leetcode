/*
 * @lc app=leetcode.cn id=523 lang=cpp
 *
 * [523] 连续的子数组和
 */
// @lc code=start
class Solution {
public:
    bool checkSubarraySum(vector<int>& nums, int k) {
        for(int i=1;i<=nums.size();i++)
            s[i] = nums[i-1]+s[i-1];
        for(int i=1;i<=nums.size();i++)
            s[i] %= k;
        for(int i=1;i<=nums.size();i++)
            cout<<s[i]<<endl;
        unordered_map<int,int> mp;
        bool ans = 0;
        for(int i=1;i<=nums.size();i++)
        {
            if((mp[s[i]]&&i-mp[s[i]]>=2)||(!s[i]&&i>=2))
            {
                ans = 1;
                break;
            }
            if(!mp[s[i]])
                mp[s[i]] = i;
        }
        return ans;
    }
    long long s[100005];
    /*
        倍数这个条件很烦能不能把它消掉
        s[i] - s[j] = n*k
        ==> 
        s[i] = s[j] (模k)
    */
};
// @lc code=end