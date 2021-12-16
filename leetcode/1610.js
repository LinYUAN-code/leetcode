/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */
 var visiblePoints = function(points, angle, location) {
    // 首先我们的那个底边一定是贴着一个点的，我们就可以枚举点
    // 然后双指针扫描就完事了
    // 首先就得研究怎么进行极坐标转化-atan
    let offset = 0;
    points = points.filter(a=>{
        if(a[0]===location[0] && a[1]===location[1]) {
            offset++;
            return false;
        }
        return true;
    })
    const atan = function(x,y) { //计算出角度来
        if(!x)return y > 0 ? 90.0 : 270.0
        if(!y)return x > 0 ? 0.0 : 180.0
        let angle = Math.abs(Math.atan(y/x));
        angle = 180.0*angle/Math.PI;
        if(x<=0&&y<=0) { //第三象限
            return 180.0 + angle;
        } else if(x<=0&&y>=0) { //第二象限
            return 180.0 - angle;
        } else if(x>=0&&y<=0) { //第四象限
            return 360.0 - angle;
        } else { //第一象限
            return angle;
        }
    };


    for(let i=0;i<points.length;i++) {
        points[i] = atan(points[i][0]-location[0],points[i][1]-location[1]);
    }
    points.sort((a,b)=>{
        return a-b;
    })
    let n = points.length;
    for(let i=0;i<n;i++)points[i+n] = points[i] + 360;
    let ans = 0;
    const max = Math.max;

    let l=0;
    for(let r=0;r<points.length;r++) {
        while(points[r]-points[l] > angle || (r-l+1)>n)l++;
        ans = max(ans,r-l+1);
    }
    return ans+offset;
};