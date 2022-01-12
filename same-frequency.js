// add whatever parameters you deem necessary
function sameFrequency() {
  const numStr1 = num1.toString()
    const numStr2 = num2.toString()

    if (numStr1.length !== numStr2.length) return false;
    
    let numObj1 = {}
    let numObj2 = {}

    for (let num of numStr1) {
        numObj1[num] = numObj1[num] + 1 || 1
    }

    for (let num of numStr2) {
        numObj2[num] = numObj2[num] + 1 || 1
    }
    
    for (let key in numObj1) {
        if (numObj1[key] !== numObj2[key]) return false;
    }
    return true;
}
