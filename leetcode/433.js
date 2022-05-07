/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
 var minMutation = function(start, end, bank) {
    let mp = {};
    for(let x of bank) {
        mp[x] = 1;
    }
    let q = [];
    q.push({
        s: start,
        d: 0
    });
    let cc = {};
    cc[start] = 1;
    let p = ['A','C','G','T'];
    while(q.length) {
        let u = q.shift();
        if(u.s === end)return u.d;
        for(let i=0;i<8;i++) {
            for(let j=0;j<4;j++) {
                let s = u.s.slice(0,i) + p[j] + u.s.slice(i+1);
                if(cc[s] || !mp[s])continue;
                q.push({
                    s,
                    d: u.d+1
                });
                cc[s] = 1;
            }
        }
    }
    return -1;
};