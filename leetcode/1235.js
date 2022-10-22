/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  // dp[i] 表示做前i 工作所能获取到的最大利润
  const dp = [];
  dp[0] = 0;
  let n = startTime.length;
  const jobs = new Array(n).fill(0).map((_, i) => {
    return [startTime[i], endTime[i], profit[i]];
  });
  jobs.sort((a, b) => a[1] - b[1]);
  jobs[-1] = [];
  jobs[-1][1] = -99;
  const find = (i) => {
    let l = -1;
    let r = i - 1;
    while (l < r) {
      let mid = (l + r + 1) >> 1;
      if (jobs[mid][1] <= jobs[i][0]) l = mid;
      else r = mid - 1;
    }
    return l;
  };
  for (let i = 1; i <= n; i++) {
    let k = find(i - 1);
    dp[i] = Math.max(dp[i - 1], dp[k + 1] + jobs[i - 1][2]);
  }
  return dp[n];
};
