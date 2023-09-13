var Trie = function() {
    this.son = [];
    this.end = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if(!word.length) {
        this.end = true;
        return ;
    }
    if(this.son[word[0]])this.son[word[0]].insert(word.slice(1));
    else {
        this.son[word[0]] = new Trie();
        this.son[word[0]].insert(word.slice(1));
    }
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if(!word.length)return !!this.end;
    if(!word.length)return Trie.end;
    if(this.son[word[0]])return this.son[word[0]].search(word.slice(1));
    return false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    if(!prefix.length)return true;
    if(this.son[prefix[0]])return this.son[prefix[0]].startsWith(prefix.slice(1));
    return false;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */