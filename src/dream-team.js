const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = '';
  if (!Array.isArray(members)) {
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    let type = typeof (members[i]);
    if (type === 'string') {
      let trimString = members[i].trim();
      if (trimString) {
        result += trimString[0].toUpperCase();
      }
    }
  }
  if (result) {
    return result.split('').sort().join('');
  }
};
