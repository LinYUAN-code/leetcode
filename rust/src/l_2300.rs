use crate::Solution;

impl Solution {
    pub fn successful_pairs(spells: Vec<i32>, mut potions: Vec<i32>, success: i64) -> Vec<i32> {
        potions.sort();
        let mut ans: Vec<i32> = vec![0; spells.len()];
        for i in 0..spells.len() {
            let mut l = 0;
            let mut r = potions.len();
            while l < r {
                let mid = (l + r) >> 1;
                if spells[i] as i64 * potions[mid] as i64 >= success {
                    r = mid;
                } else {
                    l = mid + 1;
                }
            }
            ans[i] += if l != potions.len() {
                potions.len() - l
            } else {
                0
            } as i32
        }
        vec![]
    }
}
