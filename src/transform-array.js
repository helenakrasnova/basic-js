const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let newArr = arrayCopy(arr);
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === discardPrev) {
      newArr[i - 1] = null;
      newArr[i] = null;
    }
    else if (newArr[i] === discardNext) {
      newArr[i + 1] = null;
      newArr[i] = null;
    }
    else if (newArr[i] === doublePrev) {
      newArr[i] = newArr[i - 1];
    }
    else if (newArr[i] === doubleNext) {
      newArr[i] = newArr[i + 1];
    }
  }
  let finalArr = newArr.filter((item) => item !== null);
  return finalArr;
}

function arrayCopy(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === '--double-prev' || arr[i] === '--discard-prev') && i === 0) {
      continue;
    }
    else if ((arr[i] === '--discard-next' || arr[i] === '--double-next') && i === arr.length - 1) {
      continue;
    }
    else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}