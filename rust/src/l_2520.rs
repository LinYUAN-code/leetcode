use crate::Solution;

impl Solution {
    pub fn count_digits(num: i32) -> i32 {
        let mut n = num;
        let mut ans = 0;
        while n > 0 {
            let k = n % 10;
            if num % k == 0 {
                ans += 1;
            }
            n /= 10;
        }
        ans
    }
}
