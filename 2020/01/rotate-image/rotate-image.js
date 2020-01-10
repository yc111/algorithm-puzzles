// 我的解答 执行21个测试用例 60 ms
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    let map = {};
    let temp = [];
    for(let i = 0; i < n; i++) {
        temp = [];
        for(let j = n - 1; j >= 0; j--) {
            temp.push(matrix[j][i]);
        }
        // console.log(temp);
        map[i] = temp;
    }
    // console.log(map)
    for(let i = 0; i < n; i++) {
        matrix[i] = map[i];
    }
};

let matrix =[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
];
rotate(matrix);
console.log(matrix);

