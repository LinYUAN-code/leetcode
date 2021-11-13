/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
    // 第一眼看过去就应该是得要递归做了
    // 每一步递归需要干什么？如果遇到数组那么就再次递归
    const isNum = function(s) {
        return s.charCodeAt(0)>='0'.charCodeAt(0)&&s.charCodeAt(0)<='9'.charCodeAt(0);
    }
    const sol = function(s) {
        let ans = "";
        // console.log(s);
        for(let i=0;i<s.length;i++) {
            if(isNum(s[i])) {
                let end = i+1;
                while(isNum(s[end])) {
                    end++;
                }
                let time = parseInt(s.slice(i,end),10);
                // 寻找需要进行递归的字符
                let top = 0;
                let tmp = "";
                let j = end;
                for(;j<s.length;j++) {
                    if(s[j]==='[') {
                        top++;
                        if(j===end)continue;
                    } else if(s[j]===']') {
                        top--;
                        if(top===0) {
                            break;
                        }
                    }
                    tmp += s[j];
                }
                tmp = sol(tmp);
                i = j;
                for(let j=0;j<time;j++)ans += tmp;
            } else {
                ans += s[i];
            }
        }
        return ans;
    }
    return sol(s);
};