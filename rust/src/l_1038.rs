use crate::{Solution, TreeNode};

use std::cell::RefCell;
use std::rc::Rc;

impl Solution {
    pub fn bst_to_gst(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        Solution::dfs(root.as_ref().unwrap(), &mut 0);
        root
    }
    fn dfs(node: &Rc<RefCell<TreeNode>>, sum: &mut i32) {
        let mut node_mut = node.borrow_mut();
        if let Some(right) = &node_mut.right {
            Solution::dfs(&right, sum);
        }
        *sum += node_mut.val;
        node_mut.val = *sum;
        if let Some(left) = &node_mut.left {
            Solution::dfs(&left, sum);
        }
    }
}
