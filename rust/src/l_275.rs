use crate::Solution;

impl Solution {
    pub fn h_index(citations: Vec<i32>) -> i32 {
        if citations.len() == 1 {
            return if citations[0] == 0 { 0 } else { 1 };
        }
        let mut l: i32 = 0;
        let mut r: i32 = 1000;
        while l < r {
            let mid = (l + r + 1) >> 1;
            let num = citations.len() as i32 - Solution::binary_search(&citations, mid);
            println!("{} {}", mid, num);

            if mid <= num {
                l = mid;
            } else {
                r = mid - 1;
            }
        }
        l
    }
    fn binary_search(arr: &Vec<i32>, val: i32) -> i32 {
        let mut l = 0;
        let mut r = arr.len();
        while l < r {
            let mid = (l + r) >> 1;
            if arr[mid] < val {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        l as i32
    }
}
