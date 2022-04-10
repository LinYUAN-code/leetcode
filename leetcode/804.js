/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    let mp = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let ans = 0;
    let cp = {};
    const c = (s) => {
        let ans = "";
        for(let x of s) {
            ans += mp[x.charCodeAt(0)-"a".charCodeAt(0)];
        }
        return ans;
    }
    for(let x of words) {
        let t = c(x);
        if(!cp[t]) {
            ans++;
            cp[t] = 1;
        }
    }
    return ans;
};