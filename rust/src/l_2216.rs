use std::collections::VecDeque;

use crate::Solution;

impl Solution {
    pub fn min_deletion(nums: Vec<i32>) -> i32 {
        let mut stk = VecDeque::new();
        for num in nums.iter() {
            if stk.len() % 2 == 1 && *stk.back().unwrap() == num {
                stk.pop_back();
            }
            stk.push_back(num);
        }
        println!("{:?}", stk);
        (nums.len() - stk.len()) as i32 + if stk.len() % 2 != 0 { 1 } else { 0 }
    }
}
