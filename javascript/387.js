/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let mp = {};
    for(let x of s) {
        if(!mp[x])mp[x] = 1;
        else mp[x]++;
    }
    for(let x in mp) {
        if(mp[x]===1)
            for(let i=0;i<s.length;i++)
                if(s[i]===x)return i;
    }
    return -1;
};