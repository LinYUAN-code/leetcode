impl Solution {
    pub fn generate_the_string(n: i32) -> String {
        // n+1
        let mut ans = String::from("");
        for _ in 1..n {
            ans.push('a');
        }
        if n % 2 == 0 {
            ans.push('b');
        } else {
            ans.push('a');
        }
        ans
    }
}
