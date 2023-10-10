use crate::Solution;

const MOD_NUM: i64 = 1_000_000_007;
impl Solution {
    pub fn sum_distance(mut nums: Vec<i32>, s: String, d: i32) -> i32 {
        let s: Vec<char> = s.chars().collect();
        for i in 0..nums.len() {
            if s[i] == 'R' {
                nums[i] = nums[i] + d;
            } else {
                nums[i] = nums[i] - d;
            }
        }
        nums.sort();
        let mut ans: i64 = 0;
        let mut sum: i64 = nums[0] as i64;
        for i in 1..nums.len() {
            ans = ((ans + i as i64 * nums[i] as i64 % MOD_NUM) % MOD_NUM - sum + MOD_NUM) % MOD_NUM;
            sum = (sum + nums[i] as i64) % MOD_NUM;
        }
        ans as i32
    }
}
