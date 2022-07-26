impl Solution {
    pub fn asteroid_collision(mut asteroids: Vec<i32>) -> Vec<i32> {
        // 栈模拟
        let mut ans:Vec<i32> = Vec::new();
        'outer: for w in asteroids {
            if ans.len() == 0 || ans[ans.len()-1] < 0 || w > 0 {
                ans.push(w);
            } else if ans[ans.len()-1] <= -w {
                while ans.len() != 0 && ans[ans.len()-1] > 0 && (ans[ans.len()-1]) <= -w {
                    if ans[ans.len()-1] == -w {
                        ans.pop();
                        continue 'outer;
                    }
                    ans.pop();
                }
                if ans.len() == 0 || ans[ans.len()-1] < 0 {
                    ans.push(w);
                }
            }
        } 
        ans
    }

    pub fn asteroid_collision_noMove(mut asteroids: Vec<i32>) -> Vec<i32> {
        // 原地修改
        let (mut len, mut i): (i32, usize) = (-1, 0);
        while i < asteroids.len() {
            if asteroids[i] > 0 || len == -1 || asteroids[len as usize] < 0 {
                len += 1;
                asteroids[len as usize] = asteroids[i];
            } else if asteroids[len as usize] <= -asteroids[i] {
                if asteroids[len as usize] < -asteroids[i] {
                    i -= 1;
                }
                len -= 1;
            }
            i += 1;
        }
        asteroids[0..(len+1).max(0) as usize].to_vec()
    }
}