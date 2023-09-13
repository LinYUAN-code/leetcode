/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
 var getHint = function(secret, guess) {
    let ma = {};
    let ans1 = 0;
    let ans2 = 0;
    for(let i=0;i<secret.length;i++) {
        if(!ma[secret[i]])
            ma[secret[i]] = 1;
        else
            ma[secret[i]]++;
    }
    for(let i=0;i<guess.length;i++) {
        if(guess[i]===secret[i]) {
            ans1++;
            ma[secret[i]]--;
        }
    }
    for(let i=0;i<guess.length;i++) {
        if(guess[i]===secret[i])continue;
        if(ma[guess[i]]) {
            ans2++;
            ma[guess[i]]--;
        }
    }
    return `${ans1}A${ans2}B`;
};