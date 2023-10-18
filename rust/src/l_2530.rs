use crate::Solution;
use std::collections::BinaryHeap;

impl Solution {
    pub fn max_kelements(nums: Vec<i32>, k: i32) -> i64 {
        let mut heap = BinaryHeap::with_capacity(nums.len());
        for num in nums {
            heap.push(num);
        }
        let mut ans: i64 = 0;
        for _ in 0..k {
            let max = heap.pop().unwrap();
            ans += max as i64;
            heap.push((max + 2) / 3);
        }
        ans
    }
}
