/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
    let p = paragraph.split(/[\s,.!;\?']/g);
    p = p.filter(v=>v);
    p = p.map(v=>{
        return v.toLowerCase();
    })
    let mp = {};
    for(let x of banned) {
        mp[x] = 1;
    }
    let num = {};
    let ans = "1";
    num[ans] = 0;
    for(let x of p) {
        if(mp[x]) {
            continue;
        }
        if(!num[x]) {
            num[x] = 0;
        }
        num[x]++;
        if(num[x]>num[ans]) {
            ans = x;
        }
    }
    return ans;
};