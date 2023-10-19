use std::collections::HashMap;

use crate::Solution;

impl Solution {
    pub fn tuple_same_product(nums: Vec<i32>) -> i32 {
        let mut mp = HashMap::<i32, i32>::new();
        for i in 0..nums.len() {
            for j in (i + 1)..nums.len() {
                let mul = nums[i] * nums[j];
                let num = mp.get(&mul).or(Some(&0)).unwrap();
                mp.insert(mul, num + 1);
            }
        }
        let mut ans = 0;
        for num in mp.values() {
            ans += (num - 1) * num;
        }
        ans * 4
    }
}
