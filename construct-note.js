// add whatever parameters you deem necessary
function constructNote(msg, letters) {
  //Should return true if letters can build msg, otherwise false.
  let msgObj = {};
  let lettersObj = {};

  for (let char of msg) {
    msgObj[char] = msgObj[char] + 1 || 1;
    }
    for (let char of letters) {
    lettersObj[char] = lettersObj[char] + 1 || 1;
  }
    console.log(msgObj, lettersObj)
    for (let key in msgObj) {
        if (lettersObj[key] !== msgObj[key]) return false;

    }
    return true;
}
