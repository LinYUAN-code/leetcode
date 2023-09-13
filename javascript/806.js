/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
 var numberOfLines = function(widths, s) {
    let now = 0;
    let num = 1;
    let b = 'a'.charCodeAt(0)
    for(let x of s) {
        if(widths[x.charCodeAt(0)-b]+now>100) {
            now = widths[x.charCodeAt(0)-b];
            num++;
        } else {
            now += widths[x.charCodeAt(0)-b];
        }
    }
    return [num,now];
};