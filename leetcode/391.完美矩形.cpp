/*
 * @lc app=leetcode.cn id=391 lang=cpp
 *
 * [391] 完美矩形
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    bool isRectangleCover(vector<vector<int>>& rectangles) {
        int INF = 1e9;
        int w=-INF,s=INF,l=INF,r=-INF;
        int tot = 0;
        map<pair<int,int>,int> mp;
        for(int i=0;i<rectangles.size();i++)
        {
            w = max(w,rectangles[i][3]);
            s = min(s,rectangles[i][1]);
            l = min(l,rectangles[i][0]);
            r = max(r,rectangles[i][2]);
            mp[{rectangles[i][0],rectangles[i][1]}]++;
            mp[{rectangles[i][2],rectangles[i][3]}]++;
            mp[{rectangles[i][0],rectangles[i][3]}]++;
            mp[{rectangles[i][2],rectangles[i][1]}]++;
            tot += (rectangles[i][2]-rectangles[i][0])*(rectangles[i][3]-rectangles[i][1]);
        }
        if(tot!=(w-s)*(r-l))
            return false;
        mp[{l,s}]++;
        mp[{l,w}]++;
        mp[{r,s}]++;
        mp[{r,w}]++;
        for(auto t:mp)
            if(t.second%2)return false;
        return true;
    }
    /*
         首先想到面积判断：找出上下左右边界---计算面积
         再和所有的小矩形面积和比较

         但是这样存在（部分覆盖，部分空缺）的情况
         我们观察可以发现除了--左上，左下，右上，右下四个边界点
         所有点的出现次数都是偶数次---所以我们可以统计点出现的奇偶性来判断
         是不是存在空缺
     */
};
