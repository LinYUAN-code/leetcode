/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  let words = sentence.split(" ");
  function startWith(a, b) {
    if (a.length < b.length) return false;
    for (let i = 0; i < b.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  for (let i = 0; i < words.length; i++) {
    if (startWith(words[i], searchWord)) return i + 1;
  }
  return -1;
};
