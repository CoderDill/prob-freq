function countPairs(arr, target, start = 0, end = arr.length - 1) {
  arr.sort((a, b) => a - b);
  let count = 0;
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === target) {
      count++;
      start++;
      end--;
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
  return count;
}
