/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    let n = mat.length;
    let m = mat[0].length;
    if(n*m != r*c)return mat;   

    const nextNum = function() {
        let i = 0;
        let j = -1;
        
        return function() {
            j++;
            if(j==m) {
                j = 0;
                i++;
            }
            return [i,j];
        }
    }
    const nextOne = nextNum();
    let nm = [];
    for(let i=0;i<r;i++) {
        nm[i] = [];
        for(let j=0;j<c;j++) {
            let x = nextOne();
            nm[i].push(mat[x[0]][x[1]]);
        }
    }
    return nm;
};