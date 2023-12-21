use std::collections::LinkedList;

use crate::Solution;

impl Solution {
    pub fn maximum_sum_of_heights(max_heights: Vec<i32>) -> i64 {
        let n = max_heights.len();
        let mut sum_l: Vec<i64> = vec![0; n];
        let mut sum_r: Vec<i64> = vec![0; n];
        let mut stk = LinkedList::new();
        for i in 0..n {
            while stk.len() > 0 && max_heights[*stk.back().unwrap()] > max_heights[i] {
                stk.pop_back();
            }
            sum_l[i] = if stk.len() == 0 {
                (i + 1) as i64 * max_heights[i] as i64
            } else {
                let k = *stk.back().unwrap();
                (i - k) as i64 * max_heights[i] as i64 + sum_l[k]
            };
            stk.push_back(i);
        }
        stk.clear();
        for i in (0..n).rev() {
            while stk.len() > 0 && max_heights[*stk.back().unwrap()] > max_heights[i] {
                stk.pop_back();
            }
            sum_r[i] = if stk.len() == 0 {
                (n - i) as i64 * max_heights[i] as i64
            } else {
                let k = *stk.back().unwrap();
                (k - i) as i64 * max_heights[i] as i64 + sum_r[k]
            };
            stk.push_back(i);
        }
        let mut ans: i64 = 0;
        for i in 0..n {
            ans = ans.max(sum_l[i] + sum_r[i] - max_heights[i] as i64);
        }
        ans
    }
}
