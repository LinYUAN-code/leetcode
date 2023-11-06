use std::vec;

use crate::Solution;

impl Solution {
    pub fn max_product(words: Vec<String>) -> i32 {
        let mut bits_arr = vec![0; words.len()];
        let handle = |s: &String| {
            let mut bits = 0;
            for ch in s.chars() {
                bits |= 1 << (ch as usize - 97)
            }
            bits
        };
        for i in 0..words.len() {
            bits_arr[i] = handle(words.get(i).unwrap())
        }

        let mut ans = 0;
        for i in 0..words.len() {
            for j in (i + 1)..words.len() {
                let a = words.get(i).unwrap();
                let b = words.get(j).unwrap();
                if bits_arr[i] & bits_arr[j] == 0 {
                    ans = std::cmp::max(ans, a.len() * b.len())
                }
            }
        }
        ans as i32
    }
}
