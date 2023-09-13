/**
 * @param {number[]} data
 * @return {boolean}
 */
 var validUtf8 = function(data) {
    const toU = function(num) {
        let ans = "";
        for(let i=0;i<8;i++) {
            ans = "" + ((num>>i)&1) + ans;
        }
        return ans;
    }
    data = data.map(v=>{
        return toU(v);
    });
    const count1 = function(s) {
        let ans = 0;
        for(let i=0;i<s.length;i++) {
            if(s[i]==='1')ans++;
            else break;
        }
        return ans;
    }
    let pre = 0;
    for(let i=0;i<data.length;i++) {
        if(!pre) {
            let k  = count1(data[i]);
            if(k>4 || k===1)return false;
            if(!k)continue;
            pre = k-1;
            continue;
        }
        pre--;
        if(data[i][0]!=='1' || data[i][1]!=='0')return false;
    }
    return pre===0;
};