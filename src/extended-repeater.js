const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = '' + str;
  options.addition = options.addition !== undefined ? '' + options.addition : '';
  let additionArr = [];
  let newArray = [];
  options.additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  options.repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  options.additionSeparator = options.additionSeparator ? options.additionSeparator : '';
  options.separator = options.separator ? options.separator : '+';
  options.addition = options.addition ? options.addition : '';
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionArr.push(options.addition);
  }

  let addition = additionArr.join(options.additionSeparator);
  let result = '' + str + addition;


  for (let i = 0; i < options.repeatTimes; i++) {
    newArray.push(result);
  }

  return newArray.join(options.separator);
};



'la', { repeatTimes: 3, separator: 's' }, 'laslasla'