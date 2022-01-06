// add whatever parameters you deem necessary
function twoArrObj(arr1, arr2) {
    let arrObj = {}
    let count = 0

    for (let key of arr1) {
        arrObj[key] = arr2[count] || null
        count++
    }
    return arrObj
}

