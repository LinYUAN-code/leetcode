/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let num = 0;
  for (let x of text) {
    if (x === " ") num++;
  }
  let arr = text.split(" ");
  arr = arr.filter((v) => {
    return v.length;
  });
  if (arr.length === 1) {
    return arr[0] + " ".repeat(num);
  }
  let k = Math.floor(num / (arr.length - 1));
  let ans = arr[0];
  for (let i = 1; i < arr.length; i++) {
    ans += " ".repeat(k) + arr[i];
  }
  ans += " ".repeat(num - k * (arr.length - 1));
  return ans;
};
