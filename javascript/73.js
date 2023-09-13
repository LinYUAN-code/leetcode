/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    // 1.(x,y) ==> 第x行为0  第y行为0 ==》 O(n+m)
    // 2.常量空间怎么解决？---我们用第一行和第一列来记录--额外使用两个变量来记录第一行和第一列的情况
    // 3.也可以只使用一个变量来记录第一行和第一列的情况，比如0没有0 1行为0 2列为0 3全是0
    let row = 0,col = 0;
    for(let i=0;i<matrix[0].length;i++)
        if(!matrix[0][i]) {
            row = 1;
        }
    for(let i=0;i<matrix.length;i++)
        if(!matrix[i][0]){
            col = 1;
        }
    
    for(let i=1;i<matrix.length;i++)
        for(let j=1;j<matrix[0].length;j++)
            if(!matrix[i][j]) {
                matrix[0][j] = 0;
                matrix[i][0] = 0; 
            }
    for(let i=1;i<matrix[0].length;i++)
        if(!matrix[0][i])
            for(let j=1;j<matrix.length;j++)
                matrix[j][i] = 0;
    for(let i=1;i<matrix.length;i++)
        if(!matrix[i][0])
            for(let j=1;j<matrix[0].length;j++)
                matrix[i][j] = 0;

    if(row)
        for(let i=0;i<matrix[0].length;i++)
            matrix[0][i] = 0;
    if(col)
        for(let i=0;i<matrix.length;i++)
            matrix[i][0] = 0;

};
