const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machineType) {
    this.machineType = machineType;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message, key) {
    message = this.machineType === false ? message.split('').reverse().join('') : message;
    message = message.toUpperCase();

    key = key.toUpperCase();
    let encryptedString = '';
    let repeatedKey = this.repeatKey(message, key);

    for (let i = 0; i < message.length; i++) {
      let positionMessage = this.alphabet.indexOf(message[i]);
      if (positionMessage < 0) {
        encryptedString += message[i];
        continue;
      }
      let positionKey = this.alphabet.indexOf(repeatedKey[i]);
      let resultPosition = positionKey + positionMessage;
      resultPosition = resultPosition >= this.alphabet.length
        ? resultPosition - this.alphabet.length
        : resultPosition;
      encryptedString += this.alphabet[resultPosition];
    }

    return encryptedString;


  }
  repeatKey(message, key) {
    let keyIndex = 0;
    let repeatedKey = '';
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(message[i]) != -1) {
        repeatedKey += key[keyIndex];
        keyIndex++;
      }
      else {
        repeatedKey += message[i];
      }
      if (keyIndex === key.length) {
        keyIndex = 0;
      }
    }
    return repeatedKey;
  }

  decrypt(message, key) {
    message = this.machineType === false ? message.split('').reverse().join('') : message;
    message = message.toUpperCase();

    key = key.toUpperCase();

    let decryptedString = '';

    let repeatedKey = this.repeatKey(message, key);
    for (let i = 0; i < message.length; i++) {
      let positionMessage = this.alphabet.indexOf(message[i]);
      if (positionMessage < 0) {
        decryptedString += message[i];
        continue;
      }
      let positionKey = this.alphabet.indexOf(repeatedKey[i]);
      let resultPosition = 0;
      if (positionMessage < positionKey) {
        resultPosition = positionMessage + this.alphabet.length - positionKey;
      }
      else {
        resultPosition = positionMessage - positionKey;
      }
      decryptedString += this.alphabet[resultPosition];
    }
    return decryptedString;


  }
}

module.exports = VigenereCipheringMachine;
