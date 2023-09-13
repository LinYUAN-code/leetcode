/**
 * @param {string[]} words
 * @return {number}
 */
 var maxProduct = function(words) {
    // 用一个26为的数字来表示单词
    // 最后比较单词是否相同
    // 但是js的位运算效率并不高
    let f = [];
    const handle = function(s) {
        let ans = 0;
        for(let i=0;i<s.length;i++) {
            ans |= 1<<(s.charCodeAt(i)-97);
        }
        return ans
    }
    const max = Math.max;
    for(let i=0;i<words.length;i++) {  
        f[i] = handle(words[i]);
    }
    let ans = 0;
    for(let i=0;i<words.length;i++)
        for(let j=i+1;j<words.length;j++)
            if(!(f[i]&f[j]))
                ans = max(ans,words[i].length*words[j].length);
    return ans;
};