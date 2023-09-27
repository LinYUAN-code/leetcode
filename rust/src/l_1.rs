use crate::Solution;

use std::collections::HashMap;

impl Solution {
    pub fn two_sum_n2(nums: Vec<i32>, target: i32) -> Vec<i32> {
        for i in 0..nums.len() {
            for j in (i + 1)..nums.len() {
                if nums[i] + nums[j] == target {
                    return vec![i as i32, j as i32];
                }
            }
        }
        vec![]
    }
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut mp = HashMap::with_capacity(nums.len());

        for i in 0..nums.len() {
            if let Some(k) = mp.get(&(target - nums[i])) {
                return vec![*k as i32, i as i32];
            }
            mp.insert(nums[i], i);
        }
        vec![]
    }
}

pub fn l1_debug() {
    println!("{:?}", Solution::two_sum(vec![2, 7, 11, 15], 9));
}
