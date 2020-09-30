const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let node = '';
    if (value !== undefined) {
      node = `( ${value} )`;
    }
    else {
      node = '( )';
    }
    this.chain.push(node);
    return this;
  },
  removeLink(position) {
    if (!this.chain[position]) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
