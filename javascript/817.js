/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
  if (!head) return 0;
  let mp = {};
  for (let x of nums) {
    mp[x] = 1;
  }
  let ans = 0;
  let isIn = false;
  while (head) {
    if (mp[head.val]) {
      isIn = true;
      if (!head.next) {
        ans++;
      }
      head = head.next;
      continue;
    }
    if (isIn) {
      ans++;
    }
    head = head.next;
    isIn = false;
  }
  return ans;
};
