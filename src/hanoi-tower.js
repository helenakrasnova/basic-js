const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let count = 1;
  for (let i = 1; i < disksNumber; i++) {
    count = count * 2 + 1;
  }
  let seconds = Math.floor(count / (turnsSpeed / 3600));
  return {
    turns: count,
    seconds: seconds
  };
};
