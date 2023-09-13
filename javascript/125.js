/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-zA-Z]/g,"").toUpperCase()
    console.log(s);
    let l =0,
        r =s.length-1;
    while(l<r) {
        if (s[l] !== s[r])return false;
        l++;
        r--;
    }
    return true;
};