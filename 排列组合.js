function innerPermute(temArr, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (temArr.length == arr.length - 1) {
      if (temArr.indexOf(arr[i]) < 0) {
        permuteArr.push(temArr.concat(arr[i]))
      }
      continue
    }
    if (temArr.indexOf(arr[i]) < 0) {
      innerPermute(temArr.concat(arr[i]), arr)
    }
  }
}

function permute(temArr, testArr) {
  var permuteArr = []
  innerPermute(temArr, testArr)
  return permuteArr
}

console.time('permute')
console.log(permute([], [1, 2, 3]))
console.timeEnd('permute')
