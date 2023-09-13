/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  // 1.多指针
  // 2.二分
  let arr = {};
  let ans = 0;
  for (let i = 0; i < words.length; i++) {
    if (!arr[words[i][0]]) arr[words[i][0]] = [];
    arr[words[i][0]].push([i, 0]);
  }
  for (let ch of s) {
    if (arr[ch]) {
      const preN = arr[ch].length;
      for (let i = preN - 1; i >= 0; i--) {
        let x = arr[ch][i];
        let word = words[x[0]];
        let n = word.length;
        if (x[1] < n) {
          x[1] += 1;
          if (x[1] === n) {
            ans++;
          } else {
            if (!arr[word[x[1]]]) arr[word[x[1]]] = [];
            arr[word[x[1]]].push([x[0], x[1]]);
          }
        }
      }
      arr[ch] = arr[ch].slice(preN);
    }
  }
  return ans;
};
