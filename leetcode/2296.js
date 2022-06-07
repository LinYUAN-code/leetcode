var TextEditor = function() {
    // 维护两个栈
    this.left = [];
    this.right = [];
};

/** 
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function(text) {
    this.left.push(...text.split(""));
};

/** 
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function(k) {
    let ans = Math.min(k,this.left.length);
    for(let i=0;i<k;i++) {
        if(!this.left.length)break;
        this.left.pop();
    }
    return ans;
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function(k) {
    for(let i=0;i<k;i++) {
        if(!this.left.length)break ;
        let c = this.left.pop();
        this.right.push(c);
    }
    if(this.left.length<10)return this.left.join("");
    else return this.left.slice(this.left.length-10,this.left.length).join("");
};

/** 
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function(k) {
    for(let i=0;i<k;i++) {
        if(!this.right.length)break ;
        let c = this.right.pop();
        this.left.push(c);
    }
    if(this.left.length<10)return this.left.join("");
    else return this.left.slice(this.left.length-10,this.left.length).join("");
};

/**
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */