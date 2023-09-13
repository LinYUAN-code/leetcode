/*
 * @lc app=leetcode.cn id=1190 lang=cpp
 *
 * [1190] 反转每对括号间的子串
 */
#include <lin.h>
// @lc code=start
class Solution {
public:
    string reverseParentheses(string s) {
        stack<char> st;
        for(int i=0;i<s.size();i++)
        {
            if(s[i]==')')
            {
                queue<char> q;
                while(st.top()!='(')
                {
                    q.push(st.top());
                    st.pop();
                }
                st.pop();
                while(q.size())
                {
                    st.push(q.front());
                    q.pop();
                }
                continue;
            }
            st.push(s[i]);
        }

        string ans = "";
        while(st.size())
        {
            ans += st.top();
            st.pop();
        }
        reverse(ans.begin(),ans.end());
        return ans;
    }
};
// @lc code=end

