/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
    // 模拟
    let ch = [];
    let time = [];
    for(let i=0;i<tasks.length;i++) {
        let j = tasks[i].charCodeAt(0) - 'A'.charCodeAt(0);
        if(!ch[j]) {
            ch[j] = 0;
            time[j] = 1;
        }
        ch[j]++;
    }
    let now = 1;
    while(true) {
        let minn = 0x3f3f3f3f;
        let c;
        for(let i=0;i<26;i++) {
            if(ch[i]&&time[i]<minn) {
                minn = time[i];
                c = i;
            }
        }
        if(minn===0x3f3f3f3f)break;
        ch[c]--;
        if(time[c]>now)now = time[c]+1;
        else now++;
        time[c] = time[c] + n + 1;
    }
    return now-1;
};