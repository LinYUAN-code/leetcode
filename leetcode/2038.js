/**
 * @param {string} colors
 * @return {boolean}
 */
 var winnerOfGame = function(colors) {
    // 统计可删除A和可删除B的数目就好了
    let a = 0;
    let b = 0;
    for(let i=1;i<colors.length-1;i++) {
        if(colors[i]===colors[i-1] && colors[i]===colors[i+1]) {
            if(colors[i]==='A')a++;
            else b++;
        }
    }
    return a>b;
};