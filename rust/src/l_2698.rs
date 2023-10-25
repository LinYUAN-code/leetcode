use crate::Solution;

impl Solution {
    pub fn punishment_number(n: i32) -> i32 {
        let mut ans = 0;
        for i in 1..=n {
            if Solution::check_number(&(i * i).to_string(), i, &mut vec![]) {
                ans += i * i;
            }
        }
        ans
    }
    fn check_number(num: &str, target: i32, nums: &mut Vec<i32>) -> bool {
        if num.len() == 0 {
            if nums.iter().sum::<i32>() == target {
                return true;
            }
            return false;
        }
        for i in 0..num.len() {
            nums.push(num[0..=i].parse::<i32>().unwrap());
            if Solution::check_number(&num[(i + 1)..num.len()], target, nums) {
                return true;
            }
            nums.pop();
        }
        return false;
    }
}
