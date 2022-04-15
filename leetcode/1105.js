/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
 var minHeightShelves = function(books, shelfWidth) {
    // 动态规划
    // f[i]
    // 时间复杂度n^2
    let f = [];
    f[0] = 0;
    f[-1] = 0;
    const inf = 999999999;
    const max = Math.max;
    const min = Math.min;
    for(let i=1;i<=books.length;i++) {
        f[i] = inf;
        let maxx = 0;
        let sum = 0;
        for(let j=i-1;j>=0;j--) {
            sum += books[j][0];
            if(sum>shelfWidth)break;
            maxx = max(maxx,books[j][1]);
            f[i] = min(f[i],f[j]+maxx);
        }
    }
    return f[books.length];
};