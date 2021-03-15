
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof(matrix) != "object") {
    return [];
  }
  if (matrix.length < 1) {
    return [];
  }
  for (let i = 1; i < matrix.length; i = i + 2) {
    matrix[i].reverse();
  }  
  return matrix.flat();
}

