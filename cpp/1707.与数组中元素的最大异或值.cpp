/*
 * @lc app=leetcode.cn id=1707 lang=cpp
 *
 * [1707] 与数组中元素的最大异或值
 */

#include <lin.h>
class Solution {
public:
    vector<int> maximizeXor(vector<int>& nums, vector<vector<int>>& queries) {
        vector<E> q[N];
        vector<int> ans;

        ans.resize(queries.size());
        sort(nums.begin(),nums.end());
        
        // 离线化处理
        for(int i=0;i<queries.size();i++){
            // 找到第一个大于等于其的元素
            int k = lower_bound(nums.begin(),nums.end(),queries[i][1]) - nums.begin();
            if(k==0){
                if(nums[0]>queries[i][1]){
                    ans[i] = -1;
                } else {
                    ans[i] = nums[0]^queries[i][0];
                }
            } else if(k>=nums.size()){
                q[nums.size()-1].push_back({queries[i][0],i});
            } else {
                if(nums[k]>queries[i][1])
                    q[k-1].push_back({queries[i][0],i});
                else
                    q[k].push_back({queries[i][0],i});
            }
        }

        for(int i=0;i<nums.size();i++){
            addToTree(nums[i]);
            for(auto t : q[i]){
                // cout<<i<<" "<<t.x<<" "<<t.id<<endl;
                ans[t.id] = sol(t.x);
            }
        }

        return ans;
    }
    struct E
    {
        int x;
        int id;
    };
    // 很显然可以字典树+离线处理解决----如果是动态问题的话---就需要使用可持久化字典树了
    enum CONST{N=200000+100};
    int tri[N*31][2];
    int cnt;
    // 字典树插入操作
    void addToTree(int u){
        int p = 0;
        for(int i=31;i>=0;i--){
            int t = (u>>i)&1;
            if(!tri[p][t])tri[p][t] = ++cnt;
            p = tri[p][t];
        }
    }
    // 查询异或可得最大值
    int sol(int u){
        int ans = 0;
        int p = 0;
        for(int i=31;i>=0;i--){
            int t = (u>>i)&1;
            if(tri[p][!t]){
                ans += (1<<i);
                p = tri[p][!t];
            } else {
                p = tri[p][t];
            }
        }
        return ans;
    }
};
// @lc code=end

