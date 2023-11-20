use crate::Solution;

impl Solution {
    pub fn max_sub_array(nums: Vec<i32>) -> i32 {
        let mut sum = 0;
        let mut ans = i32::MIN;
        for num in nums {
            sum += num;
            ans = std::cmp::max(ans, sum);
            sum = if sum < 0 { 0 } else { sum };
        }
        ans
    }
}
