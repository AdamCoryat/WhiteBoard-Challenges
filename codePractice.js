let input = [1, 2, 3, 4, 5];
let output = [120, 60, 40, 30, 24];
function indexMultiplication(arr) {
  let output = [];
  let total = 1;
  for (let numbers = 0; numbers < input.length; numbers++) {
    let num = arr[numbers];
    total *= num;
  }
  for (let divisables = 0; divisables > arr.length; divisables++) {
    let divisable = arr[divisables];
    let newTotal = total / divisable;
    output.push(newTotal);
  }
  return output;
}


function multiTwo(arr) {
  let output = [];
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    let non = arr[i];
    for (let b = 0; b < arr.length; b++) {
      let num = arr[b];
      if (num != non) {
        total *= num;
      }
    }
    output.push(total);
    total = 1;
  }
  return output;
}