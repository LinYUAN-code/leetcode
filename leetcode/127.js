/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList) {
    // 相当于是bfs了
    // 建图：
    // 1.每次只能改变一个字母
    // 5000 
    // 不过这道题目还有优化的方法--我们可以进行两端bfs
    let e = [];
    wordList = [beginWord,...wordList];
    for(let i=0;i<wordList.length;i++)
        e[i] = [];
    const check = function(a,b) {
        let d = 0;
        for(let i=0;i<a.length;i++)
            if(a[i]!==b[i])d++;
        return d==1;
    }
    for(let i=0;i<wordList.length;i++)
        for(let j=i+1;j<wordList.length;j++) {
            if(check(wordList[i],wordList[j])) {
                e[i].push(j);
                e[j].push(i);
            }
        }

    const bfs = function() {
        let q = [];
        q.push(0);
        let d = [];
        for(let i=0;i<wordList.length;i++)
            d[i] = -1;
        d[0] = 1;
        while(q.length) {
            let u = q.shift();
            if(wordList[u]===endWord)return d[u];
            for(let x of e[u]) {
                if(d[x]!=-1)continue;
                d[x] = d[u]+1;
                q.push(x);
            }
        }
        return 0;
    }
    return bfs();
};