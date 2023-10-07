use std::collections::HashMap;

use crate::Solution;

impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        let mut mp: HashMap<String, Vec<String>> = HashMap::with_capacity(strs.len() / 2);
        for s in strs.into_iter() {
            let mut key: Vec<char> = s.chars().collect();
            key.sort_by(|a: &char, b| b.cmp(a));
            let key = String::from_iter(key);
            if mp.get(&key).is_none() {
                mp.insert(key.clone(), vec![]);
            }
            mp.get_mut(&key).unwrap().push(s);
        }
        let ans: Vec<Vec<String>> = mp.into_values().collect();
        ans
    }
}
