/**
 * @param {string} code
 * @return {boolean}
 */
 var isValid = function(code) {
    // 栈解析
    /*
        总共有四种词法单元
        1.<TAG_NAME>
        2.</DIV>
        3.TAG_CONTENT
     */
    let i = 0;
    let stk = [];
    const getLen = () => {
        return code.length - i;
    }
    const isBig = (s) => {
        for(let ch of s) {
            if(ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90)continue;
            else return false;
        }
        return true;
    }
    const check1 = () => {
        let len = getLen();
        if(len<3)return false;
        if(code[i]==='<') {
            let j = code.indexOf(">",i+1);
            if(j===-1)return false;
            const TAG_NAME = code.slice(i+1,j);
            if(TAG_NAME.length===0 || TAG_NAME.length>9 || !isBig(TAG_NAME))return false;
            // 匹配成功
            i = j+1;
            return TAG_NAME;
        }
        return false;
    }
    const check2 = () => {
        let len = getLen();
        if(len<4)return false;
        if(code[i]==='<' && code[i+1]==='/') {
            let j = code.indexOf(">",i+2);
            if(j===-1)return false;
            const TAG_NAME = code.slice(i+2,j);
            if(TAG_NAME.length===0 || TAG_NAME.length>9 || !isBig(TAG_NAME))return false;
            // 匹配成功
            i = j+1;
            return TAG_NAME;
        }
        return false;
    }
    const check3 = () => {
        let res = code.slice(i).match(/(([\s>\w!\/\]\[])*(<!\[CDATA\[(.(?!(\]\]>)))*.?\]\]>)*([\s>\w!\/\]\[])*)*/);
        if(!res)return false;
        // console.log(res);
        i = i + res[0].length;
        return true;
    }
    let t = check1();
    if(!t)return false;
    if(!isBig(t))return false;
    stk.push(t);
    let pre = 0;
    while(i<code.length) {
        let t = check1();
        // console.log(t);
        if(t) {
            stk.push(t);
        }
        check3();
        t = check2();
        // console.log(t);
        if(t) {
            if(stk.pop() !== t)return false;
            if(!stk.length&&i<code.length)return false;
        }
        if(pre === i)return false;
        pre = i;
    }
    return stk.length===0;
};