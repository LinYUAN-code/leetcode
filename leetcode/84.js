/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
    // 1.每一个矩形的最低高度肯定是 柱子里面的高度
    // 2.枚举每一个柱子作为矩形最低高度--->只需要找到 左右两边第一个小于它的值即可--维护两个单调栈
    let l = [];
    let r = [];
    let st = [];
    let top = 0;
    let n = heights.length;
    st[top] = -1;
    heights[-1] = heights[n] = -1;
    for(let i=0;i<n;i++) {
        while(heights[st[top]]>=heights[i])top--;
        l[i] = st[top];
        st[++top] = i;
    }
    top = 0;
    st[top] = n;
    for(let i=n-1;i>=0;i--) {
        while(heights[st[top]]>=heights[i])top--;
        r[i] = st[top];
        st[++top] = i;
    }
    let ans = 0;
    for(let i=0;i<n;i++) {
        ans = Math.max(ans,(r[i]-l[i]-1)*heights[i]);
    }
    return ans;
};