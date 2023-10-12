use crate::Solution;

impl Solution {
    pub fn find_the_array_conc_val(nums: Vec<i32>) -> i64 {
        let mut ans: i64 = 0;
        for i in 0..(nums.len() / 2) {
            ans += (nums[i].to_string() + &nums[nums.len() - i - 1].to_string())
                .parse::<i64>()
                .unwrap();
        }
        if nums.len() % 2 != 0 {
            ans += nums[nums.len() / 2] as i64;
        }
        ans
    }
}
