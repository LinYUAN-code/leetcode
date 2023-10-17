use crate::Solution;

impl Solution {
    pub fn sum_of_multiples(n: i32) -> i32 {
        let mut ans = 0;
        for i in 1..=n {
            if Self::check(i, 3) || Solution::check(i, 5) || Solution::check(i, 7) {
                ans += i;
            }
        }
        ans
    }
    #[inline]
    fn check(a: i32, b: i32) -> bool {
        a % b == 0
    }
}
