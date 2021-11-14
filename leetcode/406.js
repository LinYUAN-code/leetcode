/**
 * @param {number[][]} people
 * @return {number[][]}
 */
 var reconstructQueue = function(people) {
    // 2000
    //  留空法---挺不好想的
    const cmp = function(a,b) {
        if(a[0]===b[0]) {
            // 先排k大的那个人---因为是大于等于
            return b[1] - a[1];
        } 
        return a[0] - b[0];
    }
    people.sort(cmp);
    let ans = [];
    for(let i=0;i<people.length;i++) {
        let t = people[i][1] + 1;
        for(let j=0;j<people.length;j++) {
            if(!ans[j])
                t--;
            if(!t) {
                ans[j] = people[i];
                break;
            }
        }
    }
    return ans;
};