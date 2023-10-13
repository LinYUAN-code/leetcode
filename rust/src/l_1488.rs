use std::{
    cmp::Reverse,
    collections::{BinaryHeap, HashMap, HashSet, VecDeque},
};

use crate::Solution;

impl Solution {
    pub fn avoid_flood(rains: Vec<i32>) -> Vec<i32> {
        let mut mp = HashMap::<i32, VecDeque<usize>>::new();
        let mut ans = vec![-1; rains.len()];
        let mut status: HashSet<i32> = HashSet::with_capacity(rains.len());
        for i in 0..rains.len() {
            if rains[i] == 0 {
                continue;
            }
            if mp.get(&rains[i]).is_none() {
                mp.insert(rains[i], VecDeque::new());
            }
            mp.get_mut(&rains[i]).unwrap().push_back(i);
        }
        let mut max_heap: BinaryHeap<Reverse<usize>> = BinaryHeap::new();
        for i in 0..rains.len() {
            if rains[i] == 0 {
                if max_heap.len() == 0 {
                    ans[i] = 1;
                } else {
                    let index = max_heap.pop().unwrap().0;
                    status.remove(&rains[index]);
                    ans[i] = rains[index];
                }
            } else {
                if status.contains(&rains[i]) {
                    return vec![];
                }
                status.insert(rains[i]);
                let deque = mp.get_mut(&rains[i]).unwrap();
                deque.pop_front();
                if deque.len() > 0 {
                    max_heap.push(Reverse(*deque.front().unwrap()));
                }
            }
        }
        ans
    }
}
