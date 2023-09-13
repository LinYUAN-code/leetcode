/**
 * @param {number} n
 * @return {number}
 */
 var integerReplacement = function(n) {
    const d = [];
    const bfs = function() {
        let q = [];
        q.push(n);
        d[n] = 0;
        while(q.length) {
            let u = q.shift();
            if(u===1)return d[u];
            if(u%2==0) {
                let j = u/2;
                if(typeof d[j] === 'undefined') {
                    d[j] = d[u] + 1;
                    q.push(j);
                }
            } else {
                let j = u + 1;
                if(typeof d[j] === 'undefined') {
                    d[j] = d[u] + 1;
                    q.push(j);
                }

                j = u - 1;
                if(typeof d[j] === 'undefined') {
                    d[j] = d[u] + 1;
                    q.push(j);
                }
            }
        }
        return -1;
    };
    return bfs();
};