/**
 * @param {string[]} words
 * @return {string}
 */
 var alienOrder = function(words) {
    // 字典中的语言以及按照字典序排列
    // 那么我们可以知道哪些字母是大于哪些字母的--然后使用拓扑排序
    // 统计字母的入度
    const ind = {};
    const e = {};
    const greater = (a,b) => {
        if(a.length >= b.length && a.slice(0,b.length) === b)return ;

        for(let i=0;i<a.length&&i<b.length;i++) {
            if(a[i] !== b[i] && !e[a[i]].has(b[i]) ) {
                ind[b[i]]++;
                e[a[i]].add(b[i]);
                return ;
            } else if(a[i] !== b[i]) {
                return ;
            }
        }
    }
    for(let x of words) {
        for(let ch of x) {
            ind[ch] = 0;
            e[ch] = new Set();
        }
    }
    for(let i=0;i<words.length-1;i++) {
            let a = words[i];
            let b = words[i+1];
            // 无解
            if(a.length > b.length && a.slice(0,b.length) === b)return "";
            greater(a,b);
    }
    let q = [];
    let tot = 0;
    for(let key in ind) {
        tot++;
        if(!ind[key]) {
            q.push(key);          
        }
    }   
    let top = 0;
    while(top < q.length) {
        let u = q[top++];
        for(let ne of e[u].keys()) {
            ind[ne]--;
            if(!ind[ne]) {
                q.push(ne);
            }
        }
    }
    // 无解
    if(q.length!==tot)return "";
    return q.join("");
};