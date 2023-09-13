/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
 var repeatedStringMatch = function(a, b) {
    // 问题可以看作是对于无限循环的a 然后b对其进行匹配找到第一个匹配的下标
    // 对于这种循环匹配的问题已经存在优秀的算法可以解决，但是谁记得住啊....
    // 我们这里想办法将循环匹配问题转化成非循环匹配问题
    // 首先循环串的长度肯定是有限制的
    // 这个长度的上届是 a.length * ([b.length/a.length] + 1)
    // 也就是然后我们使用KMP算法--时间复杂度也就是（M + N）的
    // 但是要写KMP算法 .... 好烦啊
    let pn = a.length;
    let n = a.length;
    let m = b.length;
    let k = Math.ceil(m/n) + 1;
    a = a.repeat(k);
    n = a.length;
    a = " " + a;
    b = " " + b;
    let ne = [];
    ne[0] = ne[1] = 0;
    // 求ne数组
    for(let i=2,j=0;i<=m;i++) {
        while(j&&b[i]!==b[j+1])j = ne[j];
        if(b[i]==b[j+1])j++;
        ne[i] = j;
    }
    // console.log(k,n);
    // console.log(a);
    // 匹配
    for(let i=1,j=0;i<=n;i++) {
        while(j&&a[i]!==b[j+1])j = ne[j];
        if(a[i] === b[j+1])j++;
        if(j===m) { //匹配成功
            // console.log(i);
            return Math.ceil(i/pn);
        }
    }
    return -1;
};