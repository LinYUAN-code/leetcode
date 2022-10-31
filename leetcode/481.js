/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function (n) {
  let s = [1, 2, 2];
  let i = 2;
  let j = 3;
  let ans = 1;
  while (j < n) {
    let num = s[i];
    let val = 3 - s[j - 1];
    while (num && j < n) {
      s[j++] = val;
      if (val === 1) ans++;
      num--;
    }
    i++;
  }
  return ans;
};
