/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  let mp = {};
  let id = 1;
  for (let x of order) {
    mp[x] = id++;
  }
  return s
    .split("")
    .sort((a, b) => {
      if (!mp[a]) mp[a] = 99;
      if (!mp[b]) mp[b] = 99;
      return mp[a] - mp[b];
    })
    .join("");
};
