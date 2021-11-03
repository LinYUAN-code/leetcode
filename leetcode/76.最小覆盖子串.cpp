/*
 * @lc app=leetcode.cn id=76 lang=cpp
 *
 * [76] 最小覆盖子串
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    bool check()
    {
        for(auto t: mp)
            if(t.second > cc[t.first])return false;
        return true;
    }
    string minWindow(string s, string t) {
        int fleft=-1,fright=-1;

        for(int i=0;i<t.size();i++)
            mp[t[i]]++;
        
        int left = 0;

        for(int right=0;right<s.size();right++)
        {
            cc[s[right]]++;
            if(check())
            {
                while(cc[s[left]] > mp[s[left]])
                {
                    cc[s[left]]--;
                    left++;
                }
                if(fleft == -1||(right-left+1 < fright - fleft+1))
                {
                    fright = right;
                    fleft = left;    
                }   
            }
        }
        if(fleft==-1)return "";
        return s.substr(fleft,fright-fleft+1);
    }
    unordered_map<int,int> mp;
    unordered_map<int,int> cc;
    // 二分长度 nlogn
    // 滑动窗口
    // O(52n)
};
// @lc code=end

