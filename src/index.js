
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix.length == 0 || matrix === undefined) return [];
  matrix.forEach((item, index) => !(index % 2) ? item : item.reverse())
  return matrix.reduce(function(prev, next) {
    return prev.concat(next);
  });
};

