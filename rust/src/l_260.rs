use core::num;

use crate::Solution;

impl Solution {
    pub fn single_number(nums: Vec<i32>) -> Vec<i32> {
        let mut xor_sum = 0;
        for num in nums.iter() {
            xor_sum ^= num;
        }
        let last_bit = xor_sum & -xor_sum;
        let mut a = 0;
        let mut b = 0;
        for num in nums {
            if num & last_bit != 0 {
                a ^= num;
            } else {
                b ^= num;
            }
        }
        vec![a, b]
    }
}
