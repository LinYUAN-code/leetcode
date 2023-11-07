use crate::Solution;

impl Solution {
    pub fn vowel_strings(words: Vec<String>, left: i32, right: i32) -> i32 {
        let mut ans = 0;
        let vovels = vec!['a', 'e', 'i', 'o', 'u'];
        let check = |s: &String| {
            if vovels.contains(&s.chars().last().unwrap())
                && vovels.contains(&s.chars().nth(0).unwrap())
            {
                true
            } else {
                false
            }
        };
        for i in left..=right {
            if check(words.get(i as usize).unwrap()) {
                ans += 1;
            }
        }
        ans
    }
}
