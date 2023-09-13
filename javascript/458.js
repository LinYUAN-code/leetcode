/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
 var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    // 信息论
    let n = Math.floor(minutesToTest/minutesToDie) + 1;
    return Math.ceil(Math.log2(buckets)/Math.log2(n));
};