/**
 * @param {number[]} score
 * @return {string[]}
 */
 var findRelativeRanks = function(score) {
    let nx = score.slice(0);
    nx = nx.map((v,index) => {
        return {
            val: v,
            id: index
        }
    });
    nx = nx.sort((a,b)=>{
        return b.val - a.val;
    })
    let medal = ["Gold Medal","Silver Medal","Bronze Medal"];
    for(let i = 0;i<nx.length;i++) {
        let x = nx[i];
        if(i<3) {
            score[x.id] = medal[i];
        } else {
            score[x.id] = i + 1 + "";
        }   
    }
    return score;
};