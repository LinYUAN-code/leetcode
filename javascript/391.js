/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
 var isRectangleCover = function(rectangles) {
    // 不能有相交
    // 完美覆盖
    // 数据量 10^4
    // 数据范围 +-10^5
    // 1.线段树里面有一个扫描线算法好像可以解决这个问题
    // 2.统计点的个数也可以做
    // 如果不是完美矩形那么出现次数为1的顶点个数肯定大于4个 凸起来 或者凹下去
    // 如果矩形内部有重叠部分，那么肯定会出现点数是1或者3的点
    let mp = {};
    let mx=0,my=0,mmx=0x3f3f3f3f,mmy=0x3f3f3f3f3;
    const min = Math.min;
    const max = Math.max;
    let area = 0;
    for(let i=0;i<rectangles.length;i++) {
        mmx = min(rectangles[i][0],mmx);
        mmy = min(rectangles[i][1],mmy);
        mx = max(rectangles[i][2],mx);
        my = max(rectangles[i][3],my);
        area += (rectangles[i][2]-rectangles[i][0])*(rectangles[i][3]-rectangles[i][1]);
        for(let x of [rectangles[i][0],rectangles[i][2]] ) {
            for(let y of [rectangles[i][1],rectangles[i][3]]) {
                if(!mp[[x,y]])mp[[x,y]] = 1;
                else mp[[x,y]]++;
            }
        }
    }   
    if( (mx-mmx)*(my-mmy) != area )return false;
    if (mp[[mx,my]]!=1 || mp[[mx,mmy]]!=1 || mp[[mmx,my]]!=1 || mp[[mmx,mmy]]!=1)return false;
    mp[[mx,my]]=4;
    mp[[mx,mmy]]=4;
    mp[[mmx,my]]=4;
    mp[[mmx,mmy]]=4;
    for(let x in mp) {
        if(mp[x]!=2 && mp[x]!=4)return false;
    }
    return true;
};
