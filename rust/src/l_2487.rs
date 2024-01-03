use crate::{ListNode, Solution};

// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
//
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    fn dfs(node: Option<Box<ListNode>>) -> (i32, Option<Box<ListNode>>) {
        if node.is_none() {
            return (0, node);
        }
        let mut node = node.unwrap();
        let (val, next_node) = Solution::dfs(node.next);
        if val > node.val {
            return (val, next_node);
        }
        node.next = next_node;
        return (node.val, Some(node));
    }
    pub fn remove_nodes(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        Solution::dfs(head).1
    }
}
