/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
 var longestRepeating = function(s, queryCharacters, queryIndices) {
    /*
        可以使用线段树来解决这个问题....说实话很难想...太久没写这种有点acm的题目了

        我们每一个区间维护： 
            1.区间左边界的字符 区间右边界的字符，区间内的单个字符重复的最长子字符串
            2.根据两个子区间是否可以合并来决定父区间的值
                // 对于每一个区间我们还需要维护左边界向右扩展 和右边界向左扩展的最大值

        我们得保证我们的修改和查询操作是logn的

        单点修改时间复杂度 logn

        区间查询时间复杂度：
    */
    class Node {
        constructor(lc,rc,l,r) {
                this.lc = lc;
                this.rc = rc;
                this.l = l;
                this.r = r;
        }
    }
    class Tree {
        constructor() {
                this.tri = [];
        }
        build(idx,l,r,s) {
                this.tri[idx] = new Node(s[l-1],s[r-1],l,r);
                if(l===r) {
                    this.tri[idx].max = 1;
                    this.tri[idx].lmax = 1;
                    this.tri[idx].rmax = 1;
                    return ;
                }

                let mid = (l+r)>>1;
                this.build(idx<<1,l,mid,s);
                this.build(idx<<1|1,mid + 1,r,s);
                this.update(idx);
        }
        update(idx) {
            const lson = this.tri[idx<<1];
            const rson = this.tri[idx<<1|1];
            this.tri[idx].lc = lson.lc;
            this.tri[idx].rc = rson.rc;

            // 计算max
            this.tri[idx].max = Math.max(lson.max,rson.max);
            if((lson.max === lson.r - lson.l + 1) && (rson.max === rson.r - rson.l + 1) && lson.rc === rson.lc) {
                this.tri[idx].max = lson.max + rson.max;
            }
            if(lson.rc === rson.lc) {
                this.tri[idx].max = Math.max(lson.rmax + rson.lmax,this.tri[idx].max);
            }


            // 计算lmax
            if(lson.max === lson.r - lson.l + 1 && lson.rc === rson.lc) {
                this.tri[idx].lmax = lson.lmax + rson.lmax;
            } else this.tri[idx].lmax = lson.lmax;

            // 计算rmax
            if(rson.max === rson.r - rson.l + 1 && lson.rc === rson.lc) {
                this.tri[idx].rmax = lson.rmax + rson.rmax;
            } else this.tri[idx].rmax = rson.rmax;
        }
        add(idx,k,c) {
            if(this.tri[idx].l === this.tri[idx].r) {
                this.tri[idx].lc = this.tri[idx].rc = c;
                // console.log(this.tri[idx]);
                return ;
            }
            let mid = (this.tri[idx].l + this.tri[idx].r) >> 1;
            if(k<=mid) {
                this.add(idx<<1,k,c);
            } else {
                this.add(idx<<1|1,k,c);
            }
            this.update(idx);
        }
    }
    const tree = new Tree();
    tree.build(1,1,s.length,s);
    let ans = [];
    for(let i=0;i<queryIndices.length;i++) {
        tree.add(1,queryIndices[i]+1,queryCharacters[i]);
        // console.log(tree.tri[1]);
        ans[i] = tree.tri[1].max;
    }
    return ans;
};