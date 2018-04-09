"use strict";
exports.__esModule = true;
var _0xorderbuilder_1 = require("0xorderbuilder");
var bignumber_js_1 = require("bignumber.js");
function testZeroExOrderBuilder() {
    _0xorderbuilder_1.ZeroExOrderBuilder.buildQuoteProviderOrder("0xb39a559ee400ed11a985d18168f2a8f10fc901f3", "0xd0a1e359811322d97991e03f863a0c30c2cf029c", "0x6ff6c0ff1d68b964901f986d4c9fa3ac68346570", new bignumber_js_1.BigNumber(100000000000000), new bignumber_js_1.BigNumber(100000000000), "http://localhost:3000/api/v0", _0xorderbuilder_1.EthNetwork.Kovan).then(function (order) {
        var signedOrder = _0xorderbuilder_1.ZeroExOrderBuilder.buildSignedOrder(order, "0x6e52331cc0a81c73014d2289a4676952ff2364d85c1c63c126753018fd49b7e6");
        console.log(JSON.stringify(signedOrder));
    });
}
"661728405000000000000";
testZeroExOrderBuilder();
