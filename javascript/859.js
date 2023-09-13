/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var buddyStrings = function(s, goal) {
    // 题目很简单--坑有点多
    if(s.length!==goal.length)return false;
    let n1 = -1,
        n2 = -1;
    for(let i=0;i<s.length;i++) {
        if(s[i]!==goal[i]) {
            if(n1===-1) {
                n1 = i;
            } else if(n2===-1){
               n2 = i;
               if(s[n1]!==goal[n2] || s[n2]!==goal[n1])return false;          
            } else {
                return false;
            }
        }
    }
    // 
    if(n1===-1) {
        let mm = {};
        for(let i=0;i<s.length;i++) {
            if(mm[s[i]])return true;
            mm[s[i]] = true;
        }
    }
    return n1!==-1 && n2!==-1;
};