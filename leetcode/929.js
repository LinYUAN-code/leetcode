/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
    let mp = {};
    for(let x of emails) {
        let arr = x.split("@");
        let p = arr[0].split("+")[0].split(".").join("");
        mp[p+"@"+arr[1]] = 1;
    }
    let ans = 0;
    for(let x in mp) {
        ans++;
    }
    return ans;
};