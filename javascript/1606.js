/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
 var busiestServers = function(k, arrival, load) {
    // 返回处理请求最多的节点
    // 线段树节点维护 当前区间的服务器不忙的时间的最小值--且该最小值对应的目标
    // 使用破环成链的方法对付环结构
    class Node {
        constructor(l,r,val,index) {
            this.l = l;
            this.r = r;
            this.minn = val;
            this.index = index;
        }
    }
    class Tree {
        constructor() {
            this.tri = [];
        }
        build(idx,l,r) {
            if(l===r) {
                this.tri[idx] = new Node(l,r,1,l);
                return ;
            }
            this.tri[idx] = new Node(l,r);
            let mid = (l+r)>>1;
            this.build(idx<<1,l,mid)
            this.build(idx<<1|1,mid+1,r);
            this.pushup(idx);
        }
        pushup(idx) {
            if(this.tri[idx<<1].minn <= this.tri[idx<<1|1].minn) {
                this.tri[idx].minn = this.tri[idx<<1].minn;
                this.tri[idx].index = this.tri[idx<<1].index;
            } else {
                this.tri[idx].minn = this.tri[idx<<1|1].minn;
                this.tri[idx].index = this.tri[idx<<1|1].index;
            }
        }
        // 区间查询
        query(idx,l,r,val) {
            if(this.tri[idx].minn > val)return -1;
            // if(this.tri[idx].l >= l && this.tri[idx].r <= r) {
            //     return this.tri[idx].index;
            // }
            if(this.tri[idx].l === this.tri[idx].r)return this.tri[idx].index;
            let mid = (this.tri[idx].l + this.tri[idx].r) >> 1;
            if(l<=mid) {
                let res = this.query(idx<<1,l,r,val);
                if(res!==-1)return res;
            }
            if(r>mid) {
                let res = this.query(idx<<1|1,l,r,val);
                if(res!==-1)return res;
            }
            return -1;
        }
        // 单点更新
        update(idx,p,val) {
            const node = this.tri[idx];
            if(node.l === node.r) {
                this.tri[idx].minn = val;
                return ;
            }
            const mid = (node.l + node.r)>>1;
            if(p<=mid) {
                this.update(idx<<1,p,val);
            } else {
                this.update(idx<<1|1,p,val);
            }
            this.pushup(idx);
        }
    };

    let tree = new Tree();
    tree.build(1,0,2*k-1);
    let count = [];
    for(let i=0;i<k;i++)count[i] = 0;
    for(let i=0;i<arrival.length;i++) {
        let d = tree.query(1,i%k,i%k+k-1,arrival[i]);
        // if(i===4){
        //     console.log(d);
        //     console.log(tree.tri);
        // }
        if(d===-1)continue;
        if(d>=k) {
            count[d-k]++;
            tree.update(1,d-k,arrival[i]+load[i]);
            tree.update(1,d,arrival[i]+load[i]); 
        } else {
            count[d]++;
            tree.update(1,d,arrival[i]+load[i]); 
            tree.update(1,d+k,arrival[i]+load[i]);
        }
    }

    // console.log(count);
    let maxx = 0;
    for(let i=0;i<k;i++)
        maxx = Math.max(count[i],maxx);
    let ans = [];
    for(let i=0;i<k;i++)
        if(count[i]===maxx) {
            ans.push(i);
        }
    return ans;
};