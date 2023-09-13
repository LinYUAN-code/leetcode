/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  let ans = [];
  let arr = s.split("");
  const n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      arr[i] = [arr[i].toUpperCase(), arr[i].toLowerCase()];
    }
  }
  const dfs = (u, arr, ns) => {
    if (u === n) {
      ans.push(ns);
      return;
    }
    if (arr[u].length === 2) {
      dfs(u + 1, arr, ns + arr[u][0]);
      dfs(u + 1, arr, ns + arr[u][1]);
    } else {
      dfs(u + 1, arr, ns + arr[u]);
    }
  };
  dfs(0, arr, "");
  return ans;
};
