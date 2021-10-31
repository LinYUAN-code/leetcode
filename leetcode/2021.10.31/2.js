/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var nodesBetweenCriticalPoints = function(head) {
    let p = [];
    pre = head.val;
    let id = 1;
    while(head) {
        let next = head.next ? head.next.val : head.val;
        if(head.val > pre && head.val >next)p.push(id);
        if(head.val < pre && head.val <next)p.push(id);
        id++;
        pre = head.val;
        head = head.next;
    }
    let minn = p[p.length-1]-p[0];
    for(let i=0;i<p.length;i++) {
        if(i>0)
            minn = Math.min(p[i]-p[i-1],minn);
        if(i<p.length-1)
            minn = Math.min(p[i+1]-p[i],minn);
    }
    if(p.length<2)return [-1,-1];
    return [minn,p[p.length-1]-p[0]];
};
