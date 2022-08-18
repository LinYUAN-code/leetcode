/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function (nums) {
  /*
        分情况讨论，什么情况下会是答案
        首先除了被删除的数字，其余数字的数量肯定得相同
        1. 被删除的数字为1
            1.1 所有数字为1
            1.2 其他数字不为1
        2. 被删除的数字不为1 --> max 
        
    */
  let ans = 1;
  let maxx = 0;
  let freg = {};
  let fregNum = {};
  for (let i = 0; i < nums.length; i++) {
    let x = nums[i];
    if (!freg[x]) {
      freg[x] = 1;
      if (!fregNum[1]) fregNum[1] = 1;
      else fregNum[1]++;
      maxx = Math.max(1, maxx);
    } else {
      fregNum[freg[x]]--;
      freg[x]++;
      if (!fregNum[freg[x]]) {
        fregNum[freg[x]] = 0;
      }
      fregNum[freg[x]]++;
      maxx = Math.max(maxx, freg[x]);
    }
    // case1
    if (maxx * fregNum[maxx] + 1 === i + 1 || fregNum[1] === i + 1) {
      ans = i + 1;
    }
    // case2
    if (maxx + fregNum[maxx - 1] * (maxx - 1) === i + 1) {
      ans = i + 1;
    }
  }
  return ans;
};
