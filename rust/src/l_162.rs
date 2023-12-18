use crate::Solution;

impl Solution {
    pub fn find_peak_element(nums: Vec<i32>) -> i32 {
        let mut l: i32 = 0;
        let mut r: i32 = nums.len() as i32 - 1;
        let v = |index: i32| {
            if index == -1 || index == nums.len() as i32 {
                return i32::MIN;
            }
            return *nums.get(index as usize).unwrap();
        };
        while l < r {
            let mid = (l + r) >> 1;
            let a = v(mid - 1);
            let b = v(mid);
            let c = v(mid + 1);
            if a < b && b > c {
                return mid;
            }
            if b < c {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        l
    }
}
