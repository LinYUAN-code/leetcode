/**
 * @param {string[]} words
 * @return {string}
 */
 var longestWord = function(words) {
    let mp = {};
    words.sort((a,b)=>{
        return a.length - b.length;
    });
    
    for(let x of words) {
        if(x.length===1)mp[x] = 1;
        else if(mp[x.split("").slice(0,x.length-1).join("")]) {
            mp[x] = 1;
        }
    }
    words.length = [];
    for(let k in mp) {
        words.push(k);
    }
    words.sort((a,b)=>{
        if(a.length===b.length) {
            return a<b?-1:1;
        }
        return b.length - a.length;
    })
    if(!words.length)return "";
    return words[0];
};