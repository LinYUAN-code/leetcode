use crate::Solution;

impl Solution {
    pub fn find_the_city(n: i32, edges: Vec<Vec<i32>>, distance_threshold: i32) -> i32 {
        let max_dis = 99999999;
        let mut dis = vec![vec![max_dis; n as usize]; n as usize];
        for edge in edges {
            dis[edge[0] as usize][edge[1] as usize] = edge[2];
            dis[edge[1] as usize][edge[0] as usize] = edge[2];
        }
        for k in 0..n {
            dis[k as usize][k as usize] = 0;
            for i in 0..n {
                for j in 0..n {
                    if dis[i as usize][k as usize] + dis[k as usize][j as usize]
                        < dis[i as usize][j as usize]
                    {
                        dis[i as usize][j as usize] =
                            dis[i as usize][k as usize] + dis[k as usize][j as usize]
                    }
                }
            }
        }
        let mut ans = 0;
        let mut minn = max_dis;
        for i in 0..n {
            let mut num = 0;
            for j in 0..n {
                if dis[i as usize][j as usize] <= distance_threshold {
                    num += 1;
                }
            }
            if num <= minn {
                ans = i;
                minn = num;
            }
        }
        ans
    }
}
