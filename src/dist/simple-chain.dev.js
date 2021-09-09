"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../extensions/index.js");

var _default = {
  chains: [],
  getLength: function getLength() {
    return this.chains.length;
  },
  addLink: function addLink(value) {
    this.chains.push("( ".concat(value, " )"));
    return this;
  },
  removeLink: function removeLink(position) {
    if (typeof position != 'number' || position < 1 || position > this.getLength()) {
      this.chains = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chains.splice(position - 1, 1);
    }

    return this;
  },
  reverseChain: function reverseChain() {
    if (this.getLength() > 1) {
      this.chains.reverse();
    }

    return this;
  },
  finishChain: function finishChain() {
    var chainMaker = this.chains.join('~~');
    this.chains = [];
    return chainMaker;
  }
};
exports["default"] = _default;