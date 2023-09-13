/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  let unSames = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      unSames.push([s1[i], s2[i]]);
    }
  }
  if (!unSames.length) return true;
  if (unSames.length === 2) {
    if (unSames[0][0] === unSames[1][1] && unSames[0][1] === unSames[1][0]) {
      return true;
    }
  }
  return false;
};
