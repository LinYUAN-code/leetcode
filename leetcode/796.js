/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var rotateString = function(s, goal) {
    if(s.length !== goal.length)return false;
    // 暴力模拟 n^2
    // let n = s.length;
    // for(let st=0;st<n;st++) {
    //     for(let j=0;j<n;j++) {
    //         let c = (st+j)%n;
    //         if(s[c] !== goal[j])break;
    //         if(j==n-1)return true;
    //     }
    // }
    // 其实我们只需要查看s+s中是否包含goal就可以了 时间复杂度n^2
    // 查找是否包含--可以使用kmp算法--时间复杂度O(n)
    s += s;
    if(s.match(goal))return true;
    return false;
};