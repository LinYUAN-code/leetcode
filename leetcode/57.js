/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    // 很经典的插入区间问题
    // 题目保证输入区间有序并且不重叠
    // 那么我们只需要找到最前面一个被插入区间影响到的区间（区间的end >= 插入区间的start && 区间的start <= 插入区间的end） 
    // 以及最后一个被插入区间影响到的区间（区间的start <= 插入区间的end && 区间的end>=插入区间的start）
    let l = 0;
    for(;l<intervals.length;l++) {
        if(intervals[l][1] >= newInterval[0] && intervals[l][0] <= newInterval[1]) {
            break;
        }
    }
    let r = intervals.length-1;
    for(;r>=0;r--) {
        if(intervals[r][0]<=newInterval[1] && intervals[r][1] >= newInterval[0]) {
            break;
        }
    }
    if(l===intervals.length || r===-1) {
        // 查找合适的插入位置
        for(let i=0;i<intervals.length;i++) {
            if(newInterval[1] < intervals[i][0]) {
                return [...intervals.slice(0,i),newInterval,...intervals.slice(i)];
            }
        }
        return [...intervals,newInterval];
    }
    let newA = [];
    newA[0] = Math.min(intervals[l][0],newInterval[0]);
    newA[1] = Math.max(intervals[r][1],newInterval[1]);
    return [...intervals.slice(0,l),newA,...intervals.slice(r+1)];
}; 