use crate::Solution;

impl Solution {
    pub fn split_num(num: i32) -> i32 {
        let mut arr = num.to_string().chars().collect::<Vec<char>>();
        arr.sort();
        let mut s1: i32 = 0;
        let mut s2: i32 = 0;
        let mut flag = true;
        for ch in arr {
            if flag {
                s1 = s1 * 10 + ch.to_digit(10).unwrap() as i32;
            } else {
                s2 = s2 * 10 + ch.to_digit(10).unwrap() as i32;
            }
            flag = !flag;
        }
        s1 + s2
    }
}
