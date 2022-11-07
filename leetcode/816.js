/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (s) {
  // 4<=s<=12
  // 暴力枚举就好了
  s = s.slice(1, -1);
  let ans = [];
  const getValid = (s) => {
    let ans = [];
    if (s[0] !== "0" || s === "0") ans.push(s);
    let n = s.length;
    for (let i = 1; i < n; i++) {
      if ((i !== 1 && s[0] === "0") || s[n - 1] === "0") {
        continue;
      }
      ans.push(s.slice(0, i) + "." + s.slice(i));
    }
    return ans;
  };
  for (let i = 1; i < s.length; i++) {
    let s1 = s.slice(0, i);
    let s2 = s.slice(i);
    let arr1 = getValid(s1);
    if (arr1.length) {
      let arr2 = getValid(s2);
      arr2.forEach((s2) => {
        arr1.forEach((s1) => {
          ans.push(`(${s1}, ${s2})`);
        });
      });
    }
  }
  return ans;
};


