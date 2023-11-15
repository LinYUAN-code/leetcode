use crate::Solution;

impl Solution {
    pub fn maximize_sum(nums: Vec<i32>, k: i32) -> i32 {
        let mut maxx = 0;
        for num in nums {
            maxx = std::cmp::max(maxx, num);
        }
        (maxx + maxx + k - 1) * k / 2
    }
}
