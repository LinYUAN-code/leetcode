/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start, end) {
  let i = 0;
  let j = 0;
  let n = start.length;
  for (; i < n && j < n; ) {
    while (i < n && start[i] === "X") {
      i++;
    }
    while (j < n && end[j] === "X") {
      j++;
    }
    if (i === n || j === n) break;
    // console.log(i,start[i],j,end[j]);
    if (start[i] !== end[j]) {
      return false;
    }
    if (start[i] === "R" && i > j) {
      return false;
    }
    if (start[i] === "L" && i < j) {
      return false;
    }
    i++;
    j++;
  }
  while (i < n && start[i] === "X") {
    i++;
  }
  while (j < n && end[j] === "X") {
    j++;
  }
  return i === n && j === n;
};
