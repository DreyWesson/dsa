function jaggedArray(grades) {
  let total = 0,
    average = 0.0,
    arr = [];
  for (var row = 0; row < grades.length; ++row) {
    for (var col = 0; col < grades[row].length; ++col) {
      total += grades[row][col];
    }
    average = total / grades[row].length;
    let key = `Student-${parseInt(row + 1, 10)}`;
    let obj = {
      [key]: average.toFixed(2)
    };
    arr.push(obj);
    total = 0;
    average = 0.0;
  }
  console.log(arr);
}
jaggedArray([
  [89, 77],
  [76, 82, 81],
  [91, 94, 89, 99]
]);