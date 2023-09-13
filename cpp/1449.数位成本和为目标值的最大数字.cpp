/*
 * @lc app=leetcode.cn id=1449 lang=cpp
 *
 * [1449] 数位成本和为目标值的最大数字
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    string largestNumber(vector<int>& cost, int target) {
        memset(f,-0x3f,sizeof f);
        f[0][0] = 0;
        for(int i=1;i<=cost.size();i++)
        {
            for(int j=target;j>=0;j--)
            {
                f[i][j] = f[i-1][j];
                pre[i][j] = pre[i-1][j];
            }
                
            for(int j=cost[i-1];j<=target;j++)
                if(f[i][j]<=(f[i][j-cost[i-1]]+1))
                {
                    f[i][j] = f[i][j-cost[i-1]] + 1;
                    pre[i][j] = i;
                }
        }
        int c = target;
        int i = cost.size();
        cout<<f[cost.size()][c]<<endl;
        if(f[cost.size()][c]<0)
            return "0";
        string ans = "";
        while(c>0)
        {
            int t = pre[i][c];
            if(t==0)break;
            ans += t+'0';
            i = t;
            c -= cost[t-1];
        }
        return ans;
    }
    // 找出可以的最长的序列--
    // 完全背包记录
    int f[11][5005];
    int pre[11][5005];
};
// @lc code=end

