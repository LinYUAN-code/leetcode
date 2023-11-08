use crate::Solution;

impl Solution {
    pub fn find_the_longest_balanced_substring(s: String) -> i32 {
        let mut num_0 = 0;
        let mut num_1 = 0;
        let mut ans = 0;
        for ch in s.chars() {
            if ch == '0' {
                if num_1 != 0 {
                    num_1 = 0;
                    num_0 = 1;
                } else {
                    num_0 += 1;
                }
            } else {
                num_1 += 1;
                ans = std::cmp::max(ans, std::cmp::min(num_0, num_1) * 2);
            }
        }
        ans
    }
}
