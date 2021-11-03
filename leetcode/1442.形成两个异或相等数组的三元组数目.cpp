/*
 * @lc app=leetcode.cn id=1442 lang=cpp
 *
 * [1442] 形成两个异或相等数组的三元组数目
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    int countTriplets(vector<int>& arr) {
        unordered_map<int,int> mp;
        int ans = 0;
        int sum = arr[0];
        unordered_map<int,int> mp1;
        unordered_map<int,int> mp2;
        mp1[0]++;
        mp2[0]=0;
        mp1[arr[0]]++;
        mp2[arr[0]]=1;
        for(int i=1;i<arr.size();i++)
        {
            sum ^= arr[i];
            ans += i*mp1[sum] - mp2[sum];
            mp1[sum]++;
            mp2[sum] += i+1;
            // cout<<ans<<endl;
        }
        return ans;
    }
    //问题转化为找出所有区间大小大于2的异或区间
    //比如 [l,r] 区间异或和为0 那么就可以参生 r-l个答案
    //怎么找全所有的异或区间呢？
    //可以暴力n^2
    //也可以用两个hash表进行巧妙的n
    //一个记录数目   一个记录i的和
    // ans += r*k - (i1+i2+...+ik) 
};
// @lc code=end

