// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == null) return [];
    let arr = [];
    for (n = 0; n < matrix.length; n++) {
        if ((n + 1) % 2 == 0) {
            arr.push(matrix[n].reverse());
        } else {
            arr.push(matrix[n]);
        }
    }
    return arr.flat();
};
