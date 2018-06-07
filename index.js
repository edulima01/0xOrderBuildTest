"use strict";
exports.__esModule = true;
var _0xorderbuilder_1 = require("0xorderbuilder");
var bignumber_js_1 = require("bignumber.js");
var request = require("request");
function testZeroExOrderBuilder() {
    _0xorderbuilder_1.ZeroExOrderBuilder.buildQuoteProviderOrder("0x047711f516ab00d804916df0aba15638b549cb10", "0xe41d2489571d322189246dafa5ebde1f4699f498", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", new bignumber_js_1.BigNumber(100000000000000000), 100000, "http://localhost:3000/api/v0", _0xorderbuilder_1.EthNetwork.Mainnet).then(function (order) {
        var signedOrder = _0xorderbuilder_1.ZeroExOrderBuilder.buildSignedOrder(order, "0x1fb6a31469f45d93b15eef7741a3501544ef73081ba33e6748ac49eb5265776f");
        console.log(JSON.stringify(signedOrder));
        request.post('http://localhost:3000/api/v0/order', { json: signedOrder }, function (error, httpResponse, body) {
            console.log(error);
            console.log(httpResponse);
            console.log(body);
        });
    })["catch"](function (error) { return console.log(error); });
}
testZeroExOrderBuilder();
