const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) != 'string') {
    return false;
  }
  let parsedString = parseFloat(sampleActivity);
  if (isNaN(parsedString)) {
    return false;
  }
  if (parsedString > MODERN_ACTIVITY || parsedString <= 0) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  let ln = Math.log10(MODERN_ACTIVITY / parsedString);
  return Math.floor(ln / k);

};
