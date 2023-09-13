



// 只想到暴力写发--dp想了半天没想出来怎么做....
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var possiblyEquals = function(s1, s2) {
    let n = s1.length;
    let m = s2.length;
    
    let isChar = function(c) {
        return c>='a'&&c<='z';
    }
    
    let sol = function(s) {
        let ans = [];
        let tmp = [];
        if(s.length===0)return [""];
        if(isChar(s[0])) {
            let tmp = sol(s.slice(1));
            ans.push(...tmp.map(val=>[s[0],...val]));
        }
        for(let i=0;i<3&&i<s.length;i++) {
            if(isChar(s[i]))break;
            let num = parseInt(s.slice(0,i+1));
            let tmp = sol(s.slice(i+1));
            ans.push(...tmp.map(val=>[num,...val]));
        }
        return ans;
    }
    let check = function(s1,s2) {
        let i = 0;
        let j = 0;
        s1 = s1.slice();
        s2 = s2.slice();
        while(i<s1.length&&j<s2.length) {
            if(typeof s1[i] === 'number') {
                if(typeof s2[j] === 'number') {
                    if(s2[j]==s1[i]) {
                        i++;
                        j++;
                    } else if(s1[i]>s2[j]) {
                        s1[i]-=s2[j];
                        j++;
                    } else {
                        s2[j]-=s1[i];
                        i++;
                    }
                } else {
                    s1[i]--;
                    if(s1[i]==0)i++;
                    j++;
                }
            }else {
                if(typeof s2[j] === 'number') {
                    s2[j]--;
                    if(s2[j]===0)j++;
                    i++;
                } else {
                    if(s1[i]!==s2[j]) {
                        return false;
                    }
                    i++;
                    j++;
                }
            }
        }
        return i===s1.length && j===s2.length;
    }
    s1 = sol(s1);
    s2 = sol(s2);
    // console.log(s1.length);
    // console.log(s2.length);
    for(let x of s1)
        for(let y of s2) {
            if(check(x,y))return true;
        }
    return false;
};