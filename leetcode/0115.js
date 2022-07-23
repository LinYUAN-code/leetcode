/**
 * @param {number[]} nums
 * @param {number[][]} sequences
 * @return {boolean}
 */
var sequenceReconstruction = function (nums, sequences) {
  // 拓扑排序
  let n = nums.length;
  let din = [];
  let e = [];
  for (let i = 1; i <= n; i++) e[i] = [];
  const addEdge = (a, b) => {
    e[a].push(b);
  };
  for (let x of sequences) {
    for (let i = 1; i < x.length; i++) {
      if (!din[x[i]]) din[x[i]] = 0;
      din[x[i]]++;
      addEdge(x[i - 1], x[i]);
    }
  }
  let q = [];
  for (let i = 1; i <= n; i++) {
    if (!din[i]) q.push(i);
  }
  while (q.length) {
    if (q.length !== 1) {
      return false;
    }
    let a = q.shift();
    for (let b of e[a]) {
      din[b]--;
      if (!din[b]) {
        q.push(b);
      }
    }
  }
  return true;
};
