/**
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
    let ans = [];
    let n = arr.length;
    arr.sort((a,b)=>{
        return a-b;
    });
    let minn = 99999999;
    for(let i=1;i<n;i++) {
        minn = Math.min(minn,arr[i]-arr[i-1]);
    }
    for(let i=1;i<n;i++) {
        if(arr[i]-arr[i-1]===minn) {
            ans.push([arr[i-1],arr[i]]);
        }
    }
    return ans;
};