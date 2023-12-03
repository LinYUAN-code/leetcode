use crate::Solution;

impl Solution {
    pub fn max_score(card_points: Vec<i32>, k: i32) -> i32 {
        let mut sum_f = vec![0; card_points.len()];
        let mut sum_b = vec![0; card_points.len()];
        sum_f[0] = card_points[0];
        for i in 1..card_points.len() {
            sum_f[i] += sum_f[i - 1] + card_points[i];
        }
        sum_b[card_points.len() - 1] = card_points[card_points.len() - 1];
        for i in ((card_points.len() - 2)..0).rev() {
            sum_b[i] += sum_b[i + 1] + card_points[i];
        }
        if k == card_points.len() as i32 {
            return sum_f[sum_f.len() - 1];
        }
        let mut ans = 0;
        for l_num in 0..=k {
            let l_sum = if l_num == 0 {
                0
            } else {
                sum_f[l_num as usize - 1]
            };
            let r_sum = if l_num == k {
                0
            } else {
                sum_b[card_points.len() - k as usize + l_num as usize]
            };
            ans = std::cmp::max(ans, l_sum + r_sum);
        }
        ans
    }
}
