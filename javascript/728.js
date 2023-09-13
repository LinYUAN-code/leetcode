/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    let ans = [];
    const check = (n)=>{
        let d = n;
        while(n) {
            let c = n%10;
            if(d%c!==0)return false;
            n = Math.floor(n/10);
        }
        return true;
    }
    for(let i=left;i<=right;i++) {
        if(check(i))ans.push(i);
    }
    return ans;
};