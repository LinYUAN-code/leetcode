/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  // 贪心寻找最大块
  let ans = -1;
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = Math.max(ans, arr[i]);
    if (ans === i) {
      res++;
    }
  }
  return res;
};
