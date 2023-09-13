/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canReorderDoubled = function(arr) {
    // 对于绝对值小的数字先放
    arr = arr.sort((a,b)=>{
        a = a<0?-a:a;
        b = b<0?-b:b;
        return a - b;
    });
    let mp = {};
    for(let x of arr) {
        if(typeof mp[x] === 'undefined')mp[x] = 0;
        mp[x]++;
    }
    let n = arr.length;
    let ans = [];
    // console.log(arr);
    // console.log(mp);
    let count = 0;
    for(let i=0;i<n;i++) {
        if(!mp[arr[i]])continue;
        if(count===arr.length/2)return true;
        if(!mp[arr[i]*2]) {
            return false;
        }
        mp[arr[i]]--;
        mp[arr[i]*2]--;
    }
    return true;
};