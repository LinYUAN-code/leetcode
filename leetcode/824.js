/**
 * @param {string} sentence
 * @return {string}
 */
 var toGoatLatin = function(sentence) {
    let base = "a";
    let ans = "";
    sentence = sentence.split(" ");
    for(let x of sentence) {
        if(['a','e','i','o','u','A','E',"I","O",'U'].includes(x[0])) {
            x += "ma";
        } else {
            x = x.slice(1) + x[0] + "ma"
        }
        x += base;
        ans += x + " ";
        base += "a";
    }
    return ans.slice(0,ans.length-1);
};