/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function(words, word1, word2) {
    let a=-1,b=-1;
    let ans = 9999999;
    // 枚举以word1或者word2作为位置靠后的单词
    for(let i=0;i<words.length;i++) {
        if(word1 === words[i]) {
            a = i;
        } 
        if(word2 === words[i]) {
            b = i;
        }
        if(a !== -1 && b !== -1) {
            ans = Math.min(ans,Math.abs(a-b));
        }
    }
    return ans;
};