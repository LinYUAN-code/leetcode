/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  if (!number) return "";
  let arr = [];
  for (let x of number) {
    if (!isNaN(x) && x !== " ") {
      arr.push(x);
    }
  }
  let s = arr.join("");
  let n = arr.length;
  let ans = "";
  for (let i = 0; i < n; i++) {
    const rest = n - i;
    if (rest <= 4) {
      switch (rest) {
        case 4: {
          ans += s.slice(i, i + 2) + "-" + s.slice(i + 2) + "-";
          break;
        }
        case 3: {
          ans += s.slice(i, i + 3) + "-";
          break;
        }
        case 2: {
          ans += s.slice(i, i + 2) + "-";
          break;
        }
      }
      break;
    }
    ans += s.slice(i, i + 3) + "-";
    i += 2;
  }
  return ans.slice(0, -1);
};
