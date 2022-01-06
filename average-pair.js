// add whatever parameters you deem necessary
function averagePair(sortedArr, targetAvg) {
  let leftIdx = 0;
  let rightIdx = sortedArr.length - 1;

  while (leftIdx < rightIdx) {
    const avg = (sortedArr[leftIdx] + sortedArr[rightIdx]) / 2;
    if (avg === targetAvg) return true;
    if (avg < targetAvg) {
      leftIdx++;
    } else {
      rightIdx--;
    }
  }
  return false;
}

averagePair([-1, 0, 3, 4, 5, 6], 4.5);
