use std::collections::HashMap;

use crate::Solution;

impl Solution {
    pub fn can_construct(ransom_note: String, magazine: String) -> bool {
        let mut mp = HashMap::new();
        for ch in magazine.chars() {
            match mp.get(&ch) {
                Some(val) => mp.insert(ch, val + 1),
                None => mp.insert(ch, 1),
            };
        }
        for ch in ransom_note.chars() {
            match mp.get(&ch) {
                Some(val) => {
                    if *val == 0 {
                        return false;
                    }
                    mp.insert(ch, val - 1);
                }
                None => return false,
            }
        }
        true
    }
}
