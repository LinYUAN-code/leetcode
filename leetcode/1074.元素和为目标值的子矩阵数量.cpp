/*
 * @lc app=leetcode.cn id=1074 lang=cpp
 *
 * [1074] 元素和为目标值的子矩阵数量
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int numSubmatrixSumTarget(vector<vector<int>>& matrix, int target) {
        if(target>1e7||target<-1e7)return 0;
        int ans = 0;
        int n = matrix.size();
        int m = matrix[0].size();
        for(int i=0;i<n;i++)
            for(int j=0;j<m;j++)
            {
                matrix[i][j] = (i-1>=0?matrix[i-1][j]:0) + \
                (j-1>=0?matrix[i][j-1]:0) - \
                ((i-1)>=0&&(j-1)>=0?matrix[i-1][j-1]:0) + matrix[i][j];
            }
        
        for(int l=0;l<m;l++)
            for(int r=l;r<m;r++)
            {
                unordered_map<int,int> mp;
                mp[0]++;
                for(int i=0;i<n;i++)
                {
                    int t = matrix[i][r]-((l-1)>=0?matrix[i][l-1]:0)-target;
                    ans += mp[t];
                    mp[matrix[i][r]-((l-1)>=0?matrix[i][l-1]:0)]++;
                }
            }

        return ans;
    }
    // n^2 枚举所有的子矩阵就ok了
    //但是枚举的过程也有技巧
    //每次枚举[l,r]之间的元素，然后从上到下hash统计
};
// @lc code=end

