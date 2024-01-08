use std::collections::HashMap;

use crate::Solution;

impl Solution {
    pub fn number_of_boomerangs(points: Vec<Vec<i32>>) -> i32 {
        let n = points.len();
        let get_distance = |a: &Vec<i32>, b: &Vec<i32>| -> i32 {
            let dx = a[0] - b[0];
            let dy = a[1] - b[1];
            return dx * dx + dy * dy;
        };
        let mut dis_mp = vec![vec![0; n]; n];

        for i in 0..n {
            for j in 0..n {
                if i == j {
                    continue;
                }
                dis_mp[i][j] = get_distance(points.get(i).unwrap(), points.get(j).unwrap());
            }
        }
        let mut ans = 0;
        let mut handle = |index: usize| {
            let mut mp = HashMap::new();
            for i in 0..n {
                match mp.get(&dis_mp[index][i]) {
                    Some(val) => mp.insert(dis_mp[index][i], val + 1),
                    None => mp.insert(dis_mp[index][i], 1),
                };
            }
            for val in mp.values() {
                if *val >= 2 {
                    ans += *val * (*val - 1);
                }
            }
        };
        for i in 0..n {
            handle(i);
        }
        ans
    }
}
