/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
 var findOcurrences = function(text, first, second) {
    let a = first + " " + second; 
    let ans = [];
    let j = -1;
    let tem = "";
    let n = a.length;
    for(let i=0;i+n+1<text.length;i++) {
        if(text.substr(i,n)===a && text[i+n]===' ' && (!i || text[i-1]===' ')) {
            // console.log(i);
            let j = i+n+1;
            let tem = "";
            while(text[j]!==' ' && j<text.length) {
                tem += text[j];
                j++;
            }
            ans.push(tem);
        }
    }
    return ans;
};