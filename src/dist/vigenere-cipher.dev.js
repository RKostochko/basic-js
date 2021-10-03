"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../extensions/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
var VigenereCipheringMachine =
/*#__PURE__*/
function () {
  function VigenereCipheringMachine() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, VigenereCipheringMachine);

    this.mode = mode;
  }

  _createClass(VigenereCipheringMachine, [{
    key: "encrypt",
    value: function encrypt(message, key) {
      var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      if (!message || !key) throw new Error('Incorrect arguments!');
      message = message.toUpperCase();
      key = key.toUpperCase();

      for (var i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
          result += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(x % key.length) - 130) % 26 + 65);
          x++;
        } else {
          result += message[i];
        }
      }

      return this.mode ? result : result.split('').reverse().join('');
    }
  }, {
    key: "decrypt",
    value: function decrypt(message, key) {
      var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      if (!message || !key) throw new Error('Incorrect arguments!');
      message = message.toUpperCase();
      key = key.toUpperCase();

      for (var i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
          result += String.fromCharCode((message.charCodeAt(i) + 26 - key.charCodeAt(x % key.length)) % 26 + 65);
          x++;
        } else {
          result += message[i];
        }
      }

      return this.mode ? result : result.split('').reverse().join('');
    }
  }]);

  return VigenereCipheringMachine;
}();

exports["default"] = VigenereCipheringMachine;