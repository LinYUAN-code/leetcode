/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
 var loudAndRich = function(richer, quiet) {
    // 找出比persion i 有钱的人里面最安静的
    // 首先我们得找出有钱形成的拓扑图
    // 然后就可以直接算出来了
    let d = [];
    let e = [];
    let f = [];
    let n = quiet.length;
    for(let i=0;i<n;i++) {
        e[i] = [];
        d[i] = 0;
        f[i] = i;
    }
    for(let x of richer) {
        e[x[0]].push(x[1]);
        d[x[1]]++;
    }
    let seq = [];
    const bfs = function() {
        let q = [];
        for(let i=0;i<n;i++) {
            if(!d[i])q.push(i);
        }
        while(q.length) {
            let x = q.shift();
            seq.push(x);
            for(let i=0;i<e[x].length;i++) {
                let j = e[x][i];
                d[j]--;
                if(!d[j])q.push(j);
            }
        }
    }
    bfs();
    let minn = 0x3f3f3f3f;
    const min = Math.min;
    for(let u of seq) {
        for(let j=0;j<e[u].length;j++) {
            let k = e[u][j];
            if(quiet[f[k]]>quiet[f[u]]) {
                f[k] = f[u];
            }
        }
    }
    return f;
};