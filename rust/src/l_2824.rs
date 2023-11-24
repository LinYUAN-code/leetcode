use crate::Solution;

impl Solution {
    pub fn count_pairs(mut nums: Vec<i32>, target: i32) -> i32 {
        let mut ans: i32 = 0;
        nums.sort();
        let mut l = 0;
        let mut r = nums.len() - 1;

        while l < r {
            while l < r && nums[r] + nums[l] >= target {
                r -= 1;
            }
            if l < r {
                ans += r as i32 - l as i32;
            }
            l += 1;
        }
        ans
    }
}
