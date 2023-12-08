use crate::Solution;
use std::cmp::max;

impl Solution {
    pub fn max_taxi_earnings(n: i32, mut rides: Vec<Vec<i32>>) -> i64 {
        let mut f: Vec<i64> = vec![0; n as usize + 1];
        rides.sort_by(|a, b| a[0].cmp(&b[0]));
        let mut i = 0;
        let mut maxx = 0;
        for pos in 1..=n {
            f[pos as usize] = max(f[pos as usize], maxx);
            while i < rides.len() && pos == rides[i][0] {
                f[rides[i][1] as usize] = max(
                    f[rides[i][1] as usize],
                    f[pos as usize] + (rides[i][1] - rides[i][0] + rides[i][2]) as i64,
                );
                i += 1;
            }
            maxx = max(maxx, f[pos as usize]);
        }
        println!("{:?}", f);
        f[n as usize]
    }
}
