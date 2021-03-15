


module.exports = function towelSort (matrix) {
  
    let m = matrix.length;
    
    let B = [];  
    for (let i = 0; i < m; i++) {
      let n = matrix[i].length;
      if (i % 2 === 0) {
          
        for (let j = 0; j < n; j++) {
          B.push(matrix[i][j]);
        }
      } else {
          
        for (let j = n - 1; j >= 0; j--) {
          B.push(matrix[i][j]);
        }
      }
    }
    return B;
  }

