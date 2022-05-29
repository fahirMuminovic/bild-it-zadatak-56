/*
Napisati funkciju koja ce generisati 2D niz. 2D niz treba da izgleda ovako:
[
  [1],
  [1, 2],
  [1, 2, 3],
  [1, 2],
  [1],
]
*/

function patternArray(row) {
  let array = [];
  let elements = 0;
  let breakingPoint = Math.floor(row/2);

  for (let i = 0; i < row; i++) {
    array[i] = [];
    for (let j = 0; j <= elements; j++) {
      array[i][j] = j + 1;
    }
    if (i >= breakingPoint) {
      elements--;
    } else {
      elements++;
    }
  }
  return array;
}


console.log(patternArray(5));