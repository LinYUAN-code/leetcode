use crate::Solution;

impl Solution {
    pub fn count_seniors(details: Vec<String>) -> i32 {
        details
            .into_iter()
            .filter(|s| {
                let age: i32 = s[11..13].parse().unwrap();
                age > 60
            })
            .count() as i32
    }
}
