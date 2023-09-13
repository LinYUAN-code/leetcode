/*
 * @lc app=leetcode.cn id=1046 lang=cpp
 *
 * [1046] 最后一块石头的重量
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        priority_queue<int> q;
        for(int i=0;i<stones.size();i++)
            q.push(stones[i]);
        while(q.size()>1)
        {
            int a = q.top();q.pop();
            int b = q.top();q.pop();
            if(a==b)continue;
            q.push(a-b);
        }
        if(!q.size())return 0;
        return q.top();
    }
};
// @lc code=end

