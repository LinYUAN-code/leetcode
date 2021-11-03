/*
 * @lc app=leetcode.cn id=474 lang=cpp
 *
 * [474] 一和零
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int findMaxForm(vector<string>& strs, int m, int n) {

        for(int i=1;i<=strs.size();i++)
        {
            a[i] = count(strs[i-1],'0');
            b[i] = count(strs[i-1],'1');
        }
        for(int i=1;i<=strs.size();i++)
            for(int j=m;j>=a[i];--j)
                for(int k=n;k>=b[i];--k)
                    f[j][k] = max(f[j][k],f[j-a[i]][k-b[i]]+1);
        return f[m][n];
    }
    // 二维背包问题
    int a[606];
    int b[605];
    int f[105][105];
    int count(string u,char p)
    {
        int num = 0;
        for(int i=0;i<u.size();i++)
            if(u[i] == p)num++;
        return num;
    }
};
// @lc code=end

