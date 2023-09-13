/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
 var shortestCompletingWord = function(licensePlate, words) {
    licensePlate = Array.from(licensePlate).map(v => {
        if(v >= 'a' && v<='z')return v;
        if(v >= 'A' && v<= 'Z')return v.toLowerCase();
        else return ""; 
    }).filter(v=>v).join("");
    const containe = function(s1,s2) {
        let mp = {};
        for(let x of s2) {
            if(!mp[x])mp[x] = 1;
            else mp[x]++;
        }
        for(let x of s1) {
            mp[x]--;
            if(!mp[x])mp[x] = -1;
        }
        for(let x in mp) {
            if(mp[x]>0)return false;
        }
        return true;
    }
    let ans = -1;
    for(let x of words) {  
        if(containe(x,licensePlate)) {
            if(ans === -1)ans = x;
            else if(ans.length > x.length)ans = x;
        }
    }
    return ans;
};