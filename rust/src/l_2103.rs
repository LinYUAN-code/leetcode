use std::collections::HashMap;

use crate::Solution;

impl Solution {
    pub fn count_points(rings: String) -> i32 {
        let mut ans = 0;
        let mut mp = HashMap::new();
        for i in (0..rings.len()).step_by(2) {
            let ch = rings.chars().nth(i).unwrap();
            let k = rings.chars().nth(i + 1).unwrap().to_digit(10).unwrap();
            if !mp.contains_key(&k) {
                mp.insert(k, 0);
            }
            let val = mp.get_mut(&k).unwrap();
            *val |= if ch == 'R' {
                1 << 0
            } else if ch == 'G' {
                1 << 1
            } else {
                1 << 2
            }
        }
        for val in mp.values() {
            if *val == 7 {
                ans += 1;
            }
        }
        ans
    }
}
