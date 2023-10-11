use std::collections::HashMap;

use crate::Solution;

impl Solution {
    pub fn top_students(
        positive_feedback: Vec<String>,
        negative_feedback: Vec<String>,
        report: Vec<String>,
        student_id: Vec<i32>,
        k: i32,
    ) -> Vec<i32> {
        let mut mp = HashMap::new();
        for word in positive_feedback.into_iter() {
            mp.insert(word, 3);
        }
        for word in negative_feedback.into_iter() {
            mp.insert(word, -1);
        }
        let mut record = Vec::with_capacity(student_id.len());
        for i in 0..student_id.len() {
            record.push((Solution::get_point(&report[i], &mp), student_id[i]));
        }
        record.sort_by(|a, b| {
            if a.0 == b.0 {
                return a.1.cmp(&b.1);
            }
            return b.0.cmp(&a.0);
        });
        let mut ans = Vec::with_capacity(k as usize);
        for i in 0..k {
            ans.push(record.get(i as usize).unwrap().1 as i32);
        }
        ans
    }
    fn get_point(s: &String, mp: &HashMap<String, i32>) -> i32 {
        let mut ans = 0;
        for word in s.split(" ").into_iter() {
            ans += *mp.get(word).or(Some(&0)).unwrap();
        }
        ans
    }
}
