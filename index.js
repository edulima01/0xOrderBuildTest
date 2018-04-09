"use strict";
exports.__esModule = true;
var _0xorderbuilder_1 = require("0xorderbuilder");
var bignumber_js_1 = require("bignumber.js");
function testZeroExOrderBuilder() {
    _0xorderbuilder_1.ZeroExOrderBuilder.buildQuoteProviderOrder("0xf60345bcff9feedb98bbdfc996b33cba00ee2c75", "0x6ff6c0ff1d68b964901f986d4c9fa3ac68346570", "0xd0a1e359811322d97991e03f863a0c30c2cf029c", new bignumber_js_1.BigNumber(1000000000000000000), new bignumber_js_1.BigNumber(10000), "http://localhost:3000/api/v0", _0xorderbuilder_1.EthNetwork.Kovan).then(function (order) {
        var signedOrder = _0xorderbuilder_1.ZeroExOrderBuilder.buildSignedOrder(order, "0x5edd9d13a5d62821bbea8ac6da7d7ca69a1b540dc99ac9232fefc04d09e28055");
        console.log(JSON.stringify(signedOrder));
    });
}
testZeroExOrderBuilder();
