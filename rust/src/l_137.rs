use crate::Solution;

impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        let mut ans = 0;
        for i in 0..32 {
            let mut sum = 0;
            for num in nums.iter() {
                sum += (num >> i) & 1;
            }
            if sum % 3 != 0 {
                ans += 1 << i;
            }
        }
        ans
    }
}
