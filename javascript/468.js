/**
 * @param {string} queryIP
 * @return {string}
 */
 var validIPAddress = function(queryIP) {
    const N = "Neither";
    const checkIpv6 = (s) => {
        arr = s.split(":");
        if(arr.length !== 8) {
            return N;
        }
        for(let x of arr) {
            if(x.length>4 || x.length ===0) {
                return N;
            }
            for(let ch of x) {
                if(ch>="a" && ch<="f")continue;
                if(ch>="A" && ch<="F")continue;
                if(ch>="0" && ch<="9")continue;
                return N;
            }
        }
        return "IPv6";
    }
    const checkIpv4 = (s) => {
        arr = s.split(".");
        if(arr.length !== 4)return N;
        for(let x of arr) {
            if(x.length!==1 && x[0]==='0')return N;
            if(!x.length)return N;
            for(let ch of x) {
                if(ch<"0" || ch>"9")return N;
            }
            let num = parseInt(x);
            if(num<0 || num>255) {
                return N;
            }
        }
        return "IPv4";
    }

    for(let x of queryIP) {
        if(x==='.') {
            return checkIpv4(queryIP);
        }
        if(x===":") {
            return checkIpv6(queryIP);
        }
    }
    return "Neither";
};