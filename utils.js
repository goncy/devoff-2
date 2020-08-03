function toMatrix(message, length) {
  let matrix = [];
  let buffer = message.split("")

  for(let i = 0; i < message.length / length; i++) {
    matrix.push(buffer.splice(0, length));
  }

  return matrix;
}

function transpose(matrix) {
  return matrix[0].map((_, index) => matrix.map(submatrix => submatrix[index]));
}

function transposeMessage(message, length) {
  return transpose(toMatrix(message, length)).flat().join("")
}

module.exports = {transposeMessage};