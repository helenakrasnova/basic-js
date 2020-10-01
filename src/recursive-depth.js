const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(array, count) {
    count = count ? count : 1;
    let result = count;
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        let subCount = this.calculateDepth(array[i], count + 1);
        if (subCount > result) {
          result = subCount;
        }
      }
    }
    return result;
  }
};