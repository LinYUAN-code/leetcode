use crate::Solution;

impl Solution {
    pub fn min_cost(mut nums: Vec<i32>, x: i32) -> i64 {
        let n = nums.len();
        let mut sum: i64 = 0;
        for num in nums.iter() {
            sum += *num as i64;
        }
        let mut ans: i64 = sum;
        for _ in 0..n {
            let old_n_num = nums[n - 1];
            for i in (0..(n - 1)).rev() {
                let j = (i + 1) % n;
                if nums[j] > nums[i] {
                    sum -= (nums[j] - nums[i]) as i64;
                    nums[j] = nums[i];
                }
            }
            if old_n_num < nums[0] {
                sum -= (nums[0] - old_n_num) as i64;
                nums[0] = old_n_num;
            }
            sum += x as i64;
            ans = ans.min(sum);
        }
        ans
    }
}
