/*
 * @lc app=leetcode.cn id=10 lang=cpp
 *
 * [10] 正则表达式匹配
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    bool isMatch(string s, string p) {
        f[0][0] = 1;

        for(int j=1;j<=p.size();j++)
            if(p[j-1] == '*')
                f[0][j] = f[0][j-2];
        for(int i=1;i<=s.size();i++)
            for(int j=1;j<=p.size();j++)
            {
                if(p[j-1] == '*')
                {
                    if(s[i-1]==p[j-2] || p[j-2] == '.')
                    {
                        f[i][j] = f[i-1][j] || f[i][j-2];
                    } 
                    else 
                        f[i][j] = f[i][j-2];
                }
                else
                {
                    if(s[i-1]==p[j-1] || p[j-1] == '.')
                        f[i][j] = f[i-1][j-1];
                    else
                        f[i][j] = false;
                }
            }

        return f[s.size()][p.size()];
    }
    int f[21][31];
    // 动态规划
    /*
        定义f[i][j] 
        为s串前i个是否和p串前j个字符是否匹配

        分情况
            如果当前字符式不是*那么
                if(s[i]==p[j] || p[j] == '.') //匹配
                    f[i][j] = f[i-1][j-1];
                else //不匹配 
                    f[j][j] = false;
            如果当前字符是*
                xxxxx
                xxxx*

                如果s[i] 和 p[j-1] 不匹配
                    那么 f[i][j] = f[i][j-2] //让*使得p[j-1]这一个字符失效
                如果s[i] 和 p[j-1] 匹配
                    那么 f[i][j] = f[i-1][j-2] || f[i][j-2];

    */
};
// @lc code=end

