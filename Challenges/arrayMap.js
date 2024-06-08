const isTargetSumArray = (arr, target) => {
  let start = 0;
  let end = 0;
  let sum = 0;

  while (end < arr.length) {
    sum += arr[end];

    while (sum > target && start <= end) {
      sum -= arr[start];
      start += 1;
    }

    if (sum === target) {
      return true;
    }

    end += 1;
  }

  return false;
};

console.log(isTargetSumArray([1, 2, 3, 4, 5, 78], 9));
console.log(isTargetSumArray([4, 2, 7, 1, 9, 5], 17));
console.log(isTargetSumArray([179, 20, 71, 1, 95, 5], 17));
