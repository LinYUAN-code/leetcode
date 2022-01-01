/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
 var construct2DArray = function(original, m, n) {
    if(original.length !== m*n)return [];
    let ans = [];
    for(let i=0;i<m;i++) {
        let tmp = [];
        for(let j=0;j<n;j++) {
            tmp.push(original[i*n+j]);
        }
        ans.push(tmp);
    }
    return ans;
};