/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
    let mp = {};
    for(let i=0;i<order.length;i++) {
        mp[order[i]] = i;
    }
    const isok = (a,b) => {
        let n = Math.min(a.length,b.length);
        for(let i=0;i<n;i++) {
            if(mp[a[i]]<mp[b[i]])return true;
            else if(mp[b[i]]<mp[a[i]])return false;
        }
        return a.length <= b.length;
    }
    for(let i=1;i<words.length;i++) {
        if(!isok(words[i-1],words[i]))return false;
    }
    return true;
};