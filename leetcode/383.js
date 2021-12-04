/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    let mp = {};
    for(let x of magazine) {
        if(!mp[x])mp[x] = 1;
        else mp[x]++;
    }

    for(let x of ransomNote) {
        if(!mp[x])return false;
        mp[x]--;
    }
    return true;
};