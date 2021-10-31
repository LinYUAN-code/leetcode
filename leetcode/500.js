/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(words) {
    let s = [new Set("qwertyuiop"),new Set("asdfghjkl"),new Set("zxcvbnm")];
    return words.filter((value)=>{
        value = value.toLowerCase();
        let id;
        s.some((se,index)=>{
            if (se.has(value[0])){
                id = index;
                return true;
            }
        })
        for(let i=1;i<value.length;i++) {
            let tem;
            s.some((se,index)=>{
                if (se.has(value[i])){
                    tem = index;
                    return true;
                }
            })
            if (tem!=id) {
                return false;
            }
        }
        return true;
    })
};