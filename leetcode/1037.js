/**
 * @param {number[][]} points
 * @return {boolean}
 */
 var isBoomerang = function(points) {
    // 叉乘完事
    let x1 = points[1][0] - points[0][0];
    let y1 = points[1][1] - points[0][1];
    let x2 = points[2][0] - points[0][0];
    let y2 = points[2][1] - points[0][1];
    return (x1*y2 - x2*y1) !== 0;
};