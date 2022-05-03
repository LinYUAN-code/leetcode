/**
 * @param {string[]} logs
 * @return {string[]}
 */
 var reorderLogFiles = function(logs) {
    let num = [];
    let al = [];
    for(let x of logs) {
        if(isNaN(x.split(" ")[1][0])) {
            al.push(x);
        } else {
            num.push(x);
        }
    }
    al.sort((a,b)=>{
        a = a.split(" ");
        b = b.split(" ");
        let ass = a.slice(1).join();
        let bss = b.slice(1).join();
        if(ass === bss) {
            if(a[0]<b[0])return -1;
            return 1;
        } 
        if(ass<bss) {
            return -1;
        }
        return 1;
    });
    return al.concat(num);
};