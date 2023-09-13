/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
  nums1.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < nums2.length; i++) {
    nums2[i] = {
      val: nums2[i],
      id: i,
    };
  }
  nums2.sort((a, b) => {
    return a.val - b.val;
  });
  let n = nums1.length;
  let i = 0;
  let j = 0;
  let ans = [];
  let used = {};
  for (; i < n && j < n; j++) {
    while (i < n && nums1[i] <= nums2[j].val) i++;
    if (i === n) break;
    ans[nums2[j].id] = nums1[i];
    used[i] = 1;
    i++;
  }
  let k = 0;
  for (let i = 0; i < n; i++) {
    if (typeof ans[i] !== "undefined") {
      continue;
    }
    while (used[k]) k++;
    ans[i] = nums1[k];
    k++;
  }
  return ans;
};
