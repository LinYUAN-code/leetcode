/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findAllConcatenatedWordsInADict = function(words) {
    // 连接词
    // 还真有点难
    // 暴力:对于每一个单词我们都可以递归处理
    // 比如  aaabbb ---> aaa 以及 bbb 是不是大于2
    // 然后我们就可以求出所有的连接词了
    // 考虑记忆化搜索--对于每一个单词 划分方法有 n*m种 
    // 列表里面还可能有空串-->如果列表里面有空串的话 直接把空串忽略就行了--空串压根不是单词
    // 其实这道题目可以用字典树去做--虽然哈希看起来也可以做,但是好像有点极限
    // 将所有的单词加入到字典树里面--.--然后每一个单词的尾端都连接到字典树的开头
    // 但是可能存在多种情况--比如单词词尾部并不是字典树的叶子节点--那么这时候匹配就可以选择是继续向下走还是直接返回字典树的根节点
    // 这里的这种情况应该不会很复杂--所以直接暴力搜索算了
    // 但是直接暴力会被某些用例卡住--比如 a,aa,aaa,aaaaa...b...-.-这种用例的情况下会一直选择递归--时间复杂度2^n
    // 所以我们直接开启记忆化?---记忆化对我们的最差时间复杂度其实没有关系--想想为什么哈哈
    // 其实我们可以只在字典树里面放 非连接词-.-这样直接缩小了搜索空间-.-并且避免了上面的最差情况.
    words = words.filter(v=>{
        if(v)return true;
    })
    if(!words)return [];
    let tri = [];
    let w = [];
    let idx = 0;
    let mp = {};
    for(let i=0;i<1000000;i++)tri[i] = [];
    const insert = function(s) {
        let fa = 0;
        for(let i=0;i<s.length;i++) {
            let c = s.charCodeAt(i) - 97;
            if(!tri[fa][c])tri[fa][c] = ++idx;
            fa = tri[fa][c];
        }
        w[fa] = 1;
    }
    const find = function(s,mode) {
        if(mode && typeof mp[s] !== 'undefined') {
            return mp[s];
        }
        let fa = 0;
        for(let i=0;i<s.length;i++) {
            let c = s.charCodeAt(i) - 97;
            if(!tri[fa][c])return false;//不存在直接报错
            fa = tri[fa][c];
            // 找到一个
            if(mode && i===s.length-1 && w[fa]) {
                mp[s] = true;
                return true;
            }
            if(w[fa]) { //到达单词结尾--可以选择
                if(find(s.slice(i+1),true))return true;
            }
        }
        if(mode)mp[s] = false;
        return false;
    }
    let ans = [];
    words.sort((a,b)=>{
        return a.length - b.length;
    });
    words.forEach(v => {
        if(find(v,false))ans.push(v);
        else insert(v);
    })
    return ans;
};