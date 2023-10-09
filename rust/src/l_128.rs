use std::collections::HashSet;

use crate::Solution;

impl Solution {
    pub fn longest_consecutive(nums: Vec<i32>) -> i32 {
        let mut ans = 0;
        let mut set = HashSet::<i32>::new();
        for num in nums.as_slice() {
            set.insert(*num);
        }
        for num in nums.as_slice() {
            if set.contains(num) {
                let mut start = *num;
                let mut num = 1;
                while set.contains(&(start - 1)) {
                    start -= 1;
                }
                while set.contains(&(start + 1)) {
                    num += 1;
                    set.remove(&start);
                    start += 1;
                }
                set.remove(&start);
                ans = std::cmp::max(ans, num);
            }
        }
        ans
    }
}
