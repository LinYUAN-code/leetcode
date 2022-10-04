/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let ans = 0;
  let num = 0;
  for (let x of s) {
    if (x === "(") {
      num++;
    } else {
      if (num) num--;
      else ans++;
    }
  }
  return ans + num;
};
