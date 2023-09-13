/*
 * @lc app=leetcode.cn id=1738 lang=cpp
 *
 * [1738] 找出第 K 大的异或坐标值
 */
#include <lin.h>
// @lc code=start
class Solution {
public:

    int kthLargestValue(vector<vector<int>>& matrix, int k) {
        int n = matrix.size();
        int m = matrix[0].size();
        vector<int> ans;
        for(int i=0;i<n;i++)
            for(int j=0;j<m;j++)
            {
                matrix[i][j] ^= ((i-1)>=0?matrix[i-1][j]:0);
                matrix[i][j] ^= ((j-1)>=0?matrix[i][j-1]:0);
                matrix[i][j] ^= ((i-1)>=0&&(j-1)>=0?matrix[i-1][j-1]:0);
                ans.push_back(matrix[i][j]);
            }
        sort(ans.begin(),ans.end(),cmp);
        return ans[k-1];
    }
    // 求个异或前缀和就ok
    static bool cmp(int a,int b)
    {
        return a>b;
    }
};
// @lc code=end

