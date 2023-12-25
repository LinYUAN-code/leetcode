use crate::Solution;

impl Solution {
    pub fn num_of_burgers(tomato_slices: i32, cheese_slices: i32) -> Vec<i32> {
        if (tomato_slices - 2 * cheese_slices) % 2 != 0 {
            vec![]
        } else {
            let ans = vec![
                (tomato_slices - 2 * cheese_slices) / 2,
                cheese_slices - (tomato_slices - 2 * cheese_slices) / 2,
            ];
            if ans[0] < 0 || ans[1] < 0 {
                vec![]
            } else {
                ans
            }
        }
    }
}
