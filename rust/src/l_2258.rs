use std::{mem::swap, vec};

use crate::Solution;

impl Solution {
    pub fn maximum_minutes(grid: Vec<Vec<i32>>) -> i32 {
        let maxx = grid.len() * grid[0].len();
        let mut l = 0;
        let mut r = grid.len() * grid[0].len();

        while l < r {
            let mid = (l + r + 1) >> 1;
            if Solution::check(&grid, mid) {
                l = mid;
            } else {
                r = mid - 1;
            }
        }
        if l == 0 && !Solution::check(&grid, 0) {
            return -1;
        }
        if l == maxx {
            return 1000_000_000;
        }
        return l as i32;
    }
    fn check(grid: &Vec<Vec<i32>>, time: usize) -> bool {
        let dx: Vec<i32> = vec![-1, 1, 0, 0];
        let dy: Vec<i32> = vec![0, 0, -1, 1];
        let mut mp = grid.clone();
        let n = grid.len();
        let m = grid[0].len();
        // check 1
        if time == 1 && (n == 1 || m == 1) {
            return true;
        }
        let mut from = Vec::<(usize, usize)>::new();
        let mut to = Vec::<(usize, usize)>::new();
        for i in 0..n {
            for j in 0..m {
                if mp[i][j] == 1 {
                    from.push((i, j));
                }
            }
        }
        for _ in 0..time {
            for (x, y) in from.iter() {
                for i in 0..4 {
                    let nx = *x as i32 + dx[i];
                    let ny = *y as i32 + dy[i];
                    if nx < 0
                        || nx >= n as i32
                        || ny < 0
                        || ny >= m as i32
                        || mp[nx as usize][ny as usize] == 2
                        || mp[nx as usize][ny as usize] == 1
                    {
                        continue;
                    }
                    mp[nx as usize][ny as usize] = 1;
                    to.push((nx as usize, ny as usize));
                }
            }
            from.clear();
            swap(&mut from, &mut to)
        }
        let mut from_people: Vec<(usize, usize)> = Vec::new();
        let mut to_people: Vec<(usize, usize)> = Vec::new();
        from_people.push((0, 0));
        while from_people.len() > 0 {
            if mp[n - 1][m - 1] != 0 {
                return false;
            }
            for (x, y) in from.iter() {
                for i in 0..4 {
                    let nx = *x as i32 + dx[i];
                    let ny = *y as i32 + dy[i];
                    if nx < 0
                        || nx >= n as i32
                        || ny < 0
                        || ny >= m as i32
                        || mp[nx as usize][ny as usize] == 2
                        || mp[nx as usize][ny as usize] == 1
                    {
                        continue;
                    }
                    mp[nx as usize][ny as usize] = 1;
                    to.push((nx as usize, ny as usize));
                }
            }
            from.clear();
            swap(&mut from, &mut to);
            for (x, y) in from_people.iter() {
                for i in 0..4 {
                    let nx = *x as i32 + dx[i];
                    let ny = *y as i32 + dy[i];
                    if nx == (n - 1) as i32 && ny == (m - 1) as i32 {
                        return true;
                    }
                    if nx < 0
                        || nx >= n as i32
                        || ny < 0
                        || ny >= m as i32
                        || mp[nx as usize][ny as usize] == 1
                        || mp[nx as usize][ny as usize] == 2
                        || mp[nx as usize][ny as usize] == 3
                    {
                        continue;
                    }
                    mp[nx as usize][ny as usize] = 3;
                    to_people.push((nx as usize, ny as usize));
                }
            }
            from_people.clear();
            swap(&mut from_people, &mut to_people);
        }
        false
    }
}
