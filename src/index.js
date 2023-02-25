
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length == 0) return []
  matrix.forEach((item, index) => !(index % 2) ? item : item.reverse())
  return matrix.reduce(function(prev, next) {
    return prev.concat(next);
  });
};

