/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  /*
        判断二分图
            染色法
    */
  const e = [];
  for (let i = 1; i <= n; i++) e[i] = [];
  for (let x of dislikes) {
    e[x[0]].push(x[1]);
    e[x[1]].push(x[0]);
  }
  const color = {};
  const dye = (u) => {
    if (!color[u]) color[u] = 1;
    for (let x of e[u]) {
      if (!color[x]) {
        color[x] = color[u] === 1 ? 2 : 1;
        if (!dye(x)) return false;
      }
      if (color[u] === color[x]) return false;
    }
    return true;
  };
  for (let i = 1; i <= n; i++) {
    if (!dye(i)) return false;
  }
  return true;
};
