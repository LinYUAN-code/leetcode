/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let sum = 0;
  const n = s.length;
  const vowels = ["a", "e", "i", "o", "u"];
  vowels.push(...vowels.map((v) => v.toUpperCase()));
  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) !== -1) {
      sum += i < n / 2 ? 1 : -1;
    }
  }
  return sum === 0;
};
