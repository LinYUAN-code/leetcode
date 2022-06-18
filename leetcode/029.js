/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
 var insert = function(head, insertVal) {
    let nn = new Node(insertVal);
    if(!head) {
        nn.next = nn;
        return nn;
    }
    if(head.next === head) {
        head.next = nn;
        nn.next = head;
        return head;
    }
    let now = head;
    let flag = false;
    while(true) {
        if(insertVal>=now.val && insertVal <= now.next.val) {
            let t = now.next;
            now.next = nn;
            nn.next = t;
            flag = true;
            break;
        } else if(now.val > now.next.val && insertVal <= now.next.val) {
            let t = now.next;
            now.next = nn;
            nn.next = t;
            flag = true;
            break;
        } else if(now.val > now.next.val && insertVal >= now.val) {
            let t = now.next;
            now.next = nn;
            nn.next = t;
            flag = true;
            break;
        }
        now = now.next;
        if(now===head)break;
    }
    if(!flag) {
        let t = now.next;
        now.next = nn;
        nn.next = t;
    }
    return head;
};